import axios from 'axios';
const apiUrl = 'http://localhost:3000/upload';

export const request = {
    endFile: async (file: File) => {
        const formData = new FormData();
        formData.append('file', file);
        try {
            const response = await axios.post(apiUrl, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            return response; 
        } catch (error) {
            console.error('Erro ao enviar o arquivo:', error);
            throw error; 
        }
    }
};
