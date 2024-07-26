import { navImages, navItems } from "../../static/data";
import { menuImg } from "../../static/Images";
const PreNavRight = () => {
  return (
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
  );
};

export default PreNavRight;
