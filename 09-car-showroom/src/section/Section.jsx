import Form from "./Form";
import Slogan from "../Slogan/Slogan";
import Slider from "./Slider";
const Section = () => {
  return (
    <main className="h-[70rem] md:h-[35rem]  w-full">
      <Slogan />

      <section className="h-[67rem] md:h-[32rem]  w-[100vw]  flex  md:flex  flex-col md:flex-row ml-0 mr-0">
        <Slider />
        <Form />
      </section>
    </main>
  );
};
export default Section;