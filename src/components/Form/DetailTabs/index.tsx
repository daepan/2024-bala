import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './DetailTabs.module.scss';
import { cn } from '@bcsdlab/utils';

interface DetailTabsProps {
  tabs: any;
  selected: any;
  projectType?: boolean;
}

function DetailTabs({ tabs, selected, projectType }: DetailTabsProps) {
  return (
    <div
      className={cn({
        [styles['project-tab-button-section']]: projectType === true,
        [styles['tab-button-section']]: projectType === undefined,
      })}
    >
      {tabs.map((tab: { name: any; onClick: any }) => (
        <button
          className={cn({
            [styles['project-tab-button']]:
              selected === tab.name && projectType === true,
            [styles['project-tab-button--unchecked']]:
              selected !== tab.name && projectType === true,
            [styles['tab-button']]: selected === tab.name,
            [styles['tab-button--unchecked']]: selected !== tab.name,
          })}
          key={tab.name}
          onClick={tab.onClick}
          type="button"
        >
          <span>{tab.name}</span>
        </button>
      ))}
    </div>
  );
}

function useTabs(tabList: string[]) {
  const [currentTab, setCurrentTab] = useState(tabList[0]);
  const [searchParams, setSearchParams] = useSearchParams();
  const previousTab = searchParams.get('tab');

  const tabs = tabList.map((tab) => ({
    name: tab,
    onClick: () => {
      setCurrentTab(tab);
      setSearchParams({ tab: `${tab}` });
    }, //클릭된 탭의 이름을 currentTab에 저장
  }));

  useEffect(() => {
    if (previousTab !== null) {
      setCurrentTab(previousTab);
    } else setCurrentTab(tabList[0]);
  }, [searchParams]);

  return { tabs, currentTab };
}

export default Object.assign(DetailTabs, { useTabs });
