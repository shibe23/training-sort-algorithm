let a = [1, 3, 50, 300, 110, 10, 2, 8, 100];

// k桁の10進数
function radixSort10(a, k) {
  let bucket = [],
    r = 1; // rの位、初期値は1の位
  for (let i = 0; i < 10; i++) {
    bucket[i] = [];
  }
  for (let d = 0; d < k; ++d) {
    for (let i = 0; i < a.length; i++) {
      // | 0 で整数にする
      // bucket[]にバケットソートで値を展開する。
      // 桁が違う時はbucket[0]に入る(0.1→0になるため)
      // 桁の最大数で割っているため、最初に最大桁がbucket[0]に入り、それ以外は通常通り対象のバケットに入るという動きは変わらない
      bucket[(a[i] / r) % 10 | 0].push(a[i]);
    }
    for (let i = 0, j = 0; j < bucket.length; j++) {
      // バケツが空の場合はスキップ
      if (bucket[j] === 'undefined') {
        continue;
      }
      // bucket[j]内の配列に複数値がある場合、順番に処理
      for (let n = 0; n < bucket[j].length; n++) {
        // ひとつ上のfor文で定義したiが加算されている
        // aの先頭から順番に、bucket[]上の値が小さい順に追加されている
        // 先にbucket[0]にある値が追加されるため、あとからbucket[1]以降にある次の桁の値が追加される
        a[i++] = bucket[j][n];
      }
    }
    for (let i = 0; i < bucket.length; i++) {
      // bucket[]をリセット
      bucket[i] = [];
    }
    // 桁を繰り上げる
    r *= 10;
  }
  return a;
}

console.log(radixSort10(a, 3));