import React, { useEffect, useState, useCallback, useMemo } from "react";
import Head from "next/head";
import Carousel, { Modal, ModalGateway } from "react-images";
import Gallery from "react-photo-gallery";
import styles from "styles/Gallery.module.css";
import { getAllGalleryImages } from "../utils/contentful";
import { memo } from "react";
const ReactImagesGallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [photos, setPhotos] = useState([]);

  // Fetch images from Contentful
  useEffect(() => {
    const fetchImages = async () => {
      const contentfulImages = await getAllGalleryImages();
      const images = contentfulImages.map((image) => ({
        src: image.src,
        width: image.width,
        height: image.height,
      }));
      setPhotos(images);
    };

    fetchImages();
  }, []);

  const memoizedPhotos = useMemo(() => photos, [photos]);
  // Open lightbox with the clicked image
  const openLightbox = useCallback((event, { index }) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  // Close lightbox
  const closeLightbox = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <>
      <Head>
        <title>Gallery | GFG SRMIST</title>
      </Head>
      <h1 className="section-title">Gallery</h1>

      {/* Lightbox / Image Viewer */}
      <ModalGateway>
        {isViewerOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel currentIndex={currentImage} views={memoizedPhotos} />
          </Modal>
        ) : null}
      </ModalGateway>

      {/* Masonry Main Body */}
      <div className={styles.container}>
        {photos.length > 0 ? (
          <Gallery
            photos={memoizedPhotos}
            onClick={openLightbox}
            margin={10}
            direction={"column"}
          />
        ) : (
          <p>Loading images...</p> // Placeholder while images are being fetched
        )}
      </div>
    </>
  );
};

export default memo(ReactImagesGallery);
