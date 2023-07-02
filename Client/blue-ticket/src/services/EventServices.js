import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

const API = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

const EventService = {
    getAllEvents: async(token, page = 0, size = 9, title = '')=>{
        try {
            const response = await API.get('/public/home', {
                params: { page, size, title },
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }); 
        
            if (response.status === 200) {
                console.log(response);
                return response.data;
            } else {
                throw new Error(response.status);
            }
        } catch (error) {
            console.log(error);
        return {
                hasError: true,
            };
        }
    }
}


export default EventService;
