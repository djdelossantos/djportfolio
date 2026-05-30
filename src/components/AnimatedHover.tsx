import { cloneElement, isValidElement, useRef, type ReactElement } from "react";
import gsap from "gsap";

export function AnimatedHover({
  children,
  className,
  glow = true,
  scaleOnHover = true,
}: {
  children: ReactElement;
  className?: string;
  glow?: boolean;
  scaleOnHover?: boolean;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLElement | null>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const animateChild = (vars: gsap.TweenVars) => {
    if (!childRef.current || prefersReducedMotion()) {
      return;
    }

    gsap.to(childRef.current, {
      duration: 0.45,
      ease: "power3.out",
      overwrite: "auto",
      ...vars,
    });
  };

  const handlePointerEnter = () => {
    animateChild({
      y: -4,
      scale: scaleOnHover ? 1.035 : 1,
    });

    if (glow && glowRef.current && !prefersReducedMotion()) {
      gsap.to(glowRef.current, {
        autoAlpha: 1,
        scale: 1.06,
        duration: 0.35,
        ease: "power3.out",
        overwrite: "auto",
      });
    }

  };

  const handlePointerLeave = () => {
    animateChild({ x: 0, y: 0, scale: 1 });

    if (glow && glowRef.current && !prefersReducedMotion()) {
      gsap.to(glowRef.current, {
        autoAlpha: 0,
        scale: 0.9,
        duration: 0.35,
        ease: "power3.out",
        overwrite: "auto",
      });
    }

  };

  const handlePointerDown = () => {
    animateChild({
      scale: scaleOnHover ? 0.96 : 1,
      duration: 0.12,
      ease: "power2.out",
    });
  };

  const handlePointerUp = () => {
    animateChild({
      scale: scaleOnHover ? 1.035 : 1,
      duration: 0.22,
      ease: "back.out(2)",
    });
  };

  if (!isValidElement(children)) {
    return children;
  }

  const childWithRef = cloneElement(children, {
    className: `${children.props.className ?? ""} relative z-10`,
    ref: (node: HTMLElement | null) => {
      childRef.current = node;

      const existingRef = (children as ReactElement & { ref?: React.Ref<HTMLElement> }).ref;

      if (typeof existingRef === "function") {
        existingRef(node);
      } else if (existingRef && "current" in existingRef) {
        existingRef.current = node;
      }
    },
  });

  return (
    <div
      ref={wrapperRef}
      className={`relative isolate inline-block ${className ?? ""}`}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
    >
      {glow && (
        <div
          ref={glowRef}
          aria-hidden="true"
          className="pointer-events-none absolute -inset-3 -z-10 rounded-[inherit] bg-gradient-to-r from-violet-400/18 via-fuchsia-400/14 to-pink-400/18 opacity-0 blur-xl"
          style={{ transform: "scale(0.9)" }}
        />
      )}
      {childWithRef}
    </div>
  );
}
