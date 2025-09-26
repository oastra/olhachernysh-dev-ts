import React from 'react';

interface SubmitButtonProps {
  isSubmitting: boolean;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({ isSubmitting }) => {
  return (
    <div className="pt-4 flex justify-center">
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-[231px] rounded-full bg-white/15 backdrop-blur-sm px-4 py-3.5 text-sm 
                 text-white border border-white/20
                 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40
                 transition-all duration-300 hover:bg-white/20 hover:border-white/30 
                 shadow-lg hover:shadow-xl font-medium
                 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white/15
                 flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
            Sending...
          </>
        ) : (
          'Send'
        )}
      </button>
    </div>
  );
};
