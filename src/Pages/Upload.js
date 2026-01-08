import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UploadToCloud } from "../utils/UploadToCloud";
import "../CSS/upload.css";

const Upload = ({ onUpload }) => {
  const [file, setFile] = useState(null);
  const [uploadedUrl, setUploadedUrl] = useState("");
  const navigate = useNavigate();

  const handleFileChange = (e) => { 
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file first!");
      return;
    }

    const fileType = file.type.startsWith("image") ? "image" : "video";
    const url = await UploadToCloud(file, fileType);

    if (url) {
      setUploadedUrl(url);

      if (onUpload) {
        onUpload(url);
      }
    }

    setTimeout(() => {
      navigate("/gallery");
    }, 10000);
  };

  return (
    <div className="uplddiv">
      <div className="maindiv">
        <h2>Upload the Photograph</h2>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload</button>

        {uploadedUrl && (
          <div>
            <p id="uplds">Uploaded Successfully....!</p>
            <img src={uploadedUrl} alt="Uploaded" width="200" />
          </div>
        )}
      </div>

    </div>
  );
};

export default Upload;
