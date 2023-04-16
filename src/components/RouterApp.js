import React from 'react';
import Menu from './Menu';
import { Routes, HashRouter, Route} from 'react-router-dom';
import Home from '../pages/Home';
import ErrorPage from '../pages/ErrorPage';
import Movies from '../pages/Movies';
import Series from '../pages/Series';
import Animes from '../pages/Animes';
import SignIn from '../pages/SignIn';
export default function RouterApp(){
    return(
        <HashRouter>
            <Menu />
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route exact path="/movies" element={<Movies />} />
                <Route exact path="/series" element={<Series />}/>
                <Route exact path="/anime" element={<Animes />} />
                <Route exact path="/sign-in" element={<SignIn />} />
                <Route exact path="*" element={<ErrorPage />}/>
            </Routes>
        </HashRouter>
    );
}