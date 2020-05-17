import React from "react";
import { translateJaToEn } from "../api/translateApi"; // importを追加
import { translateEnToJa } from "../api/translateApi"; // importを追加

function Translate() {
  const [result, setResult] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  // 入力域への参照を格納する変数を定義
  const input = React.useRef(null);

  // ボタンクリック時に実行する関数を定義
  const onClickEn = async () => {
    try {
      setLoading(true);
      // awaitを追加
      const response = await translateJaToEn(input.current.value);
      console.log(response);
      // 翻訳結果をsetする
      setResult(response.data);
    } catch (err) {
      alert(err.toString());
    } finally {
      // 処理が完了したらloadingにfalseをset
      setLoading(false);
    }
  };

  const onClickJa = async () => {
    try {
      setLoading(true);
      // awaitを追加
      const response = await translateEnToJa(result);
      console.log(response);
      // 翻訳結果をsetする
      setResult(response.data);
    } catch (err) {
      alert(err.toString());
    } finally {
      // 処理が完了したらloadingにfalseをset
      setLoading(false);
    }
  };

  // loadingがtrueの場合はLoading...を表示する
  if (loading) return <p>Loading...</p>;

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <input ref={input} />
          <button onClick={onClickEn}>日->英</button>
          <button onClick={onClickJa}>日本語に再翻訳</button>
          <p>{result}</p>
        </>
      )}
    </div>
  );
}

export default Translate;
