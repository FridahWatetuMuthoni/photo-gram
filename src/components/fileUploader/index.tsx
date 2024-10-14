import {
  FileUploaderRegular,
  UploadCtxProvider,
} from "@uploadcare/react-uploader";
import "@uploadcare/react-uploader/core.css";
import { FileEntry } from "../../types/index";
import { useRef } from "react";

interface IFileUploader {
  fileEntry: FileEntry;
  onChange: (fileEntry: FileEntry) => void;
}

function FileUploader({ fileEntry, onChange }: IFileUploader) {
  const uploaderRef = useRef<InstanceType<UploadCtxProvider> | null>(null);
  return (
    <div>
      {" "}
      <FileUploaderRegular
        sourceList="local, url, camera, dropbox"
        classNameUploader="uc-light"
        pubkey="1c5d7425dc6254743799"
        apiRef={uploaderRef}
      />
    </div>
  );
}

export default FileUploader;
