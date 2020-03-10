import React from 'react';
import './App.css';
import TabItem from './components/TabItem';

export interface Tab {
  tabLabel: string;
  tabContent: string;
  isSelected: boolean;
}

// const TabItem: React.FC<TabItemProps> = (props[]) => {
//   const [currentTabID, setCurrentTab] = React.useState<string>("");
//   const handleClick = () => {
//     currentTabID 
//   }
// }

function App() {
  const [tabs, setTabs] = React.useState<Tab[]>([
    { tabLabel: "About", tabContent: "About Content", isSelected: false }, { tabLabel: "Contact", tabContent: "Contact Content", isSelected: false }, { tabLabel: "Location", tabContent: "Location Content", isSelected: false }
  ])
  // behavior: associate on click handler with each button where the click will trigger the color and content change
  //        keep track of which button has been clicked ==> isSelected?
  //        how do i visually indicate the tab has been selected? color How do I change the color ==> className="selectedTab"
  // handle click event
  const onClickHandler = (Index: number) => {
    // change the current array item's isSelected value to true
    // display the content of the current array item's Content
    
    
    setTabs(tabs.map((tab:Tab, i:number):Tab => {
      return {tabLabel: tab.tabLabel,
        tabContent: tab.tabContent,
        isSelected: i===Index}
    }));
  }
  // when I click on button change button color
  // display tab content

  return (
    <div className="App">
      {tabs.map((tab, i) => {
        const component = <TabItem tab={tab} key={i} onTabClick={()=>onClickHandler(i)}/>
        return component
      })}
      {/* <button className={tabs[0].isSelected ? "selectedTab" : ""} onClick={() => onClickHandler(0)}>{tabs[0].tabLabel}</button>
      <button className={tabs[1].isSelected ? "selectedTab" : ""} onClick={() => onClickHandler(1)}>{tabs[1].tabLabel}</button>
      <button className={tabs[2].isSelected ? "selectedTab" : ""} onClick={() => onClickHandler(2)}>{tabs[2].tabLabel}</button> */}
      <div className="tabContent">
        {tabs[0].isSelected && tabs[0].tabContent}
        {tabs[1].isSelected && tabs[1].tabContent}
        {tabs[2].isSelected && tabs[2].tabContent}
      </div>
    </div>
  );
}

export default App;
