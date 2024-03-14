import axios from 'axios';

const jinRiShiCiApi = axios.create({
  baseURL: 'https://v2.jinrishici.com',
});

const githubApi = axios.create({
  baseURL: 'https://api.github.com',
});

export default {
  jinRiShiCiApi,
  githubApi,
};