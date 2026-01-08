const API_URL = process.env.REACT_APP_API_URL || "http://localhost:1712";

export const getImages = async()=>{
    const response = await fetch(`${API_URL}/gallery`);
     if (!response.ok) {
    throw new Error("API failed");
  }
    const responseJSON = await response.json();
    return responseJSON;
}

export const deleteImage = async (public_id) => {
  const response = await fetch(`${API_URL}/gallery/${encodeURIComponent(public_id)}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to delete image");
  }

  return await response.json();
};