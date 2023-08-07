import axios from 'axios';

// 環境変数から取得
const APIURL = process.env.REACT_APP_APIURL;
const APIKEY = process.env.REACT_APP_APIKEY;

/*
 * My Memory API URL
 * https://api.mymemory.translated.net/get?q=翻訳前テキスト&langpair=翻訳前言語名|翻訳後言語名
 * https://api.mymemory.translated.net/get?q=Hello World&langpair=en|it
 *
 *
*/

export const getTranslate = async (text, fromLang,toLang) => {
  const endpoint = '/get';
  const url = APIURL + endpoint;



};
