import axios from 'axios';

const API_URL = 'https://devcase.isiksoftyazilim.com/api';

export const getProducts = async (page = 1) => {
  try {
    const response = await axios.get(`${API_URL}/products?page=${page}`);
    return response.data.data;
  } catch (error) {
    console.error('Ürünler yüklenirken hata oluştu:', error);
    throw error;
  }
};
