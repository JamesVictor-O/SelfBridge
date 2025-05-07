import { Metadata } from 'next';
import ClientWrapper from '../components/ClientWrapper';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Self Verification',
    other: {
      'fc:frame': JSON.stringify({
        version: 'vNext',
        imageUrl: `${process.env.NEXT_PUBLIC_URL}/og-image.png`,
        buttons: [{ label: 'Verify with Self 🔐', action: 'post_redirect' }],
        postUrl: `${process.env.NEXT_PUBLIC_URL}/api/verify`,
      }),
    },
  };
}

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-blue-100 flex flex-col items-center justify-center p-4 sm:p-8">
      
      <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 max-w-md w-full text-center transform transition-all hover:scale-105 duration-300">
        
        <h1 className="text-3xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500 mb-4">
          Verify Your Identity
        </h1>

        {/* Description */}
        <p className="text-gray-600 mb-6 text-sm sm:text-base">
          Scan the QR code below with the Self app to securely verify your identity.
        </p>

        {/* QR Code Wrapper with Border */}
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <ClientWrapper />
          </div>
        </div>

       
        <p className="text-gray-500 text-sm">
          Don’t have the Self app?{' '}
          <a
            href="https://self.xyz/download" // Replace with actual Self app download link
            className="text-indigo-600 hover:text-indigo-800 font-semibold underline transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download it now
          </a>
        </p>
      </div>

      
      <footer className="mt-8 text-gray-400 text-xs">
        Powered by <a href="https://self.xyz" className="hover:text-indigo-600">Self Protocol & Celo</a>
      </footer>
    </div>
  );
}