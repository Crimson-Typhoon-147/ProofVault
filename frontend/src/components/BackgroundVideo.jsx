export default function BackgroundVideo({ src = "/bg.mp4", opacity = 0.07 }) {
    // if you want to use a remote URL, set src to that URL
    return (
      <div className="absolute inset-0 z-5 pointer-events-none overflow-hidden">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          style={{ opacity: opacity, transform: "translateZ(0)" }}
        >
          <source src={src} type="video/mp4" />
        </video>
      </div>
    );
  }
  