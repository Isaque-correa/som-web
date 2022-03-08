import axios from 'axios';

const infoLoja = axios.create({
    
    baseURL: "http://localhost:3000/data/static",
});
export default infoLoja;