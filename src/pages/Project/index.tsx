import DetailTabs from 'components/Form/DetailTabs';
import styles from './project.module.scss';
import AllSection from './components/AllSection';
import TopButton from 'components/TopButton';
import useMediaQuery from 'utils/hooks/useMediaQuery';
import MobilitySection from './components/MobilitySection';
import CareSection from './components/CareSection';
import LivingSection from './components/LivingSection';

const TAB_LIST = ['All', 'Mobility', 'Care', 'Living'];

function Project() {
  //전체 project
  const { tabs, currentTab } = DetailTabs.useTabs(TAB_LIST);
  const isMobile = useMediaQuery();

  return (
    <>
      <DetailTabs tabs={tabs} selected={currentTab} projectType={true} />
      {currentTab === TAB_LIST[0] && <AllSection />}
      {currentTab === TAB_LIST[1] && <MobilitySection/>}
      {currentTab === TAB_LIST[2] && <CareSection/>}
      {currentTab === TAB_LIST[3] && <LivingSection/>}
      {!isMobile && (
        <div className={styles['top-button']}>
          <TopButton />
        </div>
      )}
    </>
  );
}

export default Project;
