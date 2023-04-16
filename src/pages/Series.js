import React from 'react';
import BoxMovies from '../components/BoxMovies';
import Footer from '../components/Footer';
import Slider from '../components/Slider';

export default function Series(){
    return(
        <>
        <Slider />
        <BoxMovies titleBox={"All Series"} url={"http://localhost:5000/series"} />
        <Footer />
        </>
    );
}