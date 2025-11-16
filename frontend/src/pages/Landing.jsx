import BackgroundLayer from "../components/BackgroundLayer";
import BackgroundVideo from "../components/BackgroundVideo";
import Spotlight from "../components/Spotlight";
import ScrollSection from "../components/ScrollSection";
import SectorGrid from "../components/SectorGrid";
import PublicNavbar from "../components/PublicNavbar";
import PublicFooter from "../components/PublicFooter";

export default function Landing() {
  return (
    <div className="relative bg-[#0d0d0d] text-white overflow-x-hidden">
      <PublicNavbar />

      {/* Background layers (video first so blobs sit above it) */}
      <BackgroundVideo src="/bg.mp4" opacity={0.05} />
      <BackgroundLayer />
      <Spotlight enabled={true} />

      {/* Content (z-10+) */}
      <div className="relative z-10">
        <ScrollSection
          bg="purple"
          title="ProofVault — Cryptographic Proof for the Real World"
          subtitle="Immutable evidence, decentralized storage, and instant verification for law enforcement, enterprises, and individuals."
          ctas={[{ label: "Get Started" }, { label: "How It Works" }]}
        >
          Built with blockchain trust · IPFS storage · SHA-256 hashing.
        </ScrollSection>

        <ScrollSection
          bg="blue"
          title="Blockchain Ledger + IPFS Storage"
          subtitle="Files are hashed, stored securely, and anchored on a transparent ledger."
          ctas={[{ label: "View Documentation" }, { label: "Try Demo" }]}
        >
          Transparent · Auditable · Tamper-evident.
        </ScrollSection>

        {/* Sector grid (D) */}
        <SectorGrid />

        <ScrollSection
          bg="pink"
          title="Designed for Multiple Sectors"
          subtitle="Police · Land Registry · Legal · Corporate Compliance · Individuals."
          ctas={[{ label: "Contact Us" }, { label: "Pricing" }]}
        >
          Secure verification + traceable history across industries.
        </ScrollSection>
      </div>

      <PublicFooter />
    </div>
  );
}
