import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-deep-black/80 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <div className="text-2xl font-bold tracking-tighter">
                    <span className="text-intel-blue">INTEL</span>
                    <span className="text-white ml-2">AI CREATOR</span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {/* Badge */}
                    <div className="hidden lg:inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-intel-green/30 bg-intel-green/10 text-intel-green backdrop-blur-sm cursor-default">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-intel-green opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-intel-green"></span>
                        </span>
                        <span className="text-xs font-semibold tracking-wide">3월 30일 개강</span>
                    </div>
                    <a href="#curriculum" className="text-gray-300 hover:text-neon-cyan transition-colors">Curriculum</a>
                    <a href="#projects" className="text-gray-300 hover:text-neon-cyan transition-colors">Projects</a>
                    <a href="#benefits" className="text-gray-300 hover:text-neon-cyan transition-colors">Benefits</a>
                    <a href="#faq" className="text-gray-300 hover:text-neon-cyan transition-colors">FAQ</a>
                    <button
                        onClick={() => window.open('https://forms.gle/SWK34KxYgNRNz9KJ9', '_blank')}
                        className="bg-neon-cyan text-black px-6 py-2 rounded-full font-bold hover:shadow-[0_0_20px_rgba(0,240,255,0.5)] transition-all transform hover:scale-105"
                    >
                        Apply Now
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-deep-black/95 border-b border-white/10 p-6 flex flex-col space-y-4">
                    <a href="#curriculum" className="text-white text-lg">Curriculum</a>
                    <a href="#projects" className="text-white text-lg">Projects</a>
                    <a href="#benefits" className="text-white text-lg">Benefits</a>
                    <button
                        onClick={() => window.open('https://forms.gle/SWK34KxYgNRNz9KJ9', '_blank')}
                        className="w-full bg-neon-cyan text-black py-3 rounded-xl font-bold"
                    >
                        Apply Now
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
