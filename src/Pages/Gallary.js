  import React, { useEffect, useState } from "react";
  import "../CSS/Gallary.css";
  import Lightbox from "yet-another-react-lightbox";
  import Zoom from "yet-another-react-lightbox/plugins/zoom";
  import "yet-another-react-lightbox/styles.css";
  import { getImages, deleteImage } from "../api";
  import { MdDeleteOutline } from "react-icons/md";

  const Gallary = () => {
    const [imageList, setImageList] = useState([]);
    const [index, setIndex] = useState(-1);

    const isAuthenticated = sessionStorage.getItem("isAuthorized") === "true";

    useEffect(() => {
      const fetchData = async () => {
        const responseJSON = await getImages();
        setImageList(responseJSON.resources || []);
      };
      fetchData();
    }, []);

    const handleDelete = async (public_id) => {
      const confirmDelete = window.confirm(
        "Are you sure you want to delete this image?"
      );
      if (!confirmDelete) return;

      try {
        await deleteImage(public_id);
        setImageList(imageList.filter((img) => img.public_id !== public_id));
        alert("Image deleted successfully!");
      } catch (error) {
        console.error("Delete failed", error);
        alert("Failed to delete image");
      }
    };

    return (
      <div className="gallery-container">
        <div className="gallery">
          {imageList.map((image, i) => (
            <div className="gallery-item" key={image.asset_id || i}>
              <img
                src={image.secure_url}
                alt={image.public_id}
                onClick={() => setIndex(i)}
              />

              {isAuthenticated && (
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(image.public_id)}
                >
                  <MdDeleteOutline />
                </button>
              )}
            </div>
          ))}
        </div>

        <Lightbox
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          slides={imageList.map((img) => ({
            src: img.secure_url,
            width: img.width,
            height: img.height,
          }))}
          plugins={[Zoom]}
          zoom={{
            maxZoomPixelRatio: 3,
            zoomInMultiplier: 1.5,
            doubleTapDelay: 300,
            doubleClickZoom: 2,
            keyboardMoveDistance: 50,
            wheelZoomDistanceFactor: 100,
          }}
        />
      </div>
    );
  };

  export default Gallary;
