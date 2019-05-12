let a = [1, 3, 10, 2, 8];

function bubbleSort(arr) {
  // 先頭から確定するため、順番に範囲を後ろへ狭める
  for (let i = 0; i < arr.length; i++) {
    // 末尾の値を前へ移動させる
    for (let j = arr.length - 1; j > i; j--) {
      // ひとつ前の値が大きければ、現在の位置と入れ替える
      // 標準入力の場合、Number()に変換しないと文字列としての比較になる
      if (Number(arr[j]) < Number(arr[j - 1])) {
        // 分割代入でtmpを作らずに入れ替え
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      }
      console.log(i, j, a);
    }
  }
  return arr;
}

console.log(bubbleSort(a));