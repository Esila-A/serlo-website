import { NavLink } from "react-router-dom";

const Navigation = (props) => {
  return (
    <nav className="navigation">
      <NavLink
        to="/landing"
        className="navigation__link"
        onClick={() => props.isMobilePhone && props.closeMenu()}
      >
        Główna
      </NavLink>
      <NavLink
        to="/services"
        className="navigation__link"
        onClick={() => props.isMobilePhone && props.closeMenu()}
      >
        Usługi
      </NavLink>
      <NavLink
        to="/gallery"
        className="navigation__link"
        onClick={() => props.isMobilePhone && props.closeMenu()}
      >
        Realizacje
      </NavLink>
      <NavLink
        to="/contact"
        className="navigation__link"
        onClick={() => props.isMobilePhone && props.closeMenu()}
      >
        Kontakt
      </NavLink>
    </nav>
  );
};

export default Navigation;
