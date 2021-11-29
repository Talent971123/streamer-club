import React, { useState, ComponentType } from "react";
// next
import dynamic from "next/dynamic";
// types
import {
  HeaderWrapperProps,
  AccordionPorps,
} from "types/components/CollapseBox";

// ---------------------------------------------------------------------

const Collapsible = dynamic(() => import("react-collapsible"), { ssr: false });

const useCollapse = (
  CollapseHeaderWrapper: ComponentType<HeaderWrapperProps>
) => {
  // eslint-disable-next-line react/display-name
  return ({ title, children }: AccordionPorps) => {
    const [hide, setHide] = useState(false);
    const handleOpen = () => {
      setHide(!hide);
    };
    return (
      <div>
        <CollapseHeaderWrapper
          handleOpen={handleOpen}
          hide={hide}
          title={title}
        />
        <Collapsible trigger="" open={hide} transitionTime={300}>
          {children}
        </Collapsible>
      </div>
    );
  };
};

export default useCollapse;
