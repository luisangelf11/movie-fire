import React from 'react';
import useDataUser from '../hooks/useDataUser';
import user from "../assets/user.png";
import { NavLink, Link } from 'react-router-dom';
import './Menu.css';
import logotype from '../assets/logo.png';

export default function Menu(){
    const {data} = useDataUser();
    return(
        <header>
            <nav>
                <img className='logotype' src={logotype} alt='Logotype' />
                <ul className='menu'>
                    <li><NavLink className='link' style={({ isActive }) => ({color: isActive ? '#c23616' : '#fff'})}to='/'>Home</NavLink></li>
                    <li><NavLink className='link' style={({ isActive }) => ({color: isActive ? '#c23616' : '#fff'})} to='/movies'>Movies</NavLink></li>
                    <li><NavLink className='link' style={({ isActive }) => ({color: isActive ? '#c23616' : '#fff'})} to='/series'>Series</NavLink></li>
                    <li><NavLink className='link' style={({ isActive }) => ({color: isActive ? '#c23616' : '#fff'})} to='/anime'>Anime</NavLink></li>
                </ul>
                <div className='login'>
                    {data.name !== ""
                    ? 
                    <div className='userBox'>
                        <div className='textInfo'>
                            <p className='name'>{data.name} {data.lastname}</p>
                        </div>
                        <img src={user} alt='usuario'/>
                    </div> 
                    :
                    <div className='buttons-log'>
                        <button className='log'><Link className='linkButton' to='/log-in'>Log In</Link></button>
                        <button className='sign'><Link className='linkButton' to='/sign-in'>Sign In</Link></button>
                    </div>}
                </div>
            </nav>
        </header>
    );
}