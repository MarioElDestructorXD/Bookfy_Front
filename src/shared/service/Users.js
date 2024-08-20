import axios from "axios";

const url = `https://zxpkqkebn8.execute-api.us-east-1.amazonaws.com/Prod/`;

const getAllUsers = async () => {
    try {
        const token = 'YOUR_AUTH_TOKEN';
        const response = await axios.get(`${url}getAll`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
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
        const token = 'YOUR_AUTH_TOKEN'; // Reemplaza con el token adecuado
        const response = await axios.get(`${url}getUser`, {
            params: { id_user },
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
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
        console.error('Error al obtener el usuario:', error);
        throw error;
    }
};

const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${url}insert_user`, userData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log('Respuesta del servidor:', response);
        if (response.status === 200) {
            const { statusCode, message } = response.data;
            if (statusCode === 200) {
                console.log('Usuario registrado correctamente:', message);
            } else {
                throw new Error(message);
            }
        } else {
            throw new Error('Error al obtener la respuesta del servidor');
        }
    } catch (error) {
        console.error('Error al registrar el usuario:', error.message);
    }
};

const updateUserStatus = async (userId, status) => {
    try {
        const response = await axios.post(`${url}updateStatus`, {
            id_user: userId,
            status: status
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer YOUR_AUTH_TOKEN'
            }
        });

        if (response.status === 200) {
            const data = response.data;
            if (data.statusCode === 200) {
                console.log('Estado del usuario actualizado correctamente:', data.message);
            } else {
                throw new Error(data.message);
            }
        } else {
            throw new Error('Error al obtener la respuesta del servidor');
        }
    } catch (error) {
        console.error('Error al actualizar el estado del usuario:', error);
    }
};

const updateUser = async (userData) => {
    try {
        const response = await axios.post(url, userData, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer YOUR_AUTH_TOKEN' // Reemplaza con el token adecuado
            }
        });

        if (response.status === 200) {
            const data = response.data;
            if (data.statusCode === 200) {
                console.log('Usuario actualizado correctamente:', data.message);
            } else {
                throw new Error(data.message);
            }
        } else {
            throw new Error('Error al obtener la respuesta del servidor');
        }
    } catch (error) {
        console.error('Error al actualizar el usuario:', error);
    }
};



export default {
    getAllUsers,
    getUserById,
    registerUser,
    updateUserStatus,
    updateUser
}