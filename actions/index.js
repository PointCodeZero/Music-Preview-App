import axios from 'axios';

const API_KEY = 'f59a1d0522msh61e3566696402a1p181d5bjsn6e1380519b9d';

const axiosInstance = axios.create({
  baseURL: 'https://deezerdevs-deezer.p.rapidapi.com/',
  timeout: 1000,
  headers: { 'X-RapidAPI-Key': API_KEY }
});

export const searchTracks = singerName => {
  return axiosInstance
    .get(`search?q=${singerName}`)
    .then(res => res.data.data.map(item => item.album));
};
