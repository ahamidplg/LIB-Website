import { ContactFormData } from '../types';

export interface SubmissionResponse {
  success: boolean;
  message: string;
  referenceId?: string;
}

/**
 * Service handler for submitting contact and consultation inquiries.
 * In development / demo mode, this simulates validation and response.
 * To connect to a live backend (e.g. Express proxy /api/contact, Resend, Sendgrid, or CRM webhook),
 * replace the simulated block with a fetch() call.
 */
export async function submitContactInquiry(data: ContactFormData): Promise<SubmissionResponse> {
  try {
    // If a backend endpoint is active:
    // const res = await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(data),
    // });
    // return await res.json();

    // Default: client-side validated simulation
    await new Promise((resolve) => setTimeout(resolve, 800));

    return {
      success: true,
      message: 'Permintaan konsultasi Anda telah berhasil dicatat. Tim LIB akan segera menghubungi Anda.',
      referenceId: `LIB-INQ-${Date.now().toString(36).toUpperCase()}`,
    };
  } catch (error) {
    return {
      success: false,
      message: 'Terjadi kendala saat mengirimkan formulir. Silakan coba kembali atau hubungi via email resmi.',
    };
  }
}
