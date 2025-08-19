'use client';

export default function ContactForm() {
  return (
    <form className="space-y-4">
      {[
        { label: 'Full Name', placeholder: 'Your Name*', type: 'text' },
        { label: 'Email', placeholder: 'Your Email*', type: 'email' },
        {
          label: 'Type of Business',
          placeholder: 'Your Type of Business*',
          type: 'text',
        },
        {
          label: 'Project Type',
          placeholder: 'Your Project Type*',
          type: 'text',
        },
        { label: 'Budget Range', placeholder: 'Your Budget*', type: 'text' },
      ].map((field, idx) => (
        <input
          key={idx}
          type={field.type}
          placeholder={field.placeholder}
          className="w-full rounded-md bg-white/10 px-4 py-3 text-sm placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#8ED7FF]"
        />
      ))}

      <textarea
        placeholder="Type here..."
        rows={4}
        className="w-full rounded-md bg-white/10 px-4 py-3 text-sm placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#8ED7FF]"
      />

      <label className="flex items-center gap-2 text-xs">
        <input type="checkbox" className="accent-[#8ED7FF]" />I agree to the
        Terms of Service and Privacy Policy
      </label>

      <button
        type="submit"
        className="w-full rounded-full bg-[#4B6CB7] hover:bg-[#395591] px-6 py-3 text-sm font-medium transition"
      >
        Send
      </button>
    </form>
  );
}
