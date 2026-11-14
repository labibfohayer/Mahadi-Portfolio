import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  /** Full text string to reveal */
  text?: string;
  /** If multi-line, specify lines of text */
  lines?: string[];
  /** HTML Tag (default: h2) */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
  className?: string;
  style?: React.CSSProperties;
  /** ScrollTrigger trigger position (default: "top 88%") */
  triggerStart?: string;
  /** Animation duration per word in seconds (default: 0.8) */
  duration?: number;
  /** Stagger between words in seconds (default: 0.08) */
  stagger?: number;
  /** Initial rotation tilt in degrees (default: 6) */
  rotate?: number;
  /** Optional delay before animation starts */
  delay?: number;
  /** Accessibility label */
  ariaLabel?: string;
  children?: React.ReactNode;
}

export const TextReveal: React.FC<TextRevealProps> = ({
  text,
  lines,
  as: Component = 'h2',
  className = '',
  style = {},
  triggerStart = 'top 88%',
  duration = 0.8,
  stagger = 0.08,
  rotate = 6,
  delay = 0,
  ariaLabel,
  children,
}) => {
  const containerRef = useRef<HTMLElement>(null);
  const wordsRef = useRef<HTMLSpanElement[]>([]);
  const hasRevealedRef = useRef<boolean>(false);

  // Serialize lines to a stable primitive string key to prevent recreation on inline array literals
  const linesKey = (lines && lines.length > 0 ? lines.join('~|~') : (text || ''));

  // Collect text into lines of words
  const parsedLines: string[][] = React.useMemo(() => {
    if (lines && lines.length > 0) {
      return lines.map((l) => l.trim().split(/\s+/).filter(Boolean));
    }
    if (text) {
      return [text.trim().split(/\s+/).filter(Boolean)];
    }
    return [];
  }, [linesKey]);

  const fullText = ariaLabel || (lines ? lines.join(' ') : text) || '';

  useEffect(() => {
    const el = containerRef.current;
    const words = wordsRef.current.filter(Boolean);

    if (!el || words.length === 0) return;

    // If already revealed, ensure words stay in final revealed position and do not re-animate
    if (hasRevealedRef.current) {
      gsap.set(words, {
        yPercent: 0,
        rotation: 0,
      });
      return;
    }

    // Zero-state: initially tilted and lowered below the clip mask
    gsap.set(words, {
      yPercent: 110,
      rotation: rotate,
      transformOrigin: '0% 100%',
      force3D: true,
    });

    // Weichie's signature text-reveal GSAP ScrollTrigger timeline
    const anim = gsap.to(words, {
      yPercent: 0,
      rotation: 0,
      duration,
      stagger,
      delay,
      ease: 'power3.out',
      onComplete: () => {
        hasRevealedRef.current = true;
      },
      scrollTrigger: {
        trigger: el,
        start: triggerStart,
        once: true,
        invalidateOnRefresh: false,
      },
    });

    return () => {
      // Only kill and revert if it hasn't completed
      if (!hasRevealedRef.current) {
        anim.scrollTrigger?.kill();
        anim.kill();
      }
    };
  }, [duration, stagger, rotate, delay, triggerStart, linesKey]);

  // Reset words ref before render
  wordsRef.current = [];

  if (children && (!text && (!lines || lines.length === 0))) {
    return (
      // @ts-expect-error Polymorphic component
      <Component ref={containerRef} className={className} style={style} aria-label={fullText}>
        {children}
      </Component>
    );
  }

  return (
    // @ts-expect-error Polymorphic component
    <Component
      ref={containerRef}
      className={`text-reveal ${className}`}
      style={style}
      aria-label={fullText}
      data-text-reveal=""
      data-text-reveal-ready=""
    >
      {parsedLines.map((lineWords, lineIdx) => (
        <span
          key={lineIdx}
          className="text-reveal__line-wrapper block"
          style={{ display: 'block' }}
        >
          {lineWords.map((word, wordIdx) => (
            <React.Fragment key={wordIdx}>
              <span
                className="text-reveal__word-mask"
                aria-hidden="true"
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  overflow: 'clip',
                  verticalAlign: 'top',
                  lineHeight: 'inherit',
                }}
              >
                <span
                  ref={(span) => {
                    if (span) wordsRef.current.push(span);
                  }}
                  className="text-reveal__word"
                  aria-hidden="true"
                  style={{
                    position: 'relative',
                    display: 'inline-block',
                    transformOrigin: '0% 100%',
                    willChange: 'transform',
                  }}
                >
                  {word}
                </span>
              </span>
              {wordIdx < lineWords.length - 1 && (
                <span className="text-reveal__space inline-block" aria-hidden="true">
                  &nbsp;
                </span>
              )}
            </React.Fragment>
          ))}
        </span>
      ))}
    </Component>
  );
};

export default TextReveal;
