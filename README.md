# SelfBridge

**Simplify user identity verification with the Self Protocol**

SelfBridge is a plug-and-play infrastructure that makes integrating the [Self Protocol](https://docs.self.xyz/) effortless for developers and businesses. By abstracting the complexities of zero-knowledge proofs (ZKPs), passport NFC scanning, and smart contract interactions, Selfless enables privacy-preserving user verification for Web3 and Web2 applications. Whether you're building a DeFi platform, a Farcaster mini-app, or a regulated service, Selfless lets you verify user attributes (like age or uniqueness) with minimal setup and maximum privacy.

## 🚀 What is SelfBridge?

SelfBridge is an SDK and framework that simplifies integration with the Self Protocol, a privacy-first, open-source identity solution using zero-knowledge proofs. With SelfBridge, developers can add user verification (e.g., "prove user is over 18" or "prove user is unique") to their apps without wrestling with ZKPs, smart contracts, or complex configurations.

Built initially as a Farcaster Frame ("Self-Verification Frame"), SelfBridge has evolved into a generalized solution for any app needing secure, privacy-preserving identity verification.

## 🤔 The Problem We're Solving

The Self Protocol is powerful but complex to integrate. Developers face challenges like:
- Configuring zero-knowledge proof circuits.
- Deploying and managing smart contracts for on-chain verification.
- Handling passport NFC scanning and user flows.
- Ensuring compatibility with privacy regulations (e.g., GDPR, CCPA).

These hurdles make it tough for small teams, non-blockchain developers, or businesses to adopt Self, despite its value for Sybil resistance, KYC/AML compliance, and user trust.

**SelfBridge solves this by**:
- Providing a simple SDK with pre-built APIs and UI components.
- Abstracting ZKP generation, smart contract interactions, and verification logic.
- Offering plug-and-play integration for Web3 (e.g., Farcaster, Ethereum) and Web2 apps.
- Reducing user friction with streamlined verification flows (e.g., QR code scanning).

## 🎯 Use Cases

SelfBridge is ideal for businesses and developers in:
- **DeFi Platforms**: Verify user age or sanctions compliance without storing sensitive data.
- **Web3 Projects**: Prevent Sybil attacks in airdrops or governance (e.g., quadratic voting).
- **Farcaster Mini-Apps**: Add user verification for gated content or community moderation.
- **Gaming/NFT Platforms**: Ensure users meet age or uniqueness requirements for drops.
- **Regulated Industries**: Streamline KYC/AML for gambling, alcohol sales, or healthcare.
- **Social Media**: Combat bots with humanity verification while preserving privacy.

## 🌟 Features

- **Simple Integration**: Add verification with a single line of code (e.g., `<SelflessVerifyButton />`).
- **Cross-Platform**: Supports Farcaster, web apps, mobile apps, and blockchain dApps.
- **Pre-Built Policies**: Verify common attributes like "over 18," "unique user," or "not on sanctions list."
- **Customizable UI**: Embed QR code scanners and verification flows with your branding.
- **Privacy-First**: Leverages Self’s ZKPs to ensure no sensitive user data is stored.
- **Scalable**: Works for small startups and large enterprises, with on-chain and off-chain options.
- **Developer-Friendly**: Clear docs, sandbox testing, and CLI tools for rapid setup.

## 🛠️ How It Works

SelfBridge abstracts the Self Protocol’s complexity into a simple workflow:

1. **Setup**: Install the Selfless SDK and configure your verification policy (e.g., "require age over 18").
2. **User Flow**: Users scan a QR code, open the Self app, scan their passport’s NFC chip, and generate a ZKP proving the required attribute.
3. **Verification**: SelfBridge validates the ZKP (on-chain or off-chain) and returns a `true/false` result to your app.
4. **Outcome**: Your app grants access or proceeds, with no sensitive user data ever shared or stored.

### Example Workflow
For a DeFi app needing age verification:
```javascript
// Install Selfless
import { SelflessVerifyButton } from 'selfless-sdk';

// Add to your React app
<SelflessVerifyButton
  apiKey="your-api-key"
  policy="age_over_18"
  onSuccess={() => console.log("User is over 18!")}
  onError={() => console.log("Verification failed")}
/>

- User scans a QR code, verifies their age via the Self app, and the app receives a true result if valid.
- No passport data is shared, ensuring privacy and compliance.

