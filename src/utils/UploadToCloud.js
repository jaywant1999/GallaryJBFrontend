const cloud_name = process.env.REACT_APP_CLOUD_NAME; 
const upload_preset = process.env.REACT_APP_UPLOAD_PRESET;

export const UploadToCloud = async (pics, fileType,  folder = "GalleryJB") => {
  if (pics && fileType) {
    const data = new FormData();
    data.append("file", pics);
    data.append("upload_preset", upload_preset);
    data.append("cloud_name", cloud_name);
     data.append("folder", folder);
    data.append("tags", "gallery"); 
    
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${cloud_name}/${fileType}/upload`,
      { method: "post", body: data }
    );

    const fileData = await res.json();
    console.log("Cloudinary response:", fileData.url);

    return fileData.url; 
  } else {
    console.log("error in uploading file.....");
  }
};
