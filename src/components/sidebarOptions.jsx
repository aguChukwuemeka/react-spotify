import React from "react";

export default function SidebarOptions({ title, Icon }) {
  return (
    <div className="sidebar__options">
      {Icon && <Icon className="sidebar__option__icon" />}
      {Icon ? <h6>{title}</h6> : <p>{title}</p>}
    </div>
  );
}
