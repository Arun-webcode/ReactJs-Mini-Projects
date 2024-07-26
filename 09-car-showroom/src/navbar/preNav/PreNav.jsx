// import PreNavLeft from "./PreNavLeft";
// import PreNavRight from "./PreNavRight";
import { phoneImg } from "../../static/Images";
import { navImages, navItems } from "../../static/data";
import { menuImg } from "../../static/Images";
const PreNav = () => {
  return (
    <div className="bg-cyan-100 text-gray-600 font-extrabold flex justify-between  bg-gray-200 h-12 p-2 border-b-2 border-indigo-500 fixed top-0 left-0 right-0">
      {/* <PreNavLeft /> */}
      <div className="w-1/2 md:w-1/3 flex align-baseline">
        <a href="tel:01149842991" className="flex text-orange-500 text-center">
          <img src={phoneImg} alt="" className="h-7" />
          011 49842991
        </a>
      </div>

      {/* <PreNavRight /> */}
      <div className="md:flex md:justify-between md:w-2/3 text-center ">
        {/* MENU BAR FOR SMALL SCREEN */}
        <a href="#" className="md:hidden">
          <img src={menuImg} alt="" className="h-7" />
        </a>

        {/* NAVIGATION PAGES */}
        <div className="hidden md:block md:w-2/3 md:flex md:justify-between">
          {navItems.map(({ id, name }) => (
            <a href="#" className="pt-1 pb-1 hover:text-orange-500" key={id}>
              {name}
            </a>
          ))}
        </div>

        {/* NAVIGATIONS LINKS */}
        <div className="hidden md:block md:w-1/3 md:flex md:justify-evenly ml-2 pt-2 pb-2">
          {navImages.map(({ id, href, img }) => (
            <a href={href} className="w-5 h-3" target="_blank" key={id}>
              <img
                src={img}
                alt=""
                className="  h-4 text-center hover:h-5 w-4 hover:w-5"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
export default PreNav;
