import { useEffect, useState } from 'react';

export const useScroll = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let previousScrollPosition = 0;
    let currentScrollPosition = 0;

    window.addEventListener('scroll', () => {
      currentScrollPosition = window.scrollY;

      if (previousScrollPosition - currentScrollPosition < 0) {
        setVisible(false);
      } else if (previousScrollPosition - currentScrollPosition > 0) {
        setVisible(true);
      }

      previousScrollPosition = currentScrollPosition;
    });
  }, []);

  return { visible };
};
