import axios from 'axios';
import { useCategoriesList } from '../stores/categories';

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_ENDPOINT,
});

export default instance