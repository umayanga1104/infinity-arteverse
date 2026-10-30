import { useEffect } from 'react';

export function useScrollLock(isLocked) {
  useEffect(() => {
    if (!isLocked) return;

    const preventDefault = (e) => e.preventDefault();
    const preventKeys = (e) => {
      const keys = ['ArrowDown', 'ArrowUp', ' ', 'PageDown', 'PageUp', 'Home', 'End'];
      if (keys.includes(e.key)) e.preventDefault();
    };

    // Lock to top if locking at the start
    if (window.scrollY !== 0) {
      window.scrollTo(0, 0);
    }

    window.addEventListener('wheel', preventDefault, { passive: false });
    window.addEventListener('touchmove', preventDefault, { passive: false });
    window.addEventListener('keydown', preventKeys);

    return () => {
      window.removeEventListener('wheel', preventDefault);
      window.removeEventListener('touchmove', preventDefault);
      window.removeEventListener('keydown', preventKeys);
    };
  }, [isLocked]);
}