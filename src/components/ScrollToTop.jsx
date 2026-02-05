import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // Scroll to top on route change if no hash
        if (!hash) {
            window.scrollTo(0, 0);
        }
        // If hash exists, try to scroll to element with retries
        else {
            let retries = 0;
            const maxRetries = 10;

            const attemptScroll = () => {
                const id = hash.replace('#', '');
                const element = document.getElementById(id);

                if (element) {
                    // Found element! Scroll to it.
                    // Using setTimeout(0) to ensure we are in the next tick after find
                    setTimeout(() => {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 0);
                } else if (retries < maxRetries) {
                    // Element not found, retry in 100ms
                    retries++;
                    setTimeout(attemptScroll, 100);
                }
            };

            // Start attempting to scroll
            attemptScroll();
        }
    }, [pathname, hash]);

    return null;
};

export default ScrollToTop;
