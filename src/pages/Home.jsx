import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import Curriculum from '../components/Curriculum';
import Projects from '../components/Projects';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Benefits />
            <Curriculum />
            <Projects />
            <FAQ />
            <Footer />
        </>
    );
};

export default Home;
