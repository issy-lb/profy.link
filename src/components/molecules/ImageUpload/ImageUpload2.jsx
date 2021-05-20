// 画像をアップロードするための編集フレーム

import styled from "styled-components";

export const ImageUpload2 = (props) => {
  // 画像のファイル名を格納する、画像の実態を格納する、UPしたらソースを更新する

  // ー　upSource:プレビュー表示用の関数。プレビュー用のURLを渡す
  // ー　onSubmit:画像をfirebaseに保存するための関数。画像データを渡す
  // ー　children:画像プレビューを入れる
  const { upSource, children, onSubmit, size } = props;

  // 画像がUPされた時の処理
  const handleImage = (event) => {
    var fileReader = new FileReader();
    const image = event.target.files[0];
    fileReader.readAsDataURL(image);
    fileReader.onload = () => {
      upSource(fileReader.result);
    };
    onSubmit(image);
  };

  return (
    <SContainer style={{ height: size, width: size }}>
      <form>
        <label>
          <input
            type="file"
            style={{ display: "none" }}
            onChange={handleImage}
            accept="image/*"
          />
          {children}
          <SIcon src="https://profy-59433.web.app/assets/icon/camera.png" />
        </label>
      </form>
    </SContainer>
  );
};

const SContainer = styled.div`
  position: relative;
  background: none;
  border: none;
  margin: 0 auto;
  padding: 0;
  display: block;
`;
const SIcon = styled.img`
  width: 48px;
  height: 48px;
  position: absolute;
  right: 5px;
  bottom: 5px;
`;
