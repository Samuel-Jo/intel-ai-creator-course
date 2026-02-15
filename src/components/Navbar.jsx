import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Add useLocation hook if you want to handle navigation from other pages (optional but recommended)
    // import { useLocation, useNavigate } from 'react-router-dom';
    // const location = useLocation();
    // const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        setIsMobileMenuOpen(false); // Close mobile menu if open
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        } else {
            // If element not found (e.g. on another page), navigate to home first
            window.location.href = `/#/?section=${id}`;
            // Note: A more robust solution would be using useNavigate and a useEffect in Home to check query params
        }
    };

    const NavLink = ({ to, children }) => (
        <button
            onClick={() => scrollToSection(to)}
            className="text-gray-300 hover:text-neon-cyan transition-colors font-medium bg-transparent border-none cursor-pointer"
        >
            {children}
        </button>
    );

    const MobileNavLink = ({ to, children }) => (
        <button
            onClick={() => scrollToSection(to)}
            className="text-white text-lg font-medium text-left bg-transparent border-none cursor-pointer hover:text-neon-cyan transition-colors"
        >
            {children}
        </button>
    );

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-deep-black/80 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <div
                    className="text-2xl font-bold tracking-tighter cursor-pointer"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
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
                    <NavLink to="curriculum">Curriculum</NavLink>
                    <NavLink to="projects">Projects</NavLink>
                    <NavLink to="benefits">Benefits</NavLink>
                    <NavLink to="faq">FAQ</NavLink>
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
                <div className="md:hidden absolute top-20 left-0 w-full bg-deep-black/95 border-b border-white/10 p-6 flex flex-col space-y-4 shadow-2xl">
                    <MobileNavLink to="curriculum">Curriculum</MobileNavLink>
                    <MobileNavLink to="projects">Projects</MobileNavLink>
                    <MobileNavLink to="benefits">Benefits</MobileNavLink>
                    <button
                        onClick={() => window.open('https://forms.gle/SWK34KxYgNRNz9KJ9', '_blank')}
                        className="w-full bg-neon-cyan text-black py-3 rounded-xl font-bold hover:bg-neon-cyan/90 transition-colors"
                    >
                        Apply Now
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
