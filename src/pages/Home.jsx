import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import DigitalReadinessSection from '../components/DigitalReadinessSection';

import Benefits from '../components/Benefits';
import Curriculum from '../components/Curriculum';
import Instructors from '../components/Instructors';
import Projects from '../components/Projects';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

import TargetAudience from '../components/TargetAudience';

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />

            <DigitalReadinessSection />
            <TargetAudience />
            <Benefits />
            <Curriculum />
            <Instructors />
            <Projects />
            <FAQ />
            <Footer />
        </>
    );
};

export default Home;
