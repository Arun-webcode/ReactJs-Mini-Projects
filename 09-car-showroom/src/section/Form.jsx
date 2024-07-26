import {
  TourOptionsComponent,
  TourTypeComponent,
  TextAreaComponent,
  InputComponent,
  HeadingComponent,
  SelectorComponent,
  ButtonComponent,
} from "./FormComponents";
import { pickupImg, dropLocationImg, phoneNumImg } from "../static/Images";
import { tourOptions, tourType, vehicles } from "../static/data";
const Form = () => {
  return (
    <form className="p-1 bg-red-300   md:h-full md:w-1/2 lg:w-1/3">
      <HeadingComponent text=" Book Your Travel Details" />
      <TourOptionsComponent tO={tourOptions} />
      <HeadingComponent text="For One Way Trips" />
      <TourTypeComponent tT={tourType} />
      <InputComponent
        id="pickAddress"
        placeholder="Pick Up Address"
        img={pickupImg}
      />
      <InputComponent
        id="dropAddress"
        placeholder="Drop Address"
        img={dropLocationImg}
      />
      <SelectorComponent array={vehicles} id="vehicle" />
      <InputComponent
        id="contactNumber"
        placeholder="Contact Number"
        img={phoneNumImg}
      />
      <TextAreaComponent
        id="message"
        rows="1"
        placeholder="Leave a comment..."
      />
      <ButtonComponent name="Submit" id="form-submit" />
    </form>
  );
};

export default Form;