import React from 'react';
import BoxMovies from '../components/BoxMovies';
import Footer from '../components/Footer';
import Slider from '../components/Slider';

export default function Animes(){
    return(
        <>
            <Slider />
            <BoxMovies titleBox={"All Animes"} url={"http://localhost:5000/anime"}/>
            <Footer />
        </>
    );
}