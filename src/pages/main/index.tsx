import useMoveScroll from 'utils/hooks/useMoveToScroll';
import MainSection from 'components/Section/Main';
import LocationSection from 'components/Section/Location';
import styles from './main.module.scss';

export default function Main() {
  const { scrollTo, onMoveToElement } = useMoveScroll();
  return (
    <div className={styles.template}>
      <MainSection onMoveScroll={() => onMoveToElement()} />
      <div ref={scrollTo} />
      <LocationSection />
    </div>
  )
}