import React, { createContext, useState, useContext, useEffect } from 'react';

const AppContext = createContext();

export const useAppContext = () => {
    return useContext(AppContext);
}

export const AppProvider = ({ children }) => {
    const [showMenu, setShowMenu] = useState(false)
    const [showOrder, setShowOrder] = useState(false)

    function getBreakpoint() {
        const breakpoints = {
            sm: 640,
            md: 768,
            lg: 1024,
            xl: 1280
        }
    
        const width = window.innerWidth;
    
        if (width < breakpoints.sm) {
            return 'sm';
        } else if (width < breakpoints.md) {
            return 'md';
        } else if (width < breakpoints.lg) {
            return 'lg';
        } else {
            return 'xl';
        }
    }

    useEffect(() => {
        const handleResize = () => {
            const breakpoint = getBreakpoint();
            if (breakpoint !== 'sm' && breakpoint !== 'md') {
                setShowMenu(false);
                setShowOrder(false);
            }
        }
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    return (
        <AppContext.Provider value={{ showMenu, setShowMenu, showOrder, setShowOrder}}>
            {children}
        </AppContext.Provider>
    )
}