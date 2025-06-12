import axios from 'axios';
import { Product } from '@/store/slices/productSlice';

const API_URL = 'https://devcase.isiksoftyazilim.com/api';

export const getProducts = async (page = 1): Promise<Product[]> => {
  try {
    const response = await axios.get(`${API_URL}/products?page=${page}`);
    return response.data.data as Product[];
  } catch (error: unknown) {
    console.error('Ürünler yüklenirken hata oluştu:', error);
    throw error;
  }
};
