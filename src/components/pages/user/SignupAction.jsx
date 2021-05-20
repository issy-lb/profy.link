// Module     : 新規登録用のメール送信完了ページ
// Author     : okabe
// LastUpdate : 2021/05/05
// Since      : 2021/05/05

import React from "react";
import styled from "styled-components";
import { Brank } from "../../atoms/layout/Brank";
import { BrandTemp } from "../../templates/BrandTemp";
import { TitlePrimary } from "../../atoms/Text/TitlePrimary";
import { TitleSecondery } from "../../atoms/Text/TitleSecondery";

const SignupAction = () => {
  return (
    <BrandTemp>
      <STitle>s</STitle>
      <SSubTitle>
        メールアドレスにURLを送信しました
        30分以内にURLにアクセスして本登録を完了してください
      </SSubTitle>
      <Brank height={"24px"} />
      <SContainer>{ImgUndrawLetter}</SContainer>
    </BrandTemp>
  );
};

const STitle = styled(TitlePrimary)`
  margin-top: 40px;
  margin-bottom: 16px;
`;
const SSubTitle = styled(TitleSecondery)`
  margin-bottom: 24px;
`;

const SContainer = styled.div`
  text-align: center;
`;

const ImgUndrawLetter = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="226"
    height="192"
    viewBox="0 0 226 192"
  >
    <g id="img-undraw-letter" transform="translate(0 -0.014)">
      <path
        id="パス_3292"
        data-name="パス 3292"
        d="M572.852,192.141c-2.14,4.433-6.077,7.732-10.2,10.418a64.505,64.505,0,0,1-14.006,6.844c-.678.237-1.363.465-2.048.678H517.267c-.19-.217-.373-.444-.549-.678a11.938,11.938,0,0,1-2.459-8.54,9.954,9.954,0,0,1,7.4-8.448c3.9-.841,8.353,1.489,9.537,5.3.655-7.349,1.407-15.007,5.314-21.268A22.528,22.528,0,0,1,552.816,166a20.538,20.538,0,0,1,11.355,2.079c.322.163.641.332.953.509a19,19,0,0,1,5.474,4.67A18.348,18.348,0,0,1,572.852,192.141Z"
        transform="translate(-430.293 -165.875)"
        fill="#f2f2f2"
      />
      <path
        id="パス_3293"
        data-name="パス 3293"
        d="M601.065,172.744a.516.516,0,0,1-.21.465,107.5,107.5,0,0,0-30.642,40.351c-.1.224-.2.451-.3.678h-1.35c.095-.227.19-.454.288-.678q1.928-4.5,4.263-8.811a109.146,109.146,0,0,1,11.836-17.52,107.529,107.529,0,0,1,15.014-14.905.653.653,0,0,1,.143-.088.691.691,0,0,1,.953.509Z"
        transform="translate(-466.247 -170.032)"
        fill="#fff"
      />
      <path
        id="パス_3294"
        data-name="パス 3294"
        d="M401.7,294.2H272.482a6.406,6.406,0,0,0-3.174.838,6.281,6.281,0,0,0-.668.437,6.432,6.432,0,0,0-2.6,5.169v67.15a6.449,6.449,0,0,0,6.444,6.444H401.7a6.45,6.45,0,0,0,6.444-6.444v-67.15A6.45,6.45,0,0,0,401.7,294.2Zm5.765,73.594a5.774,5.774,0,0,1-5.765,5.765H272.482a5.774,5.774,0,0,1-5.765-5.765v-67.15a5.8,5.8,0,0,1,4-5.487c.048-.014.092-.031.139-.044a5.765,5.765,0,0,1,1.631-.234H401.7a5.774,5.774,0,0,1,5.765,5.765Z"
        transform="translate(-266.039 -250.942)"
        fill="#3f3d56"
      />
      <path
        id="パス_3295"
        data-name="パス 3295"
        d="M792.183,494.6a3.643,3.643,0,0,0,.666-5.547l2.025-24.151-5.8.638-1.589,23.505a3.663,3.663,0,0,0,4.7,5.554Z"
        transform="translate(-610.416 -363.925)"
        fill="#ffb8b8"
      />
      <path
        id="パス_3296"
        data-name="パス 3296"
        d="M464.381,525.192h-4.158l-1.978-16.037h6.136Z"
        transform="translate(-303.206 -337.182)"
        fill="#ffb8b8"
      />
      <path
        id="パス_3297"
        data-name="パス 3297"
        d="M445.482,552.939H453.5v5.049H440.433A5.049,5.049,0,0,1,445.482,552.939Z"
        transform="translate(-291.433 -366.118)"
        fill="#2f2e41"
      />
      <path
        id="パス_3298"
        data-name="パス 3298"
        d="M551.381,525.192h-4.158l-1.978-16.037h6.136Z"
        transform="translate(-360.857 -337.182)"
        fill="#ffb8b8"
      />
      <path
        id="パス_3299"
        data-name="パス 3299"
        d="M532.482,552.939H540.5v5.049H527.433A5.049,5.049,0,0,1,532.482,552.939Z"
        transform="translate(-349 -366.118)"
        fill="#2f2e41"
      />
      <path
        id="パス_3300"
        data-name="パス 3300"
        d="M727.809,558.7c-.045,0-.09,0-.136-.006l-5.885-.471a1.7,1.7,0,0,1-1.539-1.961l8.922-55.185.6-7.784a1.686,1.686,0,0,1,1.328-1.526l8.974-1.963a1.685,1.685,0,0,1,1.762.7l2.188,3.2a37.44,37.44,0,0,0,2.8,3.564,19.151,19.151,0,0,1,4.429,12.119,42.939,42.939,0,0,0,.656,6.292l7.225,38.92a1.7,1.7,0,0,1-1.505,1.955l-5.578.423a1.689,1.689,0,0,1-1.8-1.248l-9.9-36.8a.339.339,0,0,0-.655,0l-10.249,38.51a1.7,1.7,0,0,1-1.638,1.26Z"
        transform="translate(-566.721 -380.622)"
        fill="#2f2e41"
      />
      <circle
        id="楕円形_59"
        data-name="楕円形 59"
        cx="8.33"
        cy="8.33"
        r="8.33"
        transform="translate(168.511 67.949)"
        fill="#ffb8b8"
      />
      <path
        id="パス_3301"
        data-name="パス 3301"
        d="M746.609,451.908l-.172-11.9c-.634-7.608,2.735-11.6,5.673-13.612a6.755,6.755,0,0,1,5.224-1l6.555,1.417a6.909,6.909,0,0,1,4.427,3.153,6.451,6.451,0,0,1,.737,5.09,6.985,6.985,0,0,1-2.849,3.9,15.231,15.231,0,0,0-6.033,10.723l-.007.138Z"
        transform="translate(-583.883 -337.65)"
        fill="#95ebc2"
      />
      <path
        id="パス_3302"
        data-name="パス 3302"
        d="M793.379,446.723h-5.765a1.528,1.528,0,0,1-1.526-1.526v-10a4.409,4.409,0,0,1,8.818,0v10A1.528,1.528,0,0,1,793.379,446.723Z"
        transform="translate(-610.144 -341.294)"
        fill="#95ebc2"
      />
      <path
        id="パス_3303"
        data-name="パス 3303"
        d="M680.549,466.467a3.743,3.743,0,0,1-5.595.162c-3.285-3.445,2.085-8.619,5.383-5.166h0a3.615,3.615,0,0,1,.323.38l16.628-.413,1.985-3.63,6.1,2.368c-1.171,1.816-2.516,8.943-5.578,8.6C699.392,468.774,680.96,466.5,680.549,466.467Z"
        transform="translate(-535.97 -359.174)"
        fill="#ffb8b8"
      />
      <path
        id="パス_3304"
        data-name="パス 3304"
        d="M748.766,445.228l-4.648-3.411a1.528,1.528,0,0,1-.327-2.133l5.919-8.066a4.409,4.409,0,0,1,7.109,5.217L750.9,444.9A1.528,1.528,0,0,1,748.766,445.228Z"
        transform="translate(-581.972 -340.654)"
        fill="#95ebc2"
      />
      <path
        id="パス_3305"
        data-name="パス 3305"
        d="M770.673,370.764a3.09,3.09,0,0,0-.529-3.445c-1.567-1.58-4.015-.526-6.133-.681-3.528-.258-5.93-4.464-4.877-7.841s4.8-5.472,8.326-5.25a12.483,12.483,0,0,1,8.853,5.231c1.456-2.344,5.034-2.617,7.343-1.106s3.5,4.272,4,6.987.413,5.5.829,8.233c1.008,6.612,5.275,12.839,11.451,15.409s14.077.918,18.117-4.412A29.427,29.427,0,0,1,799.668,414.8a18.656,18.656,0,0,1-10.564,1.292c-5.687-1.188-10.111-6.052-12.039-11.533s-1.7-11.5-.761-17.229c.577-3.532,1.215-7.715-1.361-10.2a6.188,6.188,0,0,0-2.488-1.254,3.324,3.324,0,0,1-1.9-4.892Q770.623,370.876,770.673,370.764Z"
        transform="translate(-592.267 -290.229)"
        fill="#2f2e41"
      />
      <path
        id="パス_3306"
        data-name="パス 3306"
        d="M730.482,732.8H653.157a.339.339,0,1,1,0-.678h77.325a.339.339,0,0,1,0,.678Z"
        transform="translate(-522.172 -540.789)"
        fill="#3f3d56"
      />
      <path
        id="パス_3307"
        data-name="パス 3307"
        d="M340.373,337.733a3.048,3.048,0,0,1-1.471-.379L271.4,300.2a.339.339,0,0,1,.327-.594l67.5,37.154a2.368,2.368,0,0,0,2.252.02l68.615-36.2a.339.339,0,1,1,.316.6l-68.615,36.2A3.049,3.049,0,0,1,340.373,337.733Z"
        transform="translate(-269.464 -254.424)"
        fill="#3f3d56"
      />
      <path
        id="パス_3308"
        data-name="パス 3308"
        d="M305.814,469.621h-9.5a2.713,2.713,0,1,1,0-5.426h9.5a2.713,2.713,0,0,1,0,5.426Z"
        transform="translate(-284.256 -363.398)"
        fill="#3f3d56"
      />
      <path
        id="パス_3309"
        data-name="パス 3309"
        d="M317.006,496.621H296.318a2.713,2.713,0,1,1,0-5.426h20.688a2.713,2.713,0,0,1,0,5.426Z"
        transform="translate(-284.256 -381.276)"
        fill="#3f3d56"
      />
      <circle
        id="楕円形_60"
        data-name="楕円形 60"
        cx="10.853"
        cy="10.853"
        r="10.853"
        transform="translate(59.875 72.391)"
        fill="#95ebc2"
      />
    </g>
  </svg>
);

export default SignupAction;