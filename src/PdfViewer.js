// Copyright ©2024 Impulse Compute. All rights reserved.  
// The contents on this page are protected by copyright laws of India and International copyright laws. Reproduction and distribution of the contents on this page without written permission of the owner Impulse Compute is prohibited.  

import React, { useCallback, useEffect, useState } from "react";
import { pdfjs, Document, Page } from "react-pdf";
import pdf from "./files/merged-pdf (1).pdf"
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import styles from "./pdfViewer.module.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const options = {
  cMapUrl: "/cmaps/",
  standardFontDataUrl: "/standard_fonts/",
};

const maxWidth = 800;


function PdfViewer() {
  const [numPages,setNumpages]=useState(0);
  useEffect(()=>{
    console.log(pdf?.numPages)
  },[pdf])

  const onDocumentLoadSuccess=(pdf)=>{
    console.log(pdf);
    setNumpages(pdf?.numPages);
  }
  return (
    <div className={styles["pdf-viewer"]}>
      <div>PDF File Viewer</div>
      <Document
        file={pdf}
        onLoadSuccess={onDocumentLoadSuccess}
        options={options}
      >
        {Array.from(new Array(numPages), (el, index) => (
          <div key={`page_${index + 1}`} className={styles["pdf-page-container"]}>
            {/* code here */}
            <Page
              pageNumber={index + 1}
              width={
                 maxWidth
              }
            />
          </div>
        ))}
      </Document>
    </div>
  );
}

export default PdfViewer;
