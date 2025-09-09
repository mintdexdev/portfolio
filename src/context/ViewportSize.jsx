import { createContext, useContext, useEffect, useState } from 'react';

const ViewportSizeContext = createContext(null);

export const useViewportSize = () => useContext(ViewportSizeContext)

export const ViewportSizeProvider = ({ children }) => {

  const getViewportSize = () => {
    if (window.innerWidth < 640) return 'small';
    if (window.innerWidth < 1024) return 'medium';
    return 'large';
  }

  const [viewportSize, setViewportSize] = useState(getViewportSize())

  useEffect(() => {
    const handleResize = () => setViewportSize(getViewportSize());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  return (
    <ViewportSizeContext.Provider value={viewportSize}>
      {children}
    </ViewportSizeContext.Provider>
  )
}