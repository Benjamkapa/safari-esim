import { ReactNode, useEffect, useRef, useState } from "react";
export default function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShow(true);
          o.disconnect();
        }
      },
      { threshold: 0.08 },
    );
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${show ? "revealed" : ""} ${className}`}>
      {children}
    </div>
  );
}
