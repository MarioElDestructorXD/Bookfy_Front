/*import React, { useEffect, useState } from "react";
import axios from "axios";

const UsersList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const usersData = await getAllUsers();
                setUsers(usersData);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    const getAllUsers = async () => {
        const url_api_users =
            "https://your-api-endpoint.amazonaws.com/dev/your-lambda-function";
        try {
            const response = await axios.get(url_api_users);
            if (response.status === 200) {
                const data = response.data;
                if (data.statusCode === 200) {
                    return data.data;
                } else {
                    throw new Error(data.message);
                }
            } else {
                throw new Error("Error al obtener la respuesta del servidor");
            }
        } catch (error) {
            throw error;
        }
    };

    if (loading) {
        return <div>Cargando...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Lista de Usuarios</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id_user}>
                        {user.name} {user.lastname} ({user.email})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UsersList;*/

/*
import React, { useState, useEffect } from 'react';
import getAllBooks from './path/to/your/function/getAllBooks';  // Asegúrate de ajustar la ruta

const BooksComponent = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const booksData = await getAllBooks();
        setBooks(booksData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {books.length > 0 ? (
        books.map((book) => (
          <div key={book.id_book}>
            <h2>{book.title}</h2>
            <p>Autor: {book.author}</p>
            <p>Género: {book.gener}</p>
            <p>Año: {book.year}</p>
            <p>Descripción: {book.description}</p>
            <p>Sinopsis: {book.synopsis}</p>
            <p>Status: {book.status}</p>
            <h3>Imágenes</h3>
            {book.images.map((image, index) => (
              <img key={index} src={image} alt={`Imagen ${index + 1}`} />
            ))}
            <h3>PDFs</h3>
            {book.pdfs.map((pdf, index) => (
              <a key={index} href={pdf} target="_blank" rel="noopener noreferrer">PDF {index + 1}</a>
            ))}
          </div>
        ))
      ) : (
        <div>No se encontraron libros</div>
      )}
    </div>
  );
};

export default BooksComponent;


import React, { useState } from 'react';
import updateBookStatus from './path/to/your/function/updateBookStatus';  // Ajusta la ruta

const UpdateBookStatusComponent = () => {
  const [idBook, setIdBook] = useState('');
  const [newStatus, setNewStatus] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleUpdateStatus = async () => {
    try {
      const successMessage = await updateBookStatus(idBook, newStatus);
      setMessage(successMessage);
      setError('');
    } catch (err) {
      setMessage('');
      setError(err.message);
    }
  };

  return (
    <div>
      <h1>Actualizar Estado del Libro</h1>
      <div>
        <label>ID del Libro:</label>
        <input
          type="text"
          value={idBook}
          onChange={(e) => setIdBook(e.target.value)}
        />
      </div>
      <div>
        <label>Nuevo Estado:</label>
        <input
          type="text"
          value={newStatus}
          onChange={(e) => setNewStatus(e.target.value)}
        />
      </div>
      <button onClick={handleUpdateStatus}>Actualizar Estado</button>
      {message && <p>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default UpdateBookStatusComponent;

import React, { useState } from 'react';
import updateBook from './path/to/your/function/updateBook';  // Ajusta la ruta

const UpdateBookComponent = () => {
  const [bookData, setBookData] = useState({
    id_book: '',
    title: '',
    author: '',
    genre: '',
    year: '',
    description: '',
    synopsis: '',
    status: true
  });
  const [images, setImages] = useState([]);
  const [pdfFile, setPdfFile] = useState(null);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookData({ ...bookData, [name]: value });
  };

  const handleImageChange = (e) => {
    setImages(Array.from(e.target.files));
  };

  const handlePdfChange = (e) => {
    setPdfFile(e.target.files[0]);
  };

  const handleUpdateBook = async () => {
    try {
      const successMessage = await updateBook(bookData, images, pdfFile);
      setMessage(successMessage);
      setError('');
    } catch (err) {
      setMessage('');
      setError(err.message);
    }
  };

  return (
    <div>
      <h1>Actualizar Libro</h1>
      <div>
        <label>ID del Libro:</label>
        <input
          type="text"
          name="id_book"
          value={bookData.id_book}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Título:</label>
        <input
          type="text"
          name="title"
          value={bookData.title}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Autor:</label>
        <input
          type="text"
          name="author"
          value={bookData.author}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Género:</label>
        <input
          type="text"
          name="genre"
          value={bookData.genre}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Año:</label>
        <input
          type="text"
          name="year"
          value={bookData.year}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Descripción:</label>
        <input
          type="text"
          name="description"
          value={bookData.description}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Sinopsis:</label>
        <input
          type="text"
          name="synopsis"
          value={bookData.synopsis}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Estado:</label>
        <input
          type="checkbox"
          name="status"
          checked={bookData.status}
          onChange={() => setBookData({ ...bookData, status: !bookData.status })}
        />
      </div>
      <div>
        <label>Imágenes:</label>
        <input type="file" multiple onChange={handleImageChange} />
      </div>
      <div>
        <label>Archivo PDF:</label>
        <input type="file" onChange={handlePdfChange} />
      </div>
      <button onClick={handleUpdateBook}>Actualizar Libro</button>
      {message && <p>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default UpdateBookComponent;


*/
