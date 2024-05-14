import DetailTabs from 'components/Form/DetailTabs';
import MajorIntroduce from './components/MajorIntroduce';
import ExhibitIntroduce from './components/ExhibitIntroduce';

const TAB_LIST = ['전시 소개', '학과 소개'];

export default function About() {
  const { tabs, currentTab } = DetailTabs.useTabs(TAB_LIST);

  return (
    <div>
      <DetailTabs tabs={tabs} selected={currentTab} />
      {currentTab === TAB_LIST[0] && <ExhibitIntroduce />}
      {currentTab === TAB_LIST[1] && <MajorIntroduce />}
    </div>
  );
}
