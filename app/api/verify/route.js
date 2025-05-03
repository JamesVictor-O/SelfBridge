import { SelfBackendVerifier, getUserIdentifier } from '@selfxyz/core';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { proof, publicSignals } = req.body;

    if (!proof || !publicSignals) {
      return res.status(400).json({ message: 'Proof and publicSignals are required' });
    }

    // Initialize the verifier
    const selfBackendVerifier = new SelfBackendVerifier(
      process.env.NEXT_PUBLIC_APP_SCOPE, // e.g., 'my-self-frame-app'
      process.env.NEXT_PUBLIC_BACKEND_ENDPOINT // e.g., 'https://your-app.com/api/verify'
    );

    // Extract user ID
    const userId = await getUserIdentifier(publicSignals);
    console.log('Extracted userId:', userId);

    // Verify the proof
    const result = await selfBackendVerifier.verify(proof, publicSignals);

    if (result.isValid) {
      return res.status(200).json({
        status: 'success',
        result: true,
        credentialSubject: result.credentialSubject,
      });
    } else {
      return res.status(500).json({
        status: 'error',
        result: false,
        message: 'Verification failed',
        details: result.isValidDetails,
      });
    }
  } catch (error) {
    console.error('Error verifying proof:', error);
    return res.status(500).json({
      status: 'error',
      result: false,
      message: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}