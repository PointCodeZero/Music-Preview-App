import axios from 'axios';
import _ from 'lodash';
import { Alert, AsyncStorage } from 'react-native';

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

export const storeData = async (key, value) => {
  const stringifyValue = JSON.stringify(value);
  try {
    await AsyncStorage.setItem(key, stringifyValue);
    return stringifyValue;
  } catch (error) {
    console.log(error);
  }
};

export const retrieveData = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      const parseValue = JSON.parse(value);
      return parseValue;
    }
  } catch (error) {
    console.log(error);
  }
};

export const clearStorage = async () => {
  try {
    await AsyncStorage.clear();
    return true;
  } catch (error) {
    console.log(error);
  }
};

export const alerts = (alert, message) => {
  Alert.alert(
    `${alert}`,
    `${message}`,
    [{ text: 'Continue', onPress: () => console.log('OK Pressed') }],
    { cancelable: false }
  );
};
