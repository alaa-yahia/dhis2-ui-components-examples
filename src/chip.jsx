import { useState } from "react";
import { Chip, ChipGroup } from "@dhis2-ui/chip";

function ChipComponent() {
  const [remove1, setRemove1] = useState(null);
  const [remove2, setRemove2] = useState(null);

  return (
    <div>
      <>
        <ChipGroup>
          {!remove1 && (
            <Chip
              onClick={() => console.log("aha")}
              onRemove={() => setRemove1(true)}
              component={"a"}
              href="#"
            >
              Sun
            </Chip>
          )}
          {!remove2 && (
            <Chip
              onClick={() => console.log("aha")}
              onRemove={() => setRemove2(true)}
              component={"button"}
            >
              Shine
            </Chip>
          )}
        </ChipGroup>
      </>
    </div>
  );
}

export default ChipComponent;
