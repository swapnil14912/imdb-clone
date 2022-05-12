import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = () => {
  return (
    <div className={classes.Header}>
      <Link to="/" className={classes.Header__logo}>IMDb</Link>
      <p className={classes.Header__Menu}>
        <MenuIcon />
        Menu
      </p>
      <div className={classes.Header__search}>
        <input className={classes.Header__input} type="text" placeholder="Search IMDb" />
        <SearchIcon />
      </div>
      <p className={classes.Header__pro}>
        IMDb<span>Pro</span>
      </p>
      <p className={classes.Header__divider}>|</p>
      <p className={classes.Header__Menu}>
        <BookmarkAddIcon /> Watchlist
      </p>
      <p className={classes.Header__Menu}>Sign&nbsp;In</p>
      <p className={classes.Header__Menu}>
        EN
        <ArrowDropDownIcon />
      </p>
    </div>
  );
};

export default Header;
