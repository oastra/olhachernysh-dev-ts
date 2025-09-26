import React from 'react';

interface StatusMessageProps {
  status: 'idle' | 'success' | 'error';
}

export const StatusMessage: React.FC<StatusMessageProps> = ({ status }) => {
  if (status === 'idle') return null;

  return (
    <>
      {status === 'success' && (
        <div className="rounded-md bg-green-500/20 border border-green-400/30 p-4">
          <p className="text-green-100 text-h6">
            Thank you! Your message has been sent successfully. We&apos;ll get
            back to you soon.
          </p>
        </div>
      )}

      {status === 'error' && (
        <div className="rounded-md bg-red-500/20 border border-red-400/30 p-4">
          <p className="text-red-100 text-h6">
            Something went wrong. Please try again later.
          </p>
        </div>
      )}
    </>
  );
};
