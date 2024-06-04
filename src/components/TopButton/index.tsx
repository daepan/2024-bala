import { ReactComponent as ToTheTopIcon } from 'Asset/to-the-top.svg';
import styles from './TopButton.module.scss';

function TopButton() {
  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <button
        onClick={scrollToTop}
        className={styles['scroll-to-top']}
        type="button"
      >
        <ToTheTopIcon />
      </button>
    </>
  );
}

export default TopButton;
