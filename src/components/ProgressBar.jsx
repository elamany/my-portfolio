import { useEffect, useState } from 'react';

export default function ProgressBar() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const update = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const pct = max > 0 ? (doc.scrollTop / max) * 100 : 0;
      setWidth(pct);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <div className="progress" aria-hidden="true">
      <span style={{ width: `${width}%` }} />
    </div>
  );
}