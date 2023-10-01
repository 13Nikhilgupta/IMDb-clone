import { Box, Typography } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

function CarouselArea({ movies, number, from }) {


    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: number
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: number
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: number
        }
    };

    return (<Box sx={{ width: number === 1 && from ==='Home' ? '65%' : '100%', marginTop: number === 1 ? '20px' : '35px' }}>
        <Carousel
            swipeable={false}
            draggable={false}
            showDots={false}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
        >
            {movies.map(movie => (
                <Box sx={{padding:'0 3px'}}>
                    <img width="100%" height={from==='Category' && "400px"} src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} alt="playback-img" />
                    {number!==1 && <Typography sx={{color:'white'}}>{movie.title}</Typography>}
                </Box>))}
        </Carousel>
    </Box>);
}

export default CarouselArea;