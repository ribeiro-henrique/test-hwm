import axios from 'axios';

const url = "https://hardworkmedicina.com.br/exemploQuestoes.json";
const urlProxed = 'https://corsproxy.io/?' + encodeURIComponent(url);

export const fetchApi = async () => {
  const { data } = await axios.get(urlProxed);

  return data.obj;
}