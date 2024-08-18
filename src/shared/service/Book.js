import axios from "axios";

const url = `https://elrumbe8f5.execute-api.us-east-1.amazonaws.com/Prod/`;

const createBook = async (bookData) => {
    try {
        const response = await axios.post(`${url}create_book`, bookData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error al crear el libro:', error);
        throw error;
    }
};


const getBookById = async (id) => {
    try {
        const response = await axios.get(`${url}getOne`, {
            params: { id_book: id }
        });
        return response.data;
    } catch (error) {
        console.error('Error al obtener el libro:', error);
        throw error;
    }
};

const getAllBooks = async () => {
    try {
        const response = await axios.get(`${url}getAll`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener los libros:', error);
        throw error;
    }
};


const updateBookStatus = async (idBook, status) => {
    try {
        const response = await axios.patch(`${url}patch_status`, {
            id_book: idBook,
            status: status
        });
        return response.data;
    } catch (error) {
        console.error('Error al actualizar el estado del libro:', error);
        throw error;
    }
};


const updateBook = async (bookData) => {
    try {
        const response = await axios.put(`${url}update_book`, bookData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error al actualizar el libro:', error);
        throw error;
    }
};


export default {
    getAllBooks,
    getBookById,
    updateBookStatus,
    updateBook
}