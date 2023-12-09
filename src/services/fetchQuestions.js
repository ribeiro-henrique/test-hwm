import axios from 'axios';

const url = "https://hardworkmedicina.com.br/exemploQuestoes.json";

export const fetchApi = async () => {
  const data = await axios.get(url);

  return data.obj;
}