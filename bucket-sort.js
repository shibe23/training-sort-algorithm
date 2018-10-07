let arr = [1, 3, 10, 2, 8, 1];

function bucketSort(a) {
  // バケツ
  let bucket = [];
	
  // バケツに入れる数字の数を足し込む
  for (let i = 0; i < a.length; i++) {
    if (typeof bucket[a[i]] === 'undefined') {
      bucket[a[i]] = [];
    }
    // bucket[]に対象の値を格納
    // 複数ある場合も考慮して、push()でa[i]を配列として追加する
    bucket[a[i]].push(a[i]);
  }
  console.log('bucket', bucket);
  
  let arr = [];
	
  // arrにbucket[]内の値を,undefinedになるものを除いて追加
  for (let i = 0; i < bucket.length; i++) {
    // bucket[i]に値がなければスキップ
    if (typeof bucket[i] === 'undefined' || !bucket[i].length) {continue;}
    // bucket[i]の中にある配列をすべて追加
    for (let j = 0; j < bucket[i].length; j++) {
      arr.push(bucket[i][j]);
      console.log(i, 'bucket[i]', bucket[i]);
    }
  }
	
  return arr;
}

console.log(bucketSort(arr));