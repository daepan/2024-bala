import DetailTabs from 'components/Form/DetailTabs';
import styles from './project.module.scss';
import AllSection from './components/AllSection';
import TopButton from 'components/TopButton';
import useMediaQuery from 'utils/hooks/useMediaQuery';

const TAB_LIST = ['All', 'Mobility', 'Care', 'Living'];

function Project() {
  //전체 project
  const { tabs, currentTab } = DetailTabs.useTabs(TAB_LIST);
  const isMobile = useMediaQuery();

  return (
    <>
      <DetailTabs tabs={tabs} selected={currentTab} projectType={true} />
      {currentTab === TAB_LIST[0] && <AllSection />}
      {currentTab === TAB_LIST[1] && <>Mobility</>}
      {currentTab === TAB_LIST[2] && <>Care</>}
      {currentTab === TAB_LIST[3] && <>Living</>}
      {!isMobile && (
        <div className={styles['top-button']}>
          <TopButton />
        </div>
      )}
    </>
  );
}

export default Project;
