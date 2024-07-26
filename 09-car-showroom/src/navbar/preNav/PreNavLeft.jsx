import { phoneImg } from "../../static/Images";
const PreNavLeft = () => {
  return (
    <div className="w-1/2 md:w-1/3 flex align-baseline">
      <a href="tel:01149842991" className="flex text-orange-500 text-center">
        <img src={phoneImg} alt="" className="h-7" />
        011 49842991
      </a>
    </div>
  );
};
export default PreNavLeft;
