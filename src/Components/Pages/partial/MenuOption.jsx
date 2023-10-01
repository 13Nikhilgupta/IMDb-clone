import { Menu, MenuItem } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { RoutePaths } from "../../../Routes";

function MenuOption(props) {
    return (
        <Menu
            id="basic-menu"
            anchorEl={props.anchorEl}
            open={props.open}
            onClose={props.handleClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
        >
            <Link to={RoutePaths.category+"?category=popular"} style={{textDecoration:'none', color:'inherit'}}>
                <MenuItem onClick={props.handleClose}>POPULAR</MenuItem>
            </Link>
            <Link to={RoutePaths.category+"?category=top-rated"} style={{textDecoration:'none', color:'inherit'}}>
                <MenuItem onClick={props.handleClose}>TOP-RATED</MenuItem>
            </Link>
            <Link to={RoutePaths.category+"?category=upcoming"} style={{textDecoration:'none', color:'inherit'}}>
                <MenuItem onClick={props.handleClose}>UPCOMING</MenuItem>
            </Link>
        </Menu>
    );
}

export default MenuOption;