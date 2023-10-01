import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

function MovieList({ movies }) {

    const moviesType = {
        'popular': 'Popular',
        'top-rated': 'Top-Rated',
        'upcoming': 'Upcoming'
    };

    const { search } = useLocation();

    return (
        <Box sx={{ background: '#f5f5f5'}}>
            <Box sx={{padding:'50px 10px'}}>
                <Typography sx={{ fontWeight: '600', fontSize: '22px' }}>IMDb Charts</Typography>
                <Typography variant="h4">| IMDb {moviesType[search.split('=')[1]]} Movies</Typography>
                <Typography sx={{ margin: '5px 0', color: 'grey' }}>IMDb Top {movies.length} as rated by regular IMDb voters</Typography>
            </Box>
            <Divider />
            {movies.map((movie, index) => (
                <Box sx={{ display: 'flex', margin: '15px', color:'grey'}}>
                    <img width="125x" src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt="poster" />
                    <Box sx={{ padding: '20px', '& p':{paddingTop:'5px'}}}>
                        <Typography sx={{fontWeight:'600', color:'black'}}>{index + 1}. {movie.title}</Typography>
                        <Box sx={{ display: 'flex', '& p':{paddingRight:'10px'} }}>
                            <Typography>{movie.release_date}</Typography>
                            <Typography>{movie.original_language}</Typography>
                        </Box>
                        <Typography>⭐{movie.vote_average} ({movie.vote_count})</Typography>
                        <Typography>{movie.overview.slice(0, 200) + " ..."}</Typography>
                    </Box>
                </Box>))}
        </Box>
    );
}

export default MovieList;