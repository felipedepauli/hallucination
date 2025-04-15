import React from "react";
import Title from "./Title";
import Text from "./Text";
import Figure from "./Figure";
import Notes from "./Notes";
import Formulas from "./Formulas";
import NestedList from "./List";

const RenderContent = ({ content }) => {
  return (
    <div>
      {content.map((item, index) => {
        switch (item.type) {
          case "Title":
            return <Title key={index} level={item.level}>{item.text}</Title>;
          case "Text":
            return <Text key={index}>{item.text}</Text>;
          case "Figure":
            return <Figure key={index} src={item.src} alt={item.alt} caption={item.caption} />;
          case "Notes":
            return <Notes key={index} type={item.noteType}>{item.text}</Notes>;
          case "Formulas":
            return <Formulas key={index} formula={item.formula} subtitle={item.subtitle} />;
            case "NestedList":
              return <NestedList key={index} items={item.items} />;
            
          default:
            return null;
        }
      })}
    </div>
  );
};

export default RenderContent;
