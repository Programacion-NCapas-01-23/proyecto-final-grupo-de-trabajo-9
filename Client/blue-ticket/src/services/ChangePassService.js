import axios from "axios";

const BASE_URL = "https://blueticket01-db3fe21ca65d.herokuapp.com";

const API = axios.create(
    {
        baseURL: BASE_URL,
        headers: {
            "Content-Type": "application/json",
        }
    }
);

export const ChangePass = {
    getId: async(email) =>{
        try {
            let response = await API.get('/public/get-user', email);
            console.log(response);
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