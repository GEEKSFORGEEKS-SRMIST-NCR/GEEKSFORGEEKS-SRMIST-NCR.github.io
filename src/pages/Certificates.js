import { certificates } from "api/CertificateAPI";
import Head from "next/head";
import { useCallback, useState } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import styles from "styles/Gallery.module.css";
import { saveAs } from "file-saver";
// import Gallery from "react-photo-gallery";



const Certificates = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openLightbox = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  const certify = () => {
    const element = document.getElementById("code");
    const value = element.value.toUpperCase();
    element.value = "";
    for (let i = 0; i < certificates.length; i++) {
      if (value in certificates[i]) {
        saveAs(certificates[i]["src"],value);
        openLightbox(certificates[i][value]);
        return;
      }
    }
    openLightbox(0);
  }
  return (
    <>
      <Head>
        <title>Certificates | GFG SRMIST</title>
      </Head>
      <h1 className="section-title">Verify Your Certificates</h1>
      <div className={styles.container}>
        <input type="text" placeholder="Verification Code" id="code" />
        <button onClick={certify}>Verify & Download</button>
      </div>
      {/* Lightbox / Image Viewer */}
      <ModalGateway>
        {isViewerOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel trackProps={{viewsToMove:0}} currentIndex={currentImage} views={certificates}/>
          </Modal>
        ) : null}
      </ModalGateway>
      {/* Masonry Main Body 
      <div className={styles.container}>
        <Gallery
          photos={certificates}
          margin={10}
          direction={"column"}
        />
      </div> */}
    </>
  );
};

export default Certificates;
