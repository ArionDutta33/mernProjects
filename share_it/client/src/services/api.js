import axios from "axios";
const api_url = "https://localhost:8000"
export const uploadFile = async (data) => {
    try {
        let response = await axios.post(`${api_url}/upload`, data);
        return response.data;
    } catch (error) {
        console.log("error while calling the api", error.message)
    }
}