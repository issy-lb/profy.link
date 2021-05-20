// 画像をアップロードするときに使うhooks

import { useState } from "react";
import firebase, { storage } from "../firebase/firebase";

export const useImage = () => {
  // 画像のファイルパスを格納する
  const [filePath, setFilePath] = useState("");

  // ランダムな画像名を作成する
  const randomName = new Date().getTime().toString(16);

  // ランダムな画像名を作成する（2つ目）
  const randomName2 = new Date().getTime().toString(16);

  // 画像アップロード中かどうか、状態を保持
  const [uploading, setUploading] = useState(false);

  // 画像アップロード中かどうか、状態を保持（2つ目）
  const [uploading2, setUploading2] = useState(false);

  // サーバーに保存した後のURLを保存する
  const [imageUrl, setImageUrl] = useState("");

  // サーバーに保存した後のURLを保存する（2つ目）
  const [imageUrl2, setImageUrl2] = useState("");

  // filePath（画像を置く階層+ファイル名）とファイル実体を受け取って、サーバーに保存するし、URLを更新する（1つ目）
  const onSubmit = (file) => {
    if (file === "") {
      console.log("ファイルが選択されてません");
    }
    console.log(`/${filePath}`);
    // アップロード処理
    const uploadTask = storage.ref(`${filePath}/${randomName}`).put(file);
    uploadTask.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      next,
      error,
      complete
    );
  };

  // filePath（画像を置く階層+ファイル名）とファイル実体を受け取って、サーバーに保存するし、URLを更新する（2つ目）
  const onSubmit2 = (file) => {
    if (file === "") {
      console.log("ファイルが選択されてません");
    }
    console.log(`/${filePath}`);
    // アップロード処理
    const uploadTask = storage.ref(`${filePath}/${randomName2}`).put(file);
    uploadTask.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      next,
      error,
      complete2
    );
  };

  const next = (snapshot) => {
    // 進行中のsnapshotを得る
    // アップロードの進行度を表示
    const percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log(percent + "% done");
    console.log(snapshot);
  };
  const error = (error) => {
    // エラーハンドリング
    console.log(error);
  };
  const complete = () => {
    // 完了後の処理
    // 画像表示のため、アップロードした画像のURLを取得
    storage
      .ref(filePath)
      .child(randomName)
      .getDownloadURL()
      .then((fireBaseUrl) => {
        setImageUrl(fireBaseUrl);
        console.log(fireBaseUrl);
        setUploading(false);
      });
  };

  const complete2 = () => {
    // 完了後の処理
    // 画像表示のため、アップロードした画像のURLを取得
    storage
      .ref(filePath)
      .child(randomName2)
      .getDownloadURL()
      .then((fireBaseUrl) => {
        setImageUrl2(fireBaseUrl);
        console.log(fireBaseUrl);
        setUploading2(false);
      });
  };
  return {
    imageUrl,
    setImageUrl,
    onSubmit,
    uploading,
    setUploading,
    setFilePath,
    imageUrl2,
    onSubmit2,
    uploading2,
    setUploading2
  };
};
