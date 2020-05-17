import axios from "axios"; // axiosをimport

// 通信先のURLを定義
const url =
  "https://script.google.com/macros/s/AKfycby3NwZhozMWbkS8evh2t3dvfJgKxCBdchI0Xdr31L_BoUb7uqyE/exec";

// 翻訳したい文字列を引数で受け取る関数
export function translateJaToEn(text) {
  // 通信処理を実行し結果を返却
  return axios.get(`${url}?text=${text}&source=ja&target=en`);
}

export function translateEnToJa(text) {
  // 通信処理を実行し結果を返却
  return axios.get(`${url}?text=${text}&source=en&target=ja`);
}
