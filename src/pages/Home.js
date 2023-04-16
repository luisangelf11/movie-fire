import React from 'react';
import BoxMovies from '../components/BoxMovies';
import Slider from '../components/Slider';
import Footer from '../components/Footer.js';

export default function Home(){
    return(
        <>
           <Slider />
           <BoxMovies titleBox={"Trends🔥"} url={"http://localhost:5000/top"}/>
           <Footer />
        </>
    );
}