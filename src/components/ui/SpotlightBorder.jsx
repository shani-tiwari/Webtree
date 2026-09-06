
import { useCallback, useRef } from 'react';
import {cn} from '../../utils/utils.js'



export function SpotlightBorderEffect({
  children,
  className,
  radius,
  size = 200,
  intensity = 0.5,
}) {
  const ref = useRef(null);

  const updateSpot = useCallback((event) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    el.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
    el.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
  }, [ref]);

  const clearSpot = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--spot-x", "-9999px");
    el.style.setProperty("--spot-y", "-9999px");
  }, [ref]);

  const radiusClass = radius ? `rounded-${radius}` : "rounded-2xl";

  return (
    <div
      ref={ref}
      onPointerMove={updateSpot}
      onPointerLeave={clearSpot}
      className={cn("group relative", className)}
      style={
        {
          "--spot-x": "-9999px",
          "--spot-y": "-9999px",
          "--size": `${size}px`,
          "--intensity": intensity,
        } 
      }
    >
      <div
        aria-hidden="true"
        className={cn("pointer-events-none absolute inset-0 border border-white/10", radiusClass)}
      />
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 p-px opacity-80 transition-opacity duration-300 group-hover:opacity-100",
          radiusClass
        )}
        style={{
          background: "radial-gradient(circle var(--size) at var(--spot-x) var(--spot-y), rgba(255,255,255, var(--intensity)), transparent 60%)",
          WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 p-px opacity-0 transition-opacity duration-300 group-hover:opacity-100",
          radiusClass
        )}
        style={{
          background:
            "radial-gradient(circle var(--size) at var(--spot-x) var(--spot-y), rgba(255,255,255, calc(var(--intensity) + 0.18)), transparent 56%)",
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
      <div className={cn("relative h-full pointer-events-auto rounded-2xl")}>
        {children}
      </div>
    </div>
  );
};


export default function SpotlightBorder({children}) {
  return (
    <SpotlightBorderEffect radius="4xl" size={460} intensity={0.5} className="relative p-px ">
     {children} 
    </SpotlightBorderEffect>
  );
}


