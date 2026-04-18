import HeroWrapper from "./HeroWrapper";
import Button from "../../ui/Button";

export default function Hero() {
  return (
    <HeroWrapper>
      <section className="relative w-full py-16 md:py-32 px-4 md:px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-block mb-4 md:mb-6">
            <h5>FROM CONCEPT TO SCALABLE CODE</h5>
          </div>

          {/* Main Title */}
          <h1 className="text-heading-md">
            Turning Vision Into <br className="hidden sm:block" /> Scalable Reality
          </h1>

          {/* Subtitle */}
          <p className="mt-[4%]">
            We build smart, scalable software that transforms ideas into streamlined, real-world solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
            <Button variant="primary">
              Get Started
            </Button>
            <Button variant="outline">
              Learn More →
            </Button>
          </div>
        </div>
      </section>
    </HeroWrapper>
  );
}