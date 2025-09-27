import React, { useRef, useEffect, useState, ReactNode } from 'react';

interface ScrollAnimationWrapperProps {
  children: ReactNode;
  className?: string;
  staggerIndex?: number; // index for delay class
}

const ScrollAnimationWrapper: React.FC<ScrollAnimationWrapperProps> = ({ children, className, staggerIndex }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      // FIX: Removed invalid 'triggerOnce' property. The 'IntersectionObserverInit' type
      // does not support it. The logic to unobserve the target already ensures the
      // animation triggers only once.
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const delayClass = staggerIndex !== undefined ? `stagger-delay-${staggerIndex}` : '';

  return (
    <div
      ref={ref}
      className={`scroll-animate ${isVisible ? 'is-visible' : ''} ${delayClass} ${className || ''}`}
    >
      {children}
    </div>
  );
};

export default ScrollAnimationWrapper;