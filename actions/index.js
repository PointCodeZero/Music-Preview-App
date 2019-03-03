import axios from 'axios';
import _ from 'lodash';

const API_KEY = 'f59a1d0522msh61e3566696402a1p181d5bjsn6e1380519b9d';

const axiosInstance = axios.create({
  baseURL: 'https://deezerdevs-deezer.p.rapidapi.com/',
  timeout: 1000,
  headers: { 'X-RapidAPI-Key': API_KEY }
});

export const searchTracks = singerName => {
  return axiosInstance.get(`search?q=${singerName}`).then(res => {
    const albums = res.data.data.map(item => item.album);
    const uniqueAlbums = _.uniqBy(albums, 'title');
    return uniqueAlbums;
  });
};

export const getAlbumTracks = albumId => {
  return axiosInstance
    .get(`album/${albumId}`)
    .then(res => res.data.tracks.data);
};
