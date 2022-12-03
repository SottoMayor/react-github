import axios from 'axios';

export const getUsers = async (since) => {
    console.log(import.meta.env.VITE_APP_API_URL)
    try{
        const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/api/users?since=${since || 0}`)

        return response.data;
    }catch(e){
        // In this test I'm not worried about handling errors.
        console.log(e)
    }
}