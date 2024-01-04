import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((navItem) => {
        return (
          <li key={navItem}>
            <NavLink href={navItem.href} title={navItem.title} />
          </li>
        );
      })}
    </ul>
  );
};

export default MenuOverlay;
