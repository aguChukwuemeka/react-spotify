import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { useStateValue } from "../contextApi/StateProvider";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

export default function Header() {
  const [{ user }] = useStateValue();

  function truncate(str, num) {
    return str?.length > num ? str.substring(0, num - 1) + "..." : str;
  }

  return (
    <div className={'header'}>
      <div className="header__left">
        <SearchIcon />
        <input
          type="text"
          className=""
          placeholder="Search for Artist, Songs and Album"
        />
      </div>
      <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h6>{truncate(user?.display_name, 13)}</h6>
        <ArrowDropDownIcon className="header__right__icon" />
      </div>
    </div>
  );
}
