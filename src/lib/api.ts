import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000'
});

export const getStories = async (category?: string) => {
  const response = await api.get('/stories', {
    params: category ? { category } : {}
  });
  return response.data;
};

export const getStoryById = async (id: number) => {
  const response = await api.get(`/stories/${id}`);
  return response.data;
};

export const getComments = async (storyId: number) => {
  const response = await api.get('/comments', {
    params: { storyId }
  });
  return response.data;
};

export const addComment = async (comment: { storyId: number; author: string; content: string }) => {
  const response = await api.post('/comments', {
    ...comment,
    createdAt: new Date().toISOString()
  });
  return response.data;
};

export const updateStoryStats = async (id: number, stats: { views?: number; likes?: number }) => {
  const story = await getStoryById(id);
  const response = await api.patch(`/stories/${id}`, {
    views: stats.views ?? story.views,
    likes: stats.likes ?? story.likes
  });
  return response.data;
};