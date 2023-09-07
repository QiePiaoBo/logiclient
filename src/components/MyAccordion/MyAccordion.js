import React,{useContext} from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import GlobalContext from "../../resources/GlobalContext";


function MyAccordion(props) {
  const { items } = props;
  const { userId } = useContext(GlobalContext);
  const disabledKeys = items.filter(item => item.lockFlag !== 0 && item.userId !== userId).map(item => item.id + "");
  return (
    <Accordion 
      isCompact 
      disabledKeys={disabledKeys}
      selectionMode="single" 
      variant="splitted"
      motionProps={{
        variants: {
          enter: {
            y: 0,
            opacity: 1,
            height: "auto",
            transition: {
              height: {
                type: "spring",
                stiffness: 500,
                damping: 30,
                duration: 1,
              },
              opacity: {
                easings: "ease",
                duration: 1,
              },
            },
          },
          exit: {
            y: -10,
            opacity: 0,
            height: 0,
            transition: {
              height: {
                easings: "ease",
                duration: 0.25,
              },
              opacity: {
                easings: "ease",
                duration: 0.3,
              },
            },
          },
        },
      }}
      >
      {items.map(item => (
        <AccordionItem
          key={item.id}
          aria-label={item.title}
          subtitle={item.userName}
          title={item.title}
        >
          <div style={{ whiteSpace: 'pre-wrap' }}>{item.content}</div>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default MyAccordion;