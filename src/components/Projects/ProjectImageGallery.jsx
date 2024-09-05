import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const ProjectImageGallery = ({ images }) => {
  const galleryImages = images.map((image) => ({
    original: image,
    thumbnail: image,
  }));

  return (
    <div className="scrollbar relative h-64 w-full md:h-80 lg:h-96">
      <ImageGallery
        items={galleryImages}
        showThumbnails={true}
        showFullscreenButton={true}
        showPlayButton={false}
        autoPlay={true}
        slideInterval={3000}
      />
    </div>
  );
};

export default ProjectImageGallery;
