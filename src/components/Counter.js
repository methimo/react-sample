import React from "react";

// styleの定義を追加
const styles = {
  counter: {
    textAlign: "center",
  },
  count: {
    fontSize: "64px",
  },
};

function Counter() {
  // ーを押した時の処理を追加

  const [count, setCount] = React.useState(0);

  const down = () => {
    setCount(count - 1);
  };

  // ＋を押した時の処理を追加
  const up = () => {
    setCount(count + 1);
  };

  const multi = () => {
    setCount(count * count);
  };

  return (
    <div style={styles.counter}>
      <div style={styles.count}>{count}</div>
      <button onClick={down}>ー</button>
      <button onClick={up}>＋</button>
      <button onClick={multi}>＊＊</button>
    </div>
  );
}

export default Counter;
