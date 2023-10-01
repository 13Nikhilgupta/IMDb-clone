import { Box, Typography } from "@mui/material";
import React from "react";

function UpNext({ movies }) {
    return (<Box sx={{ width: '35%', paddingLeft:'25px'}}>
        <Typography sx={{ color: '#f5c518', fontWeight:'750', fontSize:'18', marginBottom:'20px'}}>Up Next !</Typography>
        {movies.splice(0, 3).map(movie => (
            <Box sx={{display:'flex', color: 'grey', marginBottom:'12px'}}>
                <img width="85px" src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt="poster" />
                <Box sx={{padding:'20px'}}>
                    <Typography sx={{color:'white'}}>{movie.title}</Typography>
                    <Typography>Rating: {movie.vote_average}</Typography>
                    <Typography>{movie.overview.slice(0,70)+" ..."}</Typography>
                </Box>
            </Box>))}
    </Box>);
}

export default UpNext;