import Particles from "@/components/ui/Particles"
import { Chip } from "@/components/ui/gradient-button";
import { Form } from "@/components/ui/form";

export default function Home() {
  return (
    <section id="hero">
      <div className="mt-10 md:mt-50 px-4 text-center">
        <Chip title="Waitlister Template"/>
        <div style={{ position: 'absolute', width: "100%", height: "100%", inset: "-0", pointerEvents:"none" }}>
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={700}
            particleSpread={30}
            speed={0.9}
            particleBaseSize={90}
            moveParticlesOnHover={false}
            alphaParticles={true}
            disableRotation={true}
          />
        </div>
        <h1 className="text-6xl font-medium text-[#f0f0f0]">
          Good things come to those {""}
          <span className="text-6xl italic font-instrument text-[#f0f0f0] sm:leading-relaxed">
            who wait.
          </span>
        </h1>
        <p className="mt-5 text-[#ffffff8f]">
          Generate leads, build excitement, and grow your email list ahead of launch day.
        </p>

        <Form/>
      </div>
    </section>
  );
}
