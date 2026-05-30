import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const scrambleCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&";

function getScrambledText(text: string, revealedCharacterCount: number) {
  return text
    .split("")
    .map((character, index) => {
      if (character === " ") {
        return " ";
      }

      if (index < revealedCharacterCount) {
        return character;
      }

      return scrambleCharacters[Math.floor(Math.random() * scrambleCharacters.length)];
    })
    .join("");
}

export function ScrambleText({
  text,
  className,
  delay = 0,
  duration = 0.8,
}: {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
}) {
  const textRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const element = textRef.current;

    if (!element) {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      element.textContent = text;
      return;
    }

    const ctx = gsap.context(() => {
      const state = { progress: 0 };

      element.textContent = getScrambledText(text, 0);

      gsap.to(state, {
        progress: 1,
        duration,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          once: true,
        },
        onUpdate: () => {
          const revealedCharacterCount = Math.floor(state.progress * text.length);
          element.textContent = getScrambledText(text, revealedCharacterCount);
        },
        onComplete: () => {
          element.textContent = text;
        },
      });
    }, element);

    return () => ctx.revert();
  }, [delay, duration, text]);

  return (
    <span ref={textRef} className={className}>
      {text}
    </span>
  );
}
