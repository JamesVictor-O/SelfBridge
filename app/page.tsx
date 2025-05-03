'use client';

import React, { useState, useEffect } from 'react';
import SelfQRcodeWrapper, { SelfAppBuilder } from '@selfxyz/qrcode';
import { v4 as uuidv4 } from 'uuid';

export default function SelfVerificationFrame() {
  const [userId, setUserId] = useState(null);
  const [verificationStatus, setVerificationStatus] = useState('pending');

  useEffect(() => {
    setUserId(uuidv4());
  }, []);

  if (!userId) return <div>Loading...</div>;

  // Configure SelfApp
  const selfApp = new SelfAppBuilder({
    appName: 'Self Verification Frame',
    // scope: process.env.APP_SCOPE, // e.g., 'my-self-frame-app'
    scope: "my-app-scope", 
    // endpoint: process.env.NEXT_PUBLIC_BACKEND_ENDPOINT, // e.g., 'https://your-app.com/api/verify'
    endpoint: "https://myapp.com/api/verify",
    endpointType: 'https',
    userId,
  }).build();

  return (
    <div style={{ textAlign: 'center', padding: '20px', maxWidth: '424px', margin: 'auto' }}>
      <h1>Verify Your Identity</h1>
      <p>Scan the QR code with the Self app to prove your humanity.</p>
      
      <SelfQRcodeWrapper
        selfApp={selfApp}
        onSuccess={() => {
          console.log('Verification successful!');
          setVerificationStatus('success');
        }}
        size={300}
      />
      <p style={{ color: verificationStatus === 'success' ? 'green' : 'gray' }}>
        Status: {verificationStatus === 'success' ? 'Verified!' : 'Awaiting verification...'}
      </p>
      {verificationStatus === 'success' && (
        <p>Congrats! You're verified and eligible for airdrops or gated content.</p>
      )}
      <meta
        name="fc:frame"
        content={JSON.stringify({
          version: 'next',
          imageUrl: 'https://your-app.com/og-image.png', // Replace with your OpenGraph image
          button: {
            title: 'Verify Now',
            action: {
              type: 'launch_frame',
              name: 'Self Verification',
              url: 'https://your-app.com',
              splashImageUrl: 'https://your-app.com/splash.png',
              splashBackgroundColor: '#ffffff',
            },
          },
        })}
      />
    </div>
  );
}