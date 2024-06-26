import DetailTabs from 'components/Form/DetailTabs';
import MajorIntroduce from './components/MajorIntroduce';
import ExhibitIntroduce from './components/ExhibitIntroduce';
import TopButton from 'components/TopButton';
import useMediaQuery from 'utils/hooks/useMediaQuery';
import styles from './about.module.scss';
import useScrollNav from 'utils/hooks/useScrollNav';

export const TAB_LIST = ['전시 소개', '학과 소개'];

export default function About() {
  const { tabs, currentTab } = DetailTabs.useTabs(TAB_LIST);
  const isMobile = useMediaQuery();
  const showNav = useScrollNav();

  return (
    <div>
      <DetailTabs tabs={tabs} selected={currentTab} showNav={showNav} />
      {currentTab === TAB_LIST[0] && <ExhibitIntroduce />}
      {currentTab === TAB_LIST[1] && <MajorIntroduce />}
      {!isMobile && (
        <div className={styles['top-button']}>
          <TopButton />
        </div>
      )}
    </div>
  );
}
