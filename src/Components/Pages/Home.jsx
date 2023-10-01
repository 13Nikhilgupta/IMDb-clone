import React, { useEffect, useState } from "react";
import Header from "./partial/Header";
import { API_Call } from "../API_Call";
import { Box } from "@mui/material";
import CarouselArea from "../CarouselArea";
import UpNext from "../UpNext";
import { API_NOW_PLAYING } from "../../APIs";

function Home() {

    const [fetchedData, setFetchedData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await API_Call(API_NOW_PLAYING);
            setFetchedData(response);
        }
        fetchData();
    }, []);

    return (<>
        <Header />
        <Box sx={{padding:'0px 50px'}}>
            <Box sx={{display:'flex', padding:'12px 0px'}}>
                <CarouselArea movies={fetchedData} number={1} from='Home' />
                <UpNext movies={fetchedData}/>
            </Box>
            <CarouselArea movies={fetchedData} number={5} from='Home' />
            <CarouselArea movies={fetchedData} number={5} from='Home' />
            <CarouselArea movies={fetchedData} number={5} from='Home' />
            <CarouselArea movies={fetchedData} number={5} from='Home' />
            <CarouselArea movies={fetchedData} number={5} from='Home' />
        </Box>
    </>);
}

export default Home;