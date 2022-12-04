import axios from 'axios';

export const getUsers = async (since) => {
    try{
        const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/api/users?since=${since || 0}`)

        return response.data;
    }catch(e){
        // In this test I'm not worried about handling errors.
        console.log(e)
    }
}

export const getUser = async (username) => {
    try{
        const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/api/users/${username}/details`)

        return response.data;
    }catch(e){
        // In this test I'm not worried about handling errors.
        console.log(e)
    }
}

export const getRepos = async (username) => {
    try{
        const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/api/users/${username}/repos`)

        return response.data;
    }catch(e){
        // In this test I'm not worried about handling errors.
        console.log(e)
    }
}