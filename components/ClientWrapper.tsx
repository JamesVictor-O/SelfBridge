'use client';
import dynamic from 'next/dynamic';

// Dynamically import SelfVerificationClient with SSR disabled
const SelfVerificationClient = dynamic(
  () => import('./SelfVerificationClient'),
  { ssr: false }
);

export default function ClientWrapper() {
  return <SelfVerificationClient />;
}