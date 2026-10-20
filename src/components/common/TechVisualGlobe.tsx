import React, { useEffect, useRef } from 'react';

export const TechVisualGlobe: React.FC<{ className?: string }> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let rotation = 0;

    // Set high DPI canvas resolution
    const updateSize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    updateSize();
    window.addEventListener('resize', updateSize);

    // Network nodes on the globe
    const nodes: { lat: number; lon: number; size: number }[] = [];
    const nodeCount = 36;
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        lat: (Math.random() - 0.5) * Math.PI * 0.8,
        lon: Math.random() * Math.PI * 2,
        size: Math.random() * 2 + 1.5,
      });
    }

    const render = () => {
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const radius = Math.min(width, height) * 0.36;
      const cx = width / 2;
      const cy = height / 2;

      ctx.clearRect(0, 0, width, height);

      // Deep space ambient glow
      const bgGrad = ctx.createRadialGradient(cx, cy, radius * 0.2, cx, cy, radius * 1.4);
      bgGrad.addColorStop(0, 'rgba(0, 105, 210, 0.12)');
      bgGrad.addColorStop(0.6, 'rgba(8, 32, 76, 0.05)');
      bgGrad.addColorStop(1, 'rgba(241, 246, 251, 0)');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Outer orbital ring 1 (tilted)
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(-0.4);
      ctx.beginPath();
      ctx.ellipse(0, 0, radius * 1.35, radius * 0.45, 0, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(0, 181, 204, 0.35)';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([8, 6]);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();

      // Outer orbital ring 2 (counter-tilted)
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(0.35);
      ctx.beginPath();
      ctx.ellipse(0, 0, radius * 1.25, radius * 0.38, 0, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(0, 105, 210, 0.4)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Orbital satellite node on ring 2
      const satAngle = rotation * 1.5;
      const satX = Math.cos(satAngle) * radius * 1.25;
      const satY = Math.sin(satAngle) * radius * 0.38;
      ctx.beginPath();
      ctx.arc(satX, satY, 4, 0, Math.PI * 2);
      ctx.fillStyle = '#00B5CC';
      ctx.fill();
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.restore();

      // Globe background sphere
      const sphereGrad = ctx.createRadialGradient(cx - radius * 0.3, cy - radius * 0.3, radius * 0.1, cx, cy, radius);
      sphereGrad.addColorStop(0, '#FFFFFF');
      sphereGrad.addColorStop(0.6, '#EBF3FC');
      sphereGrad.addColorStop(1, '#CFE1F7');
      ctx.fillStyle = sphereGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = 'rgba(0, 105, 210, 0.25)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Parallels (latitude lines)
      const latLines = [-0.5, -0.25, 0, 0.25, 0.5];
      ctx.strokeStyle = 'rgba(0, 105, 210, 0.18)';
      ctx.lineWidth = 1;
      latLines.forEach((latFrac) => {
        const yOffset = latFrac * radius;
        const rAtLat = Math.sqrt(Math.max(0, radius * radius - yOffset * yOffset));
        ctx.beginPath();
        ctx.ellipse(cx, cy + yOffset, rAtLat, rAtLat * 0.28, 0, 0, Math.PI * 2);
        ctx.stroke();
      });

      // Meridians (longitude curves rotating)
      const meridianCount = 8;
      ctx.strokeStyle = 'rgba(0, 105, 210, 0.15)';
      for (let m = 0; m < meridianCount; m++) {
        const angle = (m / meridianCount) * Math.PI + rotation;
        const scaleX = Math.cos(angle);
        ctx.beginPath();
        ctx.ellipse(cx, cy, Math.abs(scaleX) * radius, radius, 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Calculate 3D projected points on rotating sphere
      const projectedNodes: { x: number; y: number; z: number; size: number }[] = [];
      nodes.forEach((node) => {
        const currentLon = node.lon + rotation;
        const x3d = radius * Math.cos(node.lat) * Math.sin(currentLon);
        const y3d = radius * Math.sin(node.lat);
        const z3d = radius * Math.cos(node.lat) * Math.cos(currentLon);

        if (z3d > 0) {
          projectedNodes.push({
            x: cx + x3d,
            y: cy - y3d,
            z: z3d,
            size: node.size * (0.8 + (z3d / radius) * 0.4),
          });
        }
      });

      // Connect adjacent visible nodes with network vectors
      ctx.strokeStyle = 'rgba(0, 150, 150, 0.28)';
      ctx.lineWidth = 1;
      for (let i = 0; i < projectedNodes.length; i++) {
        for (let j = i + 1; j < projectedNodes.length; j++) {
          const dx = projectedNodes[i].x - projectedNodes[j].x;
          const dy = projectedNodes[i].y - projectedNodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < radius * 0.45) {
            ctx.beginPath();
            ctx.moveTo(projectedNodes[i].x, projectedNodes[i].y);
            ctx.lineTo(projectedNodes[j].x, projectedNodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw projected nodes
      projectedNodes.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = '#0069D2';
        ctx.fill();
        ctx.strokeStyle = '#00B5CC';
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // Subtle atmospheric rim
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(0, 181, 204, 0.5)';
      ctx.lineWidth = 2;
      ctx.stroke();

      rotation += 0.003;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', updateSize);
    };
  }, []);

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-full max-w-[540px] max-h-[540px] aspect-square block"
      />
    </div>
  );
};
