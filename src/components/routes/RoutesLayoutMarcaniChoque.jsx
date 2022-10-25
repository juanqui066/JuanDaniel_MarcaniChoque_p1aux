import React, { useState } from 'react'
import { Box, Grid } from '@material-ui/core';
import { NavbarMarcaniChoque } from './NavbarMarcaniChoque';
import { Routes, Route } from 'react-router-dom';
import { HomeMarcaniChoque } from '../components/home/HomeMarcaniChoque';
import { AboutMarcaniChoque } from '../components/about/AboutMarcaniChoque';
import './routesLayoutMarcaniChoque.css';
export const routesLayoutMarcaniChoque = () => {
    const [darkMode, setDarkMode] = useState(true);
    function handleClick() {
        setDarkMode(!darkMode);
    }
    return (
        <Grid container spacing={1} className={`content ${darkMode? 'dark':  'light' }`}>
         <Grid item xs={11} components={'header'} className={`${darkMode? 'dark':  'light'}`}
            <NavbarMarcaniChoque darkMode={darkMode} handleClick={handleClick} />
        </Grid>
        <Grid item xs={11} className={`container-content ${darkMode? 'dark':  'light'}`}>
            <Routes>
            <Route exact path={'/'} element={<HomeMarcaniChoque />}/>
            <Route exact path={'/about'} element={<AboutMarcaniChoque />}/>
            </Routes>
        </Grid>
        <Grid item xs={11} componets={'footer'}>
            <Box className={`${darkMode? 'dark':  'light'} text-footer`}
            >
                <p> templated create whith &hearts; by <a target={'https://es.reactjs.org/'}>react js</a></p>
                <p>&copy; 2022</p>
            </Box>
        </Grid>
        </Grid>

    )
}