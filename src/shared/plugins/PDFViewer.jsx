// PDFViewer.js
import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'pdfjs-dist/build/pdf.worker.min.js';  // Importa el trabajador

// Configura la opción del trabajador
pdfjs.GlobalWorkerOptions.workerSrc = '/path/to/pdf.worker.min.js';

const PDFViewer = () => {
    const pdfUrl = "https://bookify-files.s3.amazonaws.com/pdf_book/9383e1b1-569b-49f9-b1e2-ec22e2bddcc4.pdf"
  return (
    <div>
      <Document
        file={pdfUrl}
        onLoadError={console.error}
      >
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};

export default PDFViewer;
