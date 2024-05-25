import axios from 'axios';

const api = axios.create({
  baseURL: 'http://3.36.127.43:8080'
});

export const getImages = () => api.get('/imageAll');
export const getComments = (id) => api.get(`/${id}/comments`);
export const addComment = (id, comment) => api.post(`/${id}/comments`, { commentBody: comment });
export const deleteComment = (imageId, commentId) => api.delete(`/${imageId}/comments/${commentId}`);
export const getImageCount = () => api.get('/imageSize');
