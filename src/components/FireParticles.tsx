import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type ISourceOptions, MoveDirection, OutMode } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export function FireParticles() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
          onClick: {
            enable: true,
            mode: "push",
          },
        },
        modes: {
          push: { quantity: 4 },
          repulse: { distance: 100, duration: 0.4 },
        },
      },
      particles: {
        color: { value: ["#ff4500", "#ff8c00", "#ff0000"] },
        links: {
          enable: false, 
        },
        move: {
          direction: MoveDirection.top, 
          enable: true,
          outModes: { default: OutMode.out },
          speed: 2, 
          straight: false,
        },
        number: {
          value: 100,
          density: { enable: true, area: 800 },
        },
        opacity: {value: {min:0.5, max:0.9}},
        shape: { type: "circle" },
        size: { value: { min: 1, max: 5 } },
      },
      detectRetina: true,
    }),
    []
  );

  return init ? (
    <Particles id="fireParticles" className="absolute inset-0 z-0" options={options} />
  ) : null;
}
