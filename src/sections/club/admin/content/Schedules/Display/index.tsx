import React, { useState } from "react";
//
import UpcomingSection from "./Upcoming";
import PreviousSection from "./Previous";
//  styled component
import { DisplayWrapper, TabWrapper, TabItem } from "./display.style";
import { Text } from "components/Text";

const DisplaySection: React.FC = () => {
  const [item, setItem] = useState<boolean>(true);

  return (
    <DisplayWrapper>
      <TabWrapper item={item}>
        <TabItem onClick={() => setItem(true)}>
          <Text fSize={1.25} fWeight={600} fColor={item ? "white" : "gray.300"}>
            {"Upcoming"}
          </Text>
        </TabItem>
        <TabItem onClick={() => setItem(false)}>
          <Text fSize={1.25} fWeight={600} fColor={!item ? "white" : "gray.300"}>
            {"Previous"}
          </Text>
        </TabItem>
      </TabWrapper>
      {item ? <UpcomingSection /> : <PreviousSection />}
    </DisplayWrapper>
  );
};

export default DisplaySection;
