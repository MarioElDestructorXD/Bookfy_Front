import axios from "axios";

let bookApi = "";
let AWS = "";
const url = `http://${bookApi}.execute-api.${AWS}.amazonaws.com/Dev/getAll/`;

const getAllBooks = async () => {
    try {
        const response = await axios.get(url);

        if (response.status === 200 && response.data.statusCode === 200) {
            return response.data.data;  // Aquí están los datos de los libros
        } else {
            throw new Error(response.data.message || 'Error al obtener los libros');
        }
    } catch (error) {
        console.error('Error al obtener los libros:', error);
        throw error;
    }
};


const getBookById = async (id_book) => {
    try {
        const response = await axios.get(url, {
            params: { id_book }
        });

        if (response.status === 200 && response.data.statusCode === 200) {
            return response.data.data;  // Aquí están los datos del libro
        } else {
            throw new Error(response.data.message || 'Error al obtener el libro');
        }
    } catch (error) {
        console.error('Error al obtener el libro:', error);
        throw error;
    }
};



const uploadBook = async (bookData, images, pdf) => {
    try {
        const formData = new FormData();
        Object.keys(bookData).forEach(key => {
            formData.append(key, bookData[key]);
        });

        // Añadir imágenes al formData
        images.forEach((image, index) => {
            formData.append('images', image);
        });

        // Añadir el PDF al formData
        if (pdf) {
            formData.append('pdf', pdf);
        }

        const response = await axios.post(url, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        return response.data;
    } catch (error) {
        console.error('Error al subir el libro:', error);
        throw error;
    }
};

const updateBookStatus = async (id_book, status) => {
    try {
        const response = await axios.patch(url_api_update_status, {
            id_book,
            status
        });

        if (response.status === 200) {
            return response.data.message;
        } else {
            throw new Error(response.data.error || 'Error al actualizar el estado del libro');
        }
    } catch (error) {
        console.error('Error al actualizar el estado del libro:', error);
        throw error;
    }
};

const updateBook = async (bookData, images, pdfFile) => {
    try {
        const formData = new FormData();

        // Agregar datos del libro al FormData
        Object.keys(bookData).forEach(key => {
            formData.append(key, bookData[key]);
        });

        // Agregar imágenes al FormData
        if (images && images.length > 0) {
            images.forEach((image, index) => {
                formData.append('images', image);
            });
        }

        // Agregar archivo PDF al FormData
        if (pdfFile) {
            formData.append('pdf', pdfFile);
        }

        const response = await axios.put(url_api_update_book, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        if (response.status === 200) {
            return response.data.message;  // Aquí está el mensaje de éxito
        } else {
            throw new Error(response.data.error || 'Error al actualizar el libro');
        }
    } catch (error) {
        console.error('Error al actualizar el libro:', error);
        throw error;
    }
};


export default {
    getAllBooks,
    getBookById,
    uploadBook,
    updateBookStatus,
    updateBook
}