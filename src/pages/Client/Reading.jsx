import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function Reading() {
  const location = useLocation();
  const { pdfUrl } = location.state || {}; // Getting pdfUrl from the state
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);

  const zoomIn = () => {
    setScale(scale + 0.1);
  };

  const zoomOut = () => {
    setScale(scale - 0.1);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          padding: "10px",
          border: "2px", // Changed to border
          backgroundColor: "#1F2D40",
          color: "#fff" // Remove the background color
        }}
      >
        <div style={{ fontSize: "24px", fontWeight: "bold" }}>Bookfy</div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <button
            onClick={zoomIn}
            style={{
              margin: "0 5px",
              padding: "5px 10px",
              fontSize: "18px",
              cursor: "pointer",
            }}
          >
            A+
          </button>
          <button
            onClick={zoomOut}
            style={{
              margin: "0 5px",
              padding: "5px 10px",
              fontSize: "18px",
              cursor: "pointer",
            }}
          >
            A-
          </button>
        </div>
      </div>
      <div
        style={{
          width: "80%",
          height: "80vh",
          overflow: "auto",
          border: "2px solid #1F2D40", // Add a border to the PDF viewer
          marginTop: "20px",
          padding: "10px",
        }}
      >
        {pdfUrl ? (
          <Document file={pdfUrl} onLoadSuccess={() => setPageNumber(1)}>
            <Page pageNumber={pageNumber} scale={scale} />
          </Document>
        ) : (
          <div>No PDF available for this book.</div>
        )}
      </div>
    </div>
  );
}
