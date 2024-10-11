import React from "react";
import { Tabs, Tab } from "react-tabs-scrollable";
import "react-tabs-scrollable/dist/rts.css";

export default function TabsComponent({ activeTab, onTabClick, formStructure }) {
  return (
    <Tabs
      activeTab={activeTab}
      onTabClick={onTabClick}
      hideNavBtnsOnMobile={false}
    >
      {/* Mapping through formStructure to create tabs with subheading names */}
      {formStructure.map((section, index) => (
        <Tab key={index}>{section.subheading}</Tab>
      ))}
    </Tabs>
  );
}
