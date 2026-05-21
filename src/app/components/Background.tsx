import backgroundImage from '../../imports/background.png';

export function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-background">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        role="presentation"
        aria-hidden
      />
    </div>
  );
}
