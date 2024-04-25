import { Tooltip } from "@dhis2-ui/tooltip";

function TooltipComponent() {
  return (
    <div>
      <Tooltip
        content="Some tooltip content here"
        openDelay={400}
        closeDelay={400}
      >
        CONTENT
      </Tooltip>
    </div>
  );
}

export default TooltipComponent;
