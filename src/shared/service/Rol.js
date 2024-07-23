import axios from "axios";

let rolApi = "";
let AWS = "";
const url = `http://${rolApi}.execute-api.${AWS}.amazonaws.com/Dev/getAll/`;

const getRoles = async () => {
    try {
        const response = await axios.get(url_api_get_roles);

        if (response.status === 200) {
            return response.data.data;  // Aquí están los roles obtenidos
        } else {
            throw new Error(response.data.error || 'Error al obtener los roles');
        }
    } catch (error) {
        console.error('Error al obtener los roles:', error);
        throw error;
    }
};

const createRole = async (roleData) => {
    try {
        const response = await axios.post(url_api_create_role, roleData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.status === 200) {
            return response.data;  // Aquí está la respuesta exitosa
        } else {
            throw new Error(response.data.error || 'Error al crear el rol');
        }
    } catch (error) {
        console.error('Error al crear el rol:', error);
        throw error;
    }
};

export default {
    getRoles,
    createRole
} 