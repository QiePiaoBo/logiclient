import React from "react";
import './MyComponent.css'
import {Accordion, AccordionItem} from "@nextui-org/react";

function MyComponent() {
    const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  return (
    <Accordion selectionMode="multiple">
      <AccordionItem key="1" aria-label="Day 1" title="Day 1">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="2" aria-label="Day 2" title="Day 2">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="3" aria-label="Day 3" title="Day 3">
        {defaultContent}
      </AccordionItem>
    </Accordion>
  );
}

export default MyComponent;