import { NavLink, Outlet } from "react-router-dom";
import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <>
      <ul className={classes.navLayout}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Products
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default Navigation;
