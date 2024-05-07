import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

// import styled from 'styled-components';

// const Button = styled.button`
//   margin: 0px 15px 0 0px;
//   padding: 0 20px;
//   height: 58px;
//   font-style: normal;
//   font-weight: 700;
//   font-size: 18px;
//   line-height: 22px;
//   &:hover {
//     border-bottom: 3px solid #000000;
//   }
//   background-color: white;
//   border-bottom: ${({ isSelected }) =>
//     isSelected ? '3px solid #000000' : '3px transparent solid;'};
// `;

// const Container = styled.div`
//   margin: 0 16px 35px 16px;
//   border-bottom: 1px solid #d2d6db;
// `;

interface DetailTabsProps{
  tabs:any;
  selected: any;
}

function DetailTabs({ tabs, selected }:DetailTabsProps) {
  return (
    <div>
      {tabs.map((tab: { name: any; onClick: any; }) => (
        <button
          key={tab.name}
          onClick={tab.onClick}
          // isSelected={selected === tab.name}
          type="button"
        >
          {tab.name}
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
