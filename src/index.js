
// クリックされた時の挙動 関数
const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

// 未完了にリスト追加 関数
const createIncompleteList = (text) => {
  //まとめるためのdiv
  const div = document.createElement("div");
  div.className = "list-row";

  const li = document.createElement("li");
  li.innerText = text;

  // 完了
  // 完了ボタンが押されたら、そのdivのirstElemenである<li>中身を変数に置く
  // div中身を初期化
  // 新しく<li>作成 し、変数に置いたtextを入れる
  // 戻すボタンを作成し、それらを中身初期化したdivに入れて""complete-list"配下へ置く
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    deleteFromIncompleteList(deleteButton.parentNode);

    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;

    // div以下初期化
    addTarget.textContent = null;

    const li = document.createElement("li");
    li.innerText = text;

    // 戻すボタン
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      const text = backButton.parentNode.firstChild.innerText;
      // 再帰的にこの関数を呼んで未完了に戻せる
      createIncompleteList(text);
    });

    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    document.getElementById("complete-list").appendChild(addTarget);
  });

  //　削除
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  // 上記で作成した要素を<divに入れて>それを"incomplete-list"id下に配置している
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  document.getElementById("incomplete-list").appendChild(div);
};

// 指定の要素を削除 関数
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//　追加ボタンが押された時の挙動(上記の関数はここから呼ばれている)
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
