import { ReactComponent as ToTheTopIcon } from 'Asset/to-the-top.svg';
import { useEffect, useState } from 'react';
import styles from './TopButton.module.scss';

function TopButton() {
  // const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };

  // useEffect(() => {
  //   const showButtonClick = () => {
  //     if (window.screenY > 0) {
  //       setShowButton(true);
  //     } else {
  //       setShowButton(false);
  //     }
  //   };
  //   window.addEventListener('scroll', showButtonClick);
  //   return () => {
  //     window.removeEventListener('scroll', showButtonClick);
  //   };
  // }, []);

  return (
    <>
      {/* {showButton && ( */}

      <button
        onClick={scrollToTop}
        className={styles['scroll-to-top']}
        type="button"
      >
        <ToTheTopIcon />
      </button>

      {/* )} */}
    </>
  );
}

export default TopButton;
