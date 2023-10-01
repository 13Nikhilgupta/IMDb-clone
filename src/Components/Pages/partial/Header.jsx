import React, { useState } from 'react';
import { Toolbar, AppBar, Box, Typography, InputBase } from "@mui/material";
import { BookmarkAdd, ExpandMore, Menu } from "@mui/icons-material";

import MenuOption from './MenuOption';
import { Link } from 'react-router-dom';
import { RoutePaths } from '../../../Routes';

function Header() {

    const ToolbarStyle = {
        backgroundColor: "#181818",
        minHeight: "56px !important",
        padding: "0px 50px !important",
        justifyContent: "space-between",
        '& div': {
            display: "flex",
            cursor: "pointer",
            '&  p': {
                fontSize: "14px",
                fontWeight: "600"
            }
        },
        '&  p': {
            fontSize: "14px",
            fontWeight: "600"
        }
    }
    const logoUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/575px-IMDB_Logo_2016.svg.png"

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <AppBar position='static'>
                <Toolbar sx={ToolbarStyle}>
                    <Link to={RoutePaths.home}>
                        <img width='64px' src={logoUrl} alt="img" />
                    </Link>
                    <Box onClick={handleClick}>
                        <Menu />
                        <Typography>Menu</Typography>
                    </Box>
                    <MenuOption
                        anchorEl={anchorEl}
                        open={open}
                        handleClose={handleClose}
                    />
                    <InputBase sx={{ background: 'white', width: '55% !important', borderRadius: '4px', height: '30px' }} />
                    <Box >
                        <Typography sx={{ fontWeight: '900 !important' }}>IMDb</Typography><span style={{ fontWeight: '900', color: 'cyan' }}>Pro</span>
                    </Box>
                    <Box>
                        <BookmarkAdd />
                        <Typography>Watchlist</Typography>
                    </Box>
                    <Typography>SignIn</Typography>
                    <Box>
                        <Typography>En</Typography>
                        <ExpandMore />
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;
