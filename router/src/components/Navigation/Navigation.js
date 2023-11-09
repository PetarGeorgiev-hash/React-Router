import { NavLink, Outlet } from "react-router-dom";
import classes from "./Navigation.module.css"

const Navigation = () => {
    return (
      <>
        <ul className={classes.navLayout}>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/products"}>Products</NavLink>
          </li>
            </ul>
         <Outlet />
      </>
    );
};

export default Navigation;
