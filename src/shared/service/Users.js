import axios from "axios";

let userApi = "";
let AWS = "";
const url = `http://${userApi}.execute-api.${AWS}.amazonaws.com/Dev/getAll/`;

const getAllUsers = async () => {
    try {
        const response = await axios.get(url);
        if (response.status === 200) {
            const data = response.data;
            if (data.statusCode === 200) {
                return data.data;
            } else {
                throw new Error(data.message);
            }
        } else {
            throw new Error('Error al obtener la respuesta del servidor');
        }
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
        throw error;
    }
};

const getUserById = async (id_user) => {
    try {
        const response = await axios.get(url, {
            params: { id_user }
        });

        if (response.status === 200 && response.data.statusCode === 200) {
            return response.data.data;
        } else {
            throw new Error(response.data.message || 'Error al obtener el usuario');
        }
    } catch (error) {
        console.error('Error al obtener el usuario:', error);
        throw error;
    }
};


export default {
    getAllUsers,
    getUserById
}