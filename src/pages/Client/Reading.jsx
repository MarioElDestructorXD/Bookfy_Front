import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import libros from '../../pages/Books/ListLibro';
import './Reading.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Reading = () => {
  const [selectedBook, setSelectedBook] = useState(libros[0]);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);

  const zoomIn = () => {
    setScale(scale + 0.1);
  };

  const zoomOut = () => {
    setScale(scale - 0.1);
  };

  const handleBookChange = (event) => {
    const bookIndex = event.target.value;
    setSelectedBook(libros[bookIndex]);
  };

  return (
    <div className="reading-container">
      <div className="navbar">
        <div className="navbar-title">Bookfy</div>
        <div className="navbar-menu">
          <select onChange={handleBookChange}>
            {libros.map((book, index) => (
              <option value={index} key={index}>{book.title}</option>
            ))}
          </select>
          <button onClick={zoomIn}>A+</button>
          <button onClick={zoomOut}>A-</button>
        </div>
      </div>
      <div className="pdf-container">
        <Document
          file={selectedBook.pdfUrl}
          onLoadSuccess={({ pageNumber }) => setPageNumber(1)}
        >
          <Page pageNumber={pageNumber} scale={scale} />
        </Document>
      </div>
    </div>
  );
};

export default Reading;
