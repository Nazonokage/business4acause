import { useEffect, useRef } from 'react';

export default function ParticlesBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const particleConfig = {
      particles: {
        number: {
          value: 10,
          density: {
            enable: true,
            value_area: 900,
          },
        },
        color: {
          value: '#D4CFAE',
        },
        shape: {
          type: 'polygon',
          stroke: {
            width: 1,
            color: '#8D261F',
          },
          polygon: {
            nb_sides: 6,
          },
        },
        opacity: {
          value: 0.34,
          random: false,
          anim: {
            enable: true,
            speed: 0.25,
            opacity_min: 0.22,
            sync: false,
          },
        },
        size: {
          value: 96,
          random: false,
          anim: {
            enable: true,
            speed: 0.35,
            size_min: 72,
            sync: false,
          },
        },
        line_linked: {
          enable: false,
        },
        move: {
          enable: true,
          speed: 0.45,
          direction: 'none',
          random: true,
          straight: false,
          out_mode: 'out',
          bounce: false,
        },
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: false,
          },
          onclick: {
            enable: false,
          },
          resize: true,
        },
      },
      retina_detect: true,
    };

    const init = () => {
      if (window.particlesJS && canvasRef.current) {
        // React StrictMode can mount twice in dev; clear old instance first.
        if (window.pJSDom?.length) {
          window.pJSDom.forEach((instance) => {
            instance?.pJS?.fn?.vendors?.destroypJS?.();
          });
          window.pJSDom = [];
        }
        window.particlesJS('particles-canvas', particleConfig);
      }
    };

    if (window.particlesJS) {
      init();
    } else {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js';
      script.onload = init;
      document.body.appendChild(script);
    }

    return () => {
      if (window.pJSDom?.length) {
        window.pJSDom.forEach((instance) => {
          instance?.pJS?.fn?.vendors?.destroypJS?.();
        });
        window.pJSDom = [];
      }
    };
  }, []);

  return (
    <div
      id="particles-canvas"
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        background:
          'radial-gradient(circle at 18% 28%, rgba(107, 68, 35, 0.15) 0%, #F0E5C1 40%, #F5ECD7 100%)',
        pointerEvents: 'none',
      }}
    />
  );
}

