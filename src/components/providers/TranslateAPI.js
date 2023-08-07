import axios from 'axios';

// 環境変数から取得
const APIURL = process.env.REACT_APP_APIURL;
const APIKEY = process.env.REACT_APP_APIKEY;

export const getTranslate = async (text, fromLang,toLang) => {
  const endpoint = '/get';
  const url = APIURL + endpoint;
  const params = {
    q : text,
    langpair : fromLang + '|' + toLang
  };
  const response = await axios.get(url,{
    params
  });
  return response.data;
};
