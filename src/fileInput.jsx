import { useState } from "react";
import { FileInput, FileListItem } from "@dhis2-ui/file-input";

function FileInputComponent() {
  const [files, setFile] = useState([]);

  const handleFileChange = (event) => {
    const selectedFile = Array.from(event.files);
    setFile(selectedFile);
  };

  const handleRemove = () => console.log("removed");

  return (
    <div>
      <FileInput
        buttonLabel="Upload a file"
        name="upload"
        onChange={handleFileChange}
        tabIndex="0"
        multiple
        files={files}
      />
      {files.length > 0 &&
        files.map((file) => (
          <FileListItem
            key={file.name}
            label={file.name}
            removeText="re"
            onRemove={handleRemove}
            file={file}
          />
        ))}
    </div>
  );
}

export default FileInputComponent;
