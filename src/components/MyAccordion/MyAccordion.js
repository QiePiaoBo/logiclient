import React from "react";
import './MyAccordion.css'
import { Accordion, AccordionItem } from "@nextui-org/react";

function MyAccordion(props) {
  const { items } = props;
  return (
    <Accordion 
      isCompact 
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
          subtitle="Confetti"
          title={item.title}
        >
          <div style={{ whiteSpace: 'pre-wrap' }}>{item.content}</div>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default MyAccordion;