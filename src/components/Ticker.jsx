const ITEMS = [
  'Flutter', 'Django', 'DRF', 'Python', 'TensorFlow', 'PyTorch',
  'PostgreSQL', 'PHP', 'MySQL', 'JavaScript', 'OpenCV', 'Keras',
  'Stripe', 'Chapa', 'GetX', 'Hive', 'MediaPipe', 'REST APIs',
];

export default function Ticker() {
  // Duplicate for seamless loop
  const loop = [...ITEMS, ...ITEMS];

  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {loop.map((item, i) => (
          <span key={i}>
            {item}
            <i />
          </span>
        ))}
      </div>
    </div>
  );
}