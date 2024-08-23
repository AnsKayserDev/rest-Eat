import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://www.googleapis.com',
  headers: {
    Accept: 'application/json',
  },
});

const getRestrauntList =
  '';

export {
  axiosClient,
  getRestrauntList,
};
