import React from 'react';
import BoxMovies from '../components/BoxMovies';
import Footer from '../components/Footer';
import Slider from '../components/Slider';

export default function Movies(){
    return(
        <>
            <Slider />
            <BoxMovies titleBox={"All Movies"} url={"http://localhost:5000/movies"}/>
            <Footer />
        </>
    );
}