import palmPattern from '../../imports/image.png';

export function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Sunset gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-200 via-orange-300 via-30% via-pink-300 via-50% via-purple-300 via-70% to-indigo-400" />

      {/* Repeating palm pattern at bottom with fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-96"
        style={{
          backgroundImage: `url(${palmPattern})`,
          backgroundRepeat: 'repeat',
          backgroundSize: 'auto',
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 30%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 30%)'
        }}
      />
    </div>
  );
}
