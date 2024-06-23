import { useEffect, useState } from 'react';

function useScrollNav() {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setShowNav(false);
      }
      else if(currentScrollY === 0){
        setShowNav(true); // 최상단일 때는 nav바를 항상 보여줌
      } else {
        setShowNav(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return showNav;
}

export default useScrollNav;
