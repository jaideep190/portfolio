import React, { useRef, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';

const BackgroundAnimation = () => {
  const canvasRef = useRef(null);
  const elementsRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 0.3 },
    config: { duration: 3000 },
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createElements = () => {
      const elementsArray = [];
      const numberOfElements = 50;

      for (let i = 0; i < numberOfElements; i++) {
        elementsArray.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 100 + 50,
          speedX: Math.random() * 0.5 - 0.25,
          speedY: Math.random() * 0.5 - 0.25,
          opacity: Math.random() * 0.5 + 0.1,
        });
      }

      return elementsArray;
    };

    const drawElements = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      elementsRef.current.forEach((element) => {
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(
          element.x, element.y, 0,
          element.x, element.y, element.size
        );
        gradient.addColorStop(0, `rgba(100, 255, 218, ${element.opacity})`);
        gradient.addColorStop(1, 'rgba(100, 255, 218, 0)');
        ctx.fillStyle = gradient;
        ctx.arc(element.x, element.y, element.size, 0, Math.PI * 2);
        ctx.fill();

        // Update element position
        element.x += element.speedX;
        element.y += element.speedY;

        // Wrap around edges
        if (element.x > canvas.width + element.size) element.x = -element.size;
        if (element.x < -element.size) element.x = canvas.width + element.size;
        if (element.y > canvas.height + element.size) element.y = -element.size;
        if (element.y < -element.size) element.y = canvas.height + element.size;

        // Interact with mouse
        const dx = element.x - mouseRef.current.x;
        const dy = element.y - mouseRef.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 300) {
          const angle = Math.atan2(dy, dx);
          const force = (300 - distance) / 30;
          element.x += Math.cos(angle) * force;
          element.y += Math.sin(angle) * force;
        }
      });
    };

    const animate = () => {
      drawElements();
      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    elementsRef.current = createElements();
    animate();

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <animated.div style={props}>
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
        }}
      />
    </animated.div>
  );
};

export default BackgroundAnimation;