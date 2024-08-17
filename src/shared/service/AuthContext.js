import axios from "axios";

const url = 'https://xgaqswgg3j.execute-api.us-east-1.amazonaws.com/Prod/'

const signUp = async (userDetails) => {
    try {
        const response = await axios.post(`${url}sign_up`, userDetails, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        if (response.status === 200) {
            const data = response.data;
            if (data.statusCode === 200) {
                return data;
            } else {
                throw new Error(data.message);
            }
        } else {
            throw new Error('Error al obtener la respuesta del servidor');
        }
    } catch (error) {
        console.error('Error al registrar el usuario:', error.message);
        throw error;
    }
};

const login = async (email, password) => {
    try {
        const response = await axios.post(`${url}login`, { email, password }, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        if (response.status === 200) {
            const data = response.data;
            if (data.statusCode === 200) {
                return data;
            } else {
                throw new Error(data.message);
            }
        } else {
            throw new Error('Error al obtener la respuesta del servidor');
        }
    } catch (error) {
        console.error('Error al iniciar sesión:', error.message);
        throw error;
    }
};

const forgotPassword = async (email) => {
    try {
        const response = await axios.post(`${url}forgot_password`, { email }, {
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (response.status === 200) {
            const data = response.data;
            if (data.statusCode === 200) {
                return data;
            } else {
                throw new Error(data.error_message || 'Error en la solicitud');
            }
        } else {
            throw new Error('Error al obtener la respuesta del servidor');
        }
    } catch (error) {
        console.error('Error al solicitar el restablecimiento de contraseña:', error.message);
        throw error;
    }
};

const resetPassword = async (email, confirmationCode, newPassword) => {
    try {
        const response = await axios.post(`${url}reset_password`, { 
            email, 
            confirmation_code: confirmationCode, 
            new_password: newPassword 
        }, {
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (response.status === 200) {
            const data = response.data;
            if (data.statusCode === 200) {
                return data;
            } else {
                throw new Error(data.message || 'Error en la solicitud');
            }
        } else {
            throw new Error('Error al obtener la respuesta del servidor');
        }
    } catch (error) {
        console.error('Error al restablecer la contraseña:', error.message);
        throw error; // Lanza el error para que pueda ser manejado en el frontend
    }
};

export default {
    signUp,
    login,
    forgotPassword,
    resetPassword
}

