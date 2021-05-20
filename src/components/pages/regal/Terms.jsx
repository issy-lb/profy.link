// Module     : 利用規約ページ
// Author     : okabe
// LastUpdate : 2021/05/06
// Since      : 2021/05/05
//Note        : https://kiyaku.jp/hinagata/gp.html引用

import React from "react";
import styled from "styled-components";
import { Brank } from "../../atoms/layout/Brank";
import { BrandTemp } from "../../templates/BrandTemp";
import { TitlePrimary } from "../../atoms/Text/TitlePrimary";
import { TitleSecondery } from "../../atoms/Text/TitleSecondery";
import { HeaderBack } from "../../atoms/layout/HeaderBack";

const Text = () => {
  return (
    <>
      <div>
        この利用規約（以下，「本規約」といいます。）は，当社が提供するサービス（以下，「本サービス」といいます。）の利用条件を定めるものです。本サービスを利用・閲覧する皆さまには，本規約に従って，本サービスをご利用いただきます。
      </div>
      <Brank height={"0px"} />
      <SArticle>第1条（適用）</SArticle>
      <ul>
        <li>
          本規約は、本サービスの利用に関する当社と登録ユーザー、カスタマー（第2条に定義）との間の権利義務関係を定めることを目的とし、登録ユーザーと当社の間の本サービスの利用に関わる一切の関係に適用されます。
        </li>
      </ul>
      <SArticle>第2条（定義）</SArticle>
      <ul>
        <li>
          本規約において使用する以下の用語は各々以下に定める意味を有するものとします。
          <ul>
            <li>
              「ユーザー」とは、第3条に基づき本サービスのユーザーとしての登録をした個人又は法人を意味します。
            </li>
            <li>
              「カスタマー」とは、第3条に基づき本サービスのユーザーページを閲覧する個人又は法人を意味します。
            </li>
            <li>
              「当社ウェブサイト」とは、そのドメインが「Profy.link」である当社が運営するウェブサイト(理由の如何を問わず当社のウェブサイトのドメイン又は内容が変更された場合は、当該変更後のウェブサイトを含みます。)を意味します。
            </li>
            <li>
              「本サービス」とは、当社が提供するProfy.linkという名称のWebサービス(理由の如何を問わずサービスの名称又は内容が変更された場合は、当該変更後のサービスを含みます。)を意味します。
            </li>
          </ul>
        </li>
      </ul>
      <SArticle>第3条（登録）</SArticle>
      <ul>
        <li>
          本サービスのユーザーとしての利用を希望する者は、本規約を遵守することに同意し、かつ当社の定める一定の情報(以下「登録情報」といいます。)を当社の定める方法で当社に提供することにより、当社に対し、本サービスの利用の登録を申請することができます。未成年である場合は、登録する前に親権者の包括的な同意を得ている必要があります。
        </li>
        <li>
          またユーザーのリンクページを閲覧する者をカスタマーとし、カスタマーは第11条に基づき、当社の定める一定の情報を当社の定める方法で当社に提供することとします。
        </li>
        <li>
          当社は、利用登録の申請者に以下の事由があると判断した場合、利用登録を拒否することがあり、その理由については一切の開示義務を負わないものとします。
          <ol>
            <li>本規約に違反するおそれがあると当社が判断した場合</li>
            <li>
              当社に提供された登録情報の全部又は一部につき虚偽、誤記又は記載漏れがあった場合{" "}
            </li>
            <li>過去に本サービスの利用の登録を取り消された者である場合</li>
            <li>その他、当社が登録を適当でないと合理的に判断した場合</li>
          </ol>
        </li>
      </ul>
      <SArticle>第4条（本サービスの機能）</SArticle>
      <ul>
        <li>
          本サービスには、主に以下の機能が含まれるものとします。
          <ol>
            <li>ユーザーのリンクページ作成、公開機能</li>
            <li>サービス購入の決済機能</li>
          </ol>
        </li>
      </ul>
      <SArticle>第5条（アカウント情報の管理）</SArticle>
      <ul>
        <li>
          ユーザーは、自己の責任において、本サービスにかかるユーザーID及びパスワード（以下「アカウント情報」といいます。）を管理及び保管するものとし、これを第三者に利用させたり、貸与、譲渡、名義変更、売買等をしてはならないものとします。
        </li>
        <li>
          アカウント情報の管理不十分、使用上の過誤、第三者の使用等による損害の責任はユーザーが負うものとし、当社は一切の責任を負いません。
        </li>
        <li>
          ユーザーは、アカウント情報が盗まれ、又は第三者に使用されていることが判明した場合には、直ちにその旨を当社に通知するとともに、当社からの指示に従うものとします。
        </li>
      </ul>
      <SArticle>第6条（利用規約の変更）</SArticle>
      <ul>
        <li>
          当社は、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。なお、本規約の変更後、本サービスの利用を開始した場合には、当該ユーザーは変更後の規約に同意したものとみなします。
        </li>
      </ul>
      <SArticle>第7条（本サービスの停止等）</SArticle>
      <ul>
        <li>
          当社は、以下のいずれかに該当する場合には、登録ユーザーに事前に通知することなく、本サービスの利用の全部又は一部を停止又は中断することができるものとします。
          <ol>
            <li>
              本サービスに係るコンピューター・システムの点検又は保守作業を定期的又は緊急に行う場合
            </li>
            <li>コンピューター、通信回線等が事故により停止した場合</li>
            <li>
              火災、停電、天災地変などの不可抗力により本サービスの運営ができなくなった場合
            </li>
            <li>
              外部サービスに、トラブル、サービス提供の中断又は停止、本サービスとの連携の停止、仕様変更等が生じた場合
            </li>
            <li>その他、当社が停止又は中断を合理的に必要と判断した場合</li>
          </ol>
        </li>
        <li>
          当社は、当社の合理的な判断により、本サービスの提供を終了することができます。この場合、当社は登録ユーザーに事前に通知するものとします。
        </li>
        <li>
          当社は、本条に基づき当社が行った措置に基づき登録ユーザーに生じた損害について一切の責任を負いません。
        </li>
      </ul>
      <SArticle>第8条（禁止行為）</SArticle>
      <ul>
        <li>
          ユーザーは、本サービスの利用にあたり、以下の各号のいずれかに該当する行為をしてはなりません。
          <ol>
            <li>
              当社、又は他の登録ユーザー、外部事業者その他の第三者の知的財産権、肖像権、プライバシーの権利、名誉、その他の権利又は利益を侵害する行為（かかる侵害を直接又は間接に惹起する行為を含みます。）
            </li>
            <li>犯罪行為に関連する行為又は公序良俗に反する行為</li>
            <li>
              法令又は当社若しくはユーザーが所属する業界団体の内部規則に違反する行為
            </li>
            <li>
              コンピューター・ウィルスその他の有害なコンピューター・プログラムを含む情報を送信する行為
            </li>
            <li>
              当社が定める一定のデータ容量以上のデータを本サービスを通じて送信する行為
            </li>
            <li>
              当社による本サービスの運営を妨害するおそれのあると合理的に認められる行為
            </li>
            <li>その他、当社が不適切と合理的に判断する行為</li>
          </ol>
        </li>
        <li>
          登録ユーザーは、以下の各号に該当する情報を、本サービスを通じて公開してはならないものとし、以下の各号に該当し、又は該当するおそれのある活動情報が公開された場合は、当社は、当該活動情報の公開停止その他の措置を実施することができるものとします。
          本項に定める措置によりユーザーに損害が生じた場合でも、当社は、当該損害について一切の責任を負わないものとします。
          <ol>
            <li>他のユーザーその他の第三者を誹謗中傷する内容を含む情報</li>
            <li>
              他のユーザーその他の第三者の知的財産権を侵害する内容を含む情報
            </li>
            <li>
              第三者に成りすますことを企図した情報その他の当該登録ユーザーを他人と誤認させる情報
            </li>
            li
            <li>第三者の氏名、住所、電話番号その他の個人情報に該当する情報</li>
            <li>
              詐欺その他の違法行為に関連するウェブサイトのURLを掲載する行為
            </li>
            <li>本規約に違反する情報</li>
            <li>前各号に定める他、当社が不適切であると合理的に判断する情報</li>
          </ol>
        </li>
      </ul>
      <SArticle>第9条（退会）</SArticle>
      <ul>
        <li>
          ユーザーは当社の定める退会手続により、本サービスから退会できるものとします。
        </li>
      </ul>
      <SArticle>第10条（権利帰属）</SArticle>
      <ul>
        <li>
          当社ウェブサイト及び本サービスに関する所有権及び知的財産権は全て当社又は当社にライセンスを許諾している者に帰属しており、本規約に定める登録に基づく本サービスの利用許諾は、本規約において明示されているものを除き、当社ウェブサイト又は本サービスに関する当社又は当社にライセンスを許諾している者の知的財産権の譲渡又は使用許諾を意味するものではありません。
        </li>
        <li>
          ユーザーは、いかなる理由によっても当社又は当社にライセンスを許諾している者の知的財産権を侵害するおそれのある行為をしないものとします。
        </li>
        <li>
          当社ウェブサイト又は本サービスにおいて、ユーザーが投稿その他送信を行った文章、画像、動画その他のデータについては、当社において、本サービス及び関連サービスの円滑な提供、利用促進、広告・宣伝、当社システムの構築、改良、メンテナンスに必要な範囲内で、無償かつ非独占的に使用及び改変等をすることができるものとし、ユーザーはこれを許諾するものとします。
        </li>
      </ul>
      <SArticle>第11条（個人情報の取扱い）</SArticle>
      <ul>
        <li>
          当社によるユーザーの個人情報の取扱いについては、別途定める当社のプライバシーポリシーに従い適切に取り扱うものとします。
        </li>
        <li>
          当社は、ユーザーとカスタマーが当社に提供した情報、データ等を、個人を特定できない形での統計的な情報として、当社の裁量で、利用及び公開することができるものとし、ユーザーとカスタマーはこれに異議を述べないものとします。
        </li>
      </ul>
    </>
  );
};

const Terms = () => {
  return (
    <>
      <HeaderBack link={"/setting"} title={"利用規約"} />
      <SContainer>
        <BrandTemp>
          <STitle>利用規約</STitle>
          <SSubTitle>
            <Text />
          </SSubTitle>
        </BrandTemp>
      </SContainer>
    </>
  );
};

const STitle = styled(TitlePrimary)`
  margin-top: 40px;
  margin-bottom: 16px;
`;
const SSubTitle = styled(TitleSecondery)`
  margin-bottom: 24px;
`;

const STextLink = styled.p`
  display: inline;
  text-decoration: none;
  color: var(--action-success);
`;

const SArticle = styled.h3`
  margin: 40px 0 0 0;
`;
const SContainer = styled.div`
  position: relative;
  width: 80vw;
  margin: auto;
`;

export default Terms;
