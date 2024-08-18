import axios from "axios";

const url = `http://${userApi}.execute-api.${AWS}.amazonaws.com/Prod/getAll/`;

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
        if (response.status === 200) {
            const data = response.data;
            if (data.statusCode === 200) {
                console.log('Usuario registrado correctamente:', data.message);
            } else {
                throw new Error(data.message);
            }
        } else {
            throw new Error('Error al obtener la respuesta del servidor');
        }
    } catch (error) {
        console.error('Error al registrar el usuario:', error);
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