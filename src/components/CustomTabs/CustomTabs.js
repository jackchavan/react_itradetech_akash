import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const CustomTabs = ({ tabsData }) => {
  return (
    <Tabs>
      <TabList>
        {tabsData.map((tab, index) => (
          <Tab key={index}>{tab.title}</Tab>
        ))}
      </TabList>

      {tabsData.map((tab, index) => (
        <TabPanel key={index}>
          <h2>{tab.content}</h2>
        </TabPanel>
      ))}
    </Tabs>
  );
};

export default CustomTabs;
