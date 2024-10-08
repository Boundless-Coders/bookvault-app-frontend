import axios from "axios";

const API_URL = "http://localhost:5000/api/books";

export const getAllBooks = async () => {
  return await axios.get(API_URL);
};

export const getBookById = async (id) => {
  return await axios.get(`${API_URL}/${id}`);
};

export const createBook = async (bookData) => {
  return await axios.post(API_URL, bookData);
};

export const updateBook = async (id, bookData) => {
  return await axios.put(`${API_URL}/${id}`, bookData);
};

export const deleteBook = async (id) => {
  return await axios.delete(`${API_URL}/${id}`);
};
