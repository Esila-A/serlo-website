import MobileNavigation from "./mobileNavigation";
import ComputerNavigation from "./computerNavigation";

const Header = () => {
  return (
    <header className="header">
      <p>LOGO</p>
      <MobileNavigation />
      <ComputerNavigation />
    </header>
  );
};

export default Header;
