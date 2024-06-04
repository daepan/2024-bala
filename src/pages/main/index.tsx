import useMoveScroll from 'utils/hooks/useMoveToScroll';
import useMediaQuery from 'utils/hooks/useMediaQuery';
import MainSection from 'components/Section/Main';
import MainMobileSection from 'components/Section/MainMobileSection';
import LocationSection from 'components/Section/Location';
import styles from './main.module.scss';
import TopButton from 'components/TopButton';

export default function Main() {
  const { scrollTo, onMoveToElement } = useMoveScroll();
  const isMobile = useMediaQuery();
  return (
    <div className={styles.template}>
      {isMobile ? (
        <MainMobileSection onMoveScroll={() => onMoveToElement()} />
      ) : (
        <MainSection onMoveScroll={() => onMoveToElement()} />
      )}
      <div ref={scrollTo} />
      <LocationSection />
      {!isMobile && (
        <div className={styles['top-button']}>
          <TopButton />
        </div>
      )}
    </div>
  );
}
