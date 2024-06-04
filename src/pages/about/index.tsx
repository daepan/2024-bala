import DetailTabs from 'components/Form/DetailTabs';
import MajorIntroduce from './components/MajorIntroduce';
import ExhibitIntroduce from './components/ExhibitIntroduce';
import TopButton from 'components/TopButton';
import useMediaQuery from 'utils/hooks/useMediaQuery';
import styles from './about.module.scss';

const TAB_LIST = ['전시 소개', '학과 소개'];

export default function About() {
  const { tabs, currentTab } = DetailTabs.useTabs(TAB_LIST);
  const isMobile = useMediaQuery();

  return (
    <div>
      <DetailTabs tabs={tabs} selected={currentTab} />
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
