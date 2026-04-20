import Slider from "../shared/Slider";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="max-w-360 w-full py-10 flex flex-col items-center justify-center overflow-hidden"
    >
      <p className="mb-5 text-[1.25rem] text-[#E58411] tracking-widest">
        TESTIMONIALS
      </p>
      <p className="text-4xl font-bold  max-w-104 mb-12">Our Client Reviews</p>

      <div className="w-full max-w-full">
        <Slider />
      </div>
    </section>
  );
}
