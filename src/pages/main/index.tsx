import MainSection from 'components/Section/Main';
import LocationSection from 'components/Section/Location';
import styles from './main.module.scss';

export default function Main() {
  return (
    <div className={styles.template}>
      <MainSection />
      <LocationSection />
    </div>
  )
}