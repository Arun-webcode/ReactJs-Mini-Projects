import PreNav from "./preNav/PreNav";
import Nav from "./nav/Nav";
const Navbar = () => {
  return (
    <nav className="relative  h-24 z-50 font-mono ">
      <PreNav />
      <Nav />
    </nav>
  );
};
export default Navbar;
