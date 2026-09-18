import { useEffect, useRef, useState } from 'react';

export default function Reveal({
  children,
  delay = 0,
  className = '',
  as: Tag = 'div',
  ...rest
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Fallback for browsers without IntersectionObserver.
    // Defer the setState so it is not synchronous inside the effect.
    if (!('IntersectionObserver' in window)) {
      const t = setTimeout(() => setVisible(true), 0);
      return () => clearTimeout(t);
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -6% 0px' }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'in' : ''} ${className}`.trim()}
      style={{ '--d': `${delay}s` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}