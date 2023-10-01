import React, { useEffect, useState } from "react";
import Header from "./partial/Header";
import CarouselArea from "../CarouselArea";
import { API_Call } from "../API_Call";
import { API_POPULAR, API_TOP_RATED, API_UPCOMING } from "../../APIs";
import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import MovieList from "../MovieList";

function Categories() {

    const [fetchedData, setFetchedData] = useState([]);
    const { search } = useLocation();

    useEffect(() => {
        async function fetchData(API) {
            const response = await API_Call(API);
            setFetchedData(response);
        }

        let API = "";

        if (search.includes("popular")) {
            API = API_POPULAR;
        }
        else if (search.includes("top-rated")) {
            API = API_TOP_RATED;
        }
        else if (search.includes("upcoming")) {
            API = API_UPCOMING;
        }

        fetchData(API);
    }, [search]);
    return (
        <>
            <Header />
            <Box sx={{width:'80%', margin:'0px auto'}}>
                <CarouselArea movies={fetchedData} number={1} from='Category' />
                <MovieList movies={fetchedData} />
            </Box>
        </>
    );
}

export default Categories;