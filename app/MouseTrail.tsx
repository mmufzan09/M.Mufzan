// MouseSmokeTrail.tsx
import React, { useEffect, useRef } from 'react';

const colors = [
  [255, 182, 193], // light pink
  [173, 216, 230], // light blue
  [221, 160, 221], // plum
  [144, 238, 144], // light green
  [255, 255, 224], // light yellow
  [255, 204, 229], // pastel rose
];

const MouseSmokeTrail: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const smokeParticles: {
      x: number;
      y: number;
      alpha: number;
      size: number;
      color: [number, number, number];
    }[] = [];

    const mouseMoveHandler = (e: MouseEvent) => {
      for (let i = 0; i < 2; i++) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        smokeParticles.push({
          x: e.clientX + Math.random() * 10 - 5,
          y: e.clientY + Math.random() * 10 - 5,
          alpha: 0.2 + Math.random() * 0.1,
          size: Math.random() * 40 + 20,
            color: [color[0], color[1], color[2]],
        });
      }
    };

    window.addEventListener('mousemove', mouseMoveHandler);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < smokeParticles.length; i++) {
        const p = smokeParticles[i];
        p.alpha -= 0.003;
        p.y -= 0.3;

        if (p.alpha <= 0) {
          smokeParticles.splice(i, 1);
          i--;
          continue;
        }

        const [r, g, b] = p.color;
        const gradient = ctx.createRadialGradient(
          p.x, p.y, 0,
          p.x, p.y, p.size
        );
        gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${p.alpha})`);
        gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

        ctx.fillStyle = gradient;
        ctx.fillRect(p.x - p.size, p.y - p.size, p.size * 2, p.size * 2);
      }

      requestAnimationFrame(animate);
    };

    animate();

    const resizeHandler = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler);
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-50"
      style={{ background: 'transparent' }}
    />
  );
};

export default MouseSmokeTrail;
