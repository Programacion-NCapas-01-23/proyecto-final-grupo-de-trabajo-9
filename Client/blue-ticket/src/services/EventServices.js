import axios from 'axios';

const BASE_URL = 'https://blueticket01-db3fe21ca65d.herokuapp.com';

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
    },
    getOneEvent: async (id) =>{
        try {
            const response = await API.get(`/public/event/${id}`);
            if (response.status === 200) {
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
    },
    gotOneEventAuth: async (token, id) =>{
        try {
            const response = await API.get(`/public/event/${id}`,{
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if (response.status === 200) {
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
