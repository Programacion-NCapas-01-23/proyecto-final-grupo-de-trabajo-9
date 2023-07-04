import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

const API = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

const CategoryService = {
    getAllEvents: async(token)=>{
        try {
            const response = await API.get('category/all', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }); 
        
            if (response.status === 200) {
                console.log(response);
                return response;
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


export default CategoryService;