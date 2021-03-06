// DOM :JSからHTMLを操作する

// DOM操作のステップ
// HTML要素を取得する
// 要素に対して何かする

// 9/16
// event.target

// ulリストを取得
// 要素を取得する
const ul = document.querySelector('.list');
const title = document.getElementById('title');
const deleteButton = document.getElementById('button');
const addButton = document.getElementById('addButton');
const input = document.getElementById('input');
const form = document.getElementById('form');

title.textContent = 'DOMです';

// addEventListener(きっかけ, 処理)
deleteButton.addEventListener('click', () => {
  // li要素を全て取得
  const li = document.querySelectorAll('li');
  // liの要素があれば削除
  if (li.length > 0) {
    ul.removeChild(ul.lastElementChild);
  }
});

addButton.addEventListener('click', (event) => {
  const item = document.createElement('li');
  item.textContent = 'もも';
  ul.appendChild(item);
});

form.addEventListener('submit', (event) => {
  // formを送信したときに再読み込みをキャンセルする必要がある。
  // HTML要素の持っているデフォルトの挙動をキャンセルする
  // form => リロード(再読み込み)が入る
  // a => hrefに指定したurlにジャンプする
  // eventと言うオブジェクトのpreventDefault関数
  event.preventDefault();
});

// 新しいli要素を作成
const newListItem = document.createElement('li');
// 作成したli要素のテキストに「ブドウ」を代入
newListItem.textContent = 'ブドウ';
// liをリストに追加
ul.appendChild(newListItem);

/* 
要素を取得するやつ
- getElementById: htmlのidを元に要素を取得する
- querySelector: cssのセレクターと同じ指定方法でhtmlの要素を1つ取得する
- querySelectorAll: cssのセレクターと同じ指定方法でhtmlの要素を全て取得する

イベント(きっかけ:クリック、ホバー)を設定
- addEventListener(きっかけ, 関数) : 「きっかけ」が起きると関数が実行

要素の作成
- createElement: 引数にとった要素を作成する(li, a, h1....)

要素を追加
- appendChild: 引数にとった要素を子要素の最後の要素に追加
ex) appendChild(要素)

要素の削除
- 親要素.removeChild: 子要素を削除
*/

// 仮想DOM
