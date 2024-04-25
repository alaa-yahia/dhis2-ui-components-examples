import { useState } from "react";
import { SelectorBar, SelectorBarItem } from "@dhis2-ui/selector-bar";

function SelectionBarComponent() {
  const [workflow, setWorkflow] = useState([
    {
      value: "value1",
      label: "Label1",
    },
    {
      value: "value2",
      label: "Label2",
    },
  ]);

  const [workflowOpen1, setWorkflowOpen1] = useState(false);
  const [workflowOpen2, setWorkflowOpen2] = useState(false);

  return (
    <SelectorBar
      ariaLabel="power"
      onClearSelectionClick={() => console.log("clear button clicked")}
    >
      <SelectorBarItem
        disabled={false}
        label={workflow[0]?.label}
        value={workflow[0]?.value}
        noValueMessage="Choose a workflow"
        open={workflowOpen1}
        setOpen={setWorkflowOpen1}
      >
        <div>opened</div>
      </SelectorBarItem>
      <SelectorBarItem
        disabled={false}
        label={workflow[1]?.label}
        value={workflow[1]?.value}
        noValueMessage="Choose a workflow"
        open={workflowOpen2}
        setOpen={setWorkflowOpen2}
      >
        <div>opened</div>
      </SelectorBarItem>
    </SelectorBar>
  );
}

export default SelectionBarComponent;
