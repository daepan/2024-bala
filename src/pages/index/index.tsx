import useMediaQuery from 'utils/hooks/useMediaQuery';
import Header from 'components/Header';
import MobileHeader from 'components/MobileHeader';
import Footer from 'components/Footer';
import { Outlet } from 'react-router-dom';
import styles from './index.module.scss';

export default function IndexPage() {
  const isMobile = useMediaQuery();
  return (
    <>
      {
        isMobile ? <MobileHeader /> : <Header />
      }
        <div className={styles.content}>
          <Outlet />
        </div>
      <Footer />
    </>
  )
}