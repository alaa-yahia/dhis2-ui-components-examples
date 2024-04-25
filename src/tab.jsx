import { useState } from "react";
import { TabBar, Tab } from "@dhis2-ui/tab";

const para = ["Alaa", "Yahia", "Abd"];

function TabComponent() {
  const [selected, setSelected] = useState(1);

  return (
    <>
      <TabBar>
        <Tab selected={selected === 0} onClick={() => setSelected(0)}>
          AlaaAlaaAlaaAlaaAlaaAlaaAlaaAlaaAlaaAlaaAlaayyyyuiiiiiiiiu
        </Tab>
        <Tab selected={selected === 1} onClick={() => setSelected(1)}>
          Yahia
        </Tab>
        <Tab selected={selected === 2} onClick={() => setSelected(2)}>
          Abd
        </Tab>
      </TabBar>
      {selected === 0 && <p>{para[selected]}</p>}
      {selected === 1 && <p>{para[selected]}</p>}
      {selected === 2 && <p>{para[selected]}</p>}
    </>
  );
}

export default TabComponent;
