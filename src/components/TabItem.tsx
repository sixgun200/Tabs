import React from 'react';
import { Tab } from '../App'

interface TabProps {
    tab: Tab;
    onTabClick: () => any;
}

const TabItem: React.FC<TabProps> = (props) => {
    return <button className={props.tab.isSelected ? "selectedTab" : ""} onClick={props.onTabClick}>{props.tab.tabLabel}</button>

}

export default TabItem;
