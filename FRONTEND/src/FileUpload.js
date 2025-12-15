import React, { useState, useRef } from "react";
import { uploadDocuments } from "./api";
import { FaCloudUploadAlt } from "react-icons/fa";
import "./FileUpload.css";

const FileUpload = ({ setVectorReady }) => {
  const [files, setFiles] = useState([]);
  const fileInputRef = useRef(null);

  const handleUpload = async () => {
    if (files.length === 0) {
      alert("Please upload at least one file!");
      return;
    }

    const formData = new FormData();
    files.forEach((file) => formData.append("files", file));

    try {
      const res = await uploadDocuments(formData);
      if (res.status === "success") {
        const popup = document.createElement("div");
        popup.className = "popup-message success";
        popup.innerText = "📄 Documents processed successfully!";
        document.body.appendChild(popup);

        setTimeout(() => {
          document.body.removeChild(popup);
          setVectorReady(true);
        }, 2000);
      }
    } catch {
      alert("Upload failed!");
    }
  };

  return (
    <div className="upload-container">
      <div className="upload-card">

        {/* Clickable upload box */}
        <div
          className="upload-dropzone"
          onClick={() => fileInputRef.current.click()}
        >
          <FaCloudUploadAlt className="upload-icon" />
          <p>Click to select documents</p>
          <span>PDF, DOCX, TXT</span>
        </div>

        {/* Hidden input */}
        <input
          type="file"
          multiple
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={(e) => setFiles([...e.target.files])}
        />

        {files.length > 0 && (
          <p className="file-count">
            {files.length} file(s) selected
          </p>
        )}

        <button onClick={handleUpload}>Process Documents</button>
      </div>
    </div>
  );
};

export default FileUpload;
