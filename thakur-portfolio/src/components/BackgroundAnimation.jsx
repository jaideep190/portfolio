import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const BackgroundAnimation = () => {
  const props = useSpring({
    from: { background: 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)' },
    to: async (next) => {
      while (1) {
        await next({ background: 'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)' });
        await next({ background: 'linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)' });
        await next({ background: 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)' });
      }
    },
    config: { duration: 5000 },
  });

  return (
    <animated.div
      style={{
        ...props,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
      }}
    />
  );
};

export default BackgroundAnimation;