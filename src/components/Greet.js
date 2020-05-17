import React from "react";

function Greet({ firstName, lastName }) {
  // 引数は{}で囲って受け取る
  return (
    <p>
      Hello {firstName} {lastName}さん！
    </p>
  ); // htmlタグの中で{}を使うと変数を埋め込むことができる
}

export default Greet;
