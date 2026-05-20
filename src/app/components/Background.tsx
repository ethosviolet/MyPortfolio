import creativeStars from '../../imports/creative-stars.png';

export function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-background">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{ backgroundImage: `url(${creativeStars})` }}
        role="presentation"
        aria-hidden
      />
    </div>
  );
}
