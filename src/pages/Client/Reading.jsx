import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

import libros from '../../pages/Books/ListLibro';
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
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', padding: '10px', backgroundColor: '#f8d7da' }}>
        <div style={{ fontSize: '24px', fontWeight: 'bold' }}>Bookfy</div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <select onChange={handleBookChange} style={{ marginRight: '10px', padding: '5px', fontSize: '16px' }}>
            {libros.map((book, index) => (
              <option value={index} key={index}>{book.title}</option>
            ))}
          </select>
          <button onClick={zoomIn} style={{ margin: '0 5px', padding: '5px 10px', fontSize: '18px', cursor: 'pointer' }}>A+</button>
          <button onClick={zoomOut} style={{ margin: '0 5px', padding: '5px 10px', fontSize: '18px', cursor: 'pointer' }}>A-</button>
        </div>
      </div>
      <div style={{ width: '80%', height: '80vh', overflow: 'auto', border: '1px solid #ddd', marginTop: '20px', padding: '10px' }}>
        <Document
          file={selectedBook.pdfUrl}
          onLoadSuccess={() => setPageNumber(1)}
        >
          <Page pageNumber={pageNumber} scale={scale} />
        </Document>
      </div>
    </div>
  );
};

export default Reading;
