// Module     : ブランドページ
// Author     : okabe
// LastUpdate : 2021/05/16
// Since      : 2021/05/16
import styled from "styled-components";
import "../../styles/color.css";
import { TitlePrimary } from "../atoms/Text/TitlePrimary";
import { TitleSecondery } from "../atoms/Text/TitleSecondery";
import { BrandTemp } from "../templates/BrandTemp";
import { IconLinks } from "../molecules/TopView/IconLinks";
import { FreeToUse } from "../organisms/FreeToUse";
import CenterdTabs from "../organisms/CenterdTabs";

// イラストインポート
import { ShareLink } from "../atoms/Image/ShareLink";
import { HandInProfy } from "../atoms/Image/HandInProfy";
import { LinkMenu } from "../molecules/LinkMenu/LinkMenu";

//アニメーション
import * as FadeIn from "../atoms/Animation/FadeIn";

const BrandPage = () => {
  return (
    <SBody>
      <BrandTemp>
        {/* ファーストビューセクション */}
        <SHeroContainer>
          <SPageTitle>
            <FadeIn.Up>
              <SHeroImage>
                <HandInProfy />
              </SHeroImage>
            </FadeIn.Up>
            <FadeIn.Up>
              <SH1>Profy.link</SH1>
              <STitleSecondery>
                あなたの情報には価値がある
                <br />
                あなたの情報を全部届ける
              </STitleSecondery>
            </FadeIn.Up>
          </SPageTitle>
          <FreeToUse />
        </SHeroContainer>
        {/* セクション */}
        <SChangeBackgroundColor>
          <FadeIn.Up>
            <SContainer>
              <SCenter>
                <ShareLink />
              </SCenter>
              <STitle>Profy.linkとは</STitle>
              <STitleSecondery>
                Profy.linkは、あなたが発信するSNSや記事のリンクを１つにまとめることができます。
                あなたを表現するコンテンツを１か所にまとめ、ネット上の発信力をサポートします。
              </STitleSecondery>
              {/* <CenterdTab /> */}
              <CenterdTabs />
              {/* "/tabs"のコンテンツをここに入れる */}
            </SContainer>
          </FadeIn.Up>
          <FadeIn.Up>
            <FreeToUse />
          </FadeIn.Up>
          <FadeIn.Up>
            <LinkMenu linkList={linkList} />
          </FadeIn.Up>
        </SChangeBackgroundColor>
        {/* セクション */}
        <SContainer>
          <FadeIn.Up>
            <STitle>Profy.linkの作り手</STitle>
            <STitleSecondery>平日は会社員。</STitleSecondery>
          </FadeIn.Up>
          <FadeIn.Up>
            <SGallery>
              <SImage src={OurTeam.image1} />
              <SImage src={OurTeam.image2} />
              <SImage src={OurTeam.image3} />
              <SImage src={OurTeam.image4} />
            </SGallery>
          </FadeIn.Up>

          <SSpace>
            <IconLinks TopView={TopView} />
          </SSpace>
        </SContainer>
      </BrandTemp>
    </SBody>
  );
};

const SBody = styled.div`
  background-color: var(--background);
  color: var(--main-secondry);
`;

const SContainer = styled.div`
  margin: 16px;
  padding: 16px 0;
`;

const SPageTitle = styled.div`
  padding: 128px 0 144px 24px;
`;

const SCenter = styled.div`
  text-align: center;
`;

const SH1 = styled.h1`
  font-size: 32px;
  text-align: left;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
`;

const SHeroContainer = styled.div`
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22685.042%22%20height%3D%22777.89%22%20viewBox%3D%220%200%20685.042%20777.89%22%3E%20%3Cg%20id%3D%22Header%22%20transform%3D%22translate(170.22%20138.919)%22%3E%20%3Cg%20id%3D%22Background%22%3E%20%3Cpath%20id%3D%22Blob_2%22%20data-name%3D%22Blob%202%22%20d%3D%22M-2032.158-429.886a68.8%2C68.8%2C0%2C0%2C0%2C13.3%2C3.682c36.855%2C6.336%2C72.916-19.2%2C79.173-56.069a69.267%2C69.267%2C0%2C0%2C0%2C.853-7.433c1.208-20.1%2C8.186-39.521%2C21.02-55.034a53.006%2C53.006%2C0%2C0%2C0%2C11.377-24.679c5.041-28.645-14.788-56.823-43.454-61.74a53.455%2C53.455%2C0%2C0%2C0-11.672-.711%2C63.075%2C63.075%2C0%2C0%2C1-46.641-17.689%2C69.521%2C69.521%2C0%2C0%2C0-35.674-18.179c-27.149-4.957-60.565%2C8.457-75.151%2C36.313-10.507%2C20.066-26.646%2C36.71-46.915%2C46.818a75.9%2C75.9%2C0%2C0%2C0-41%2C54.9c-7.027%2C40%2C20.328%2C79.927%2C60.184%2C87.749a76.069%2C76.069%2C0%2C0%2C0%2C25.25.714C-2091.283-445.481-2060.6-440.95-2032.158-429.886Z%22%20transform%3D%22translate(1026.031%202065.591)%20rotate(56)%22%20fill%3D%22%23dfc4a4%22%2F%3E%20%3Cpath%20id%3D%22Blob_1%22%20data-name%3D%22Blob%201%22%20d%3D%22M-2032.158-429.886a68.8%2C68.8%2C0%2C0%2C0%2C13.3%2C3.682c36.855%2C6.336%2C72.916-19.2%2C79.173-56.069a69.267%2C69.267%2C0%2C0%2C0%2C.853-7.433c1.208-20.1%2C8.186-39.521%2C21.02-55.034a53.006%2C53.006%2C0%2C0%2C0%2C11.377-24.679c5.041-28.645-14.788-56.823-43.454-61.74a53.455%2C53.455%2C0%2C0%2C0-11.672-.711%2C63.075%2C63.075%2C0%2C0%2C1-46.641-17.689%2C69.521%2C69.521%2C0%2C0%2C0-35.674-18.179c-27.149-4.957-60.565%2C8.457-75.151%2C36.313-10.507%2C20.066-26.646%2C36.71-46.915%2C46.818a75.9%2C75.9%2C0%2C0%2C0-41%2C54.9c-7.027%2C40%2C20.328%2C79.927%2C60.184%2C87.749a76.069%2C76.069%2C0%2C0%2C0%2C25.25.714C-2091.283-445.481-2060.6-440.95-2032.158-429.886Z%22%20transform%3D%22matrix(-0.966%2C%200.259%2C%20-0.259%2C%20-0.966%2C%20-2120.999%2C%20148.507)%22%20fill%3D%22%2395ebc2%22%2F%3E%20%3Cpath%20id%3D%22Blob_2-2%22%20data-name%3D%22Blob%202%22%20d%3D%22M-2032.158-429.886a68.8%2C68.8%2C0%2C0%2C0%2C13.3%2C3.682c36.855%2C6.336%2C72.916-19.2%2C79.173-56.069a69.267%2C69.267%2C0%2C0%2C0%2C.853-7.433c1.208-20.1%2C8.186-39.521%2C21.02-55.034a53.006%2C53.006%2C0%2C0%2C0%2C11.377-24.679c5.041-28.645-14.788-56.823-43.454-61.74a53.455%2C53.455%2C0%2C0%2C0-11.672-.711%2C63.075%2C63.075%2C0%2C0%2C1-46.641-17.689%2C69.521%2C69.521%2C0%2C0%2C0-35.674-18.179c-27.149-4.957-60.565%2C8.457-75.151%2C36.313-10.507%2C20.066-26.646%2C36.71-46.915%2C46.818a75.9%2C75.9%2C0%2C0%2C0-41%2C54.9c-7.027%2C40%2C20.328%2C79.927%2C60.184%2C87.749a76.069%2C76.069%2C0%2C0%2C0%2C25.25.714C-2091.283-445.481-2060.6-440.95-2032.158-429.886Z%22%20transform%3D%22matrix(-0.839%2C%200.545%2C%20-0.545%2C%20-0.839%2C%20-1730.597%2C%201116.003)%22%20fill%3D%22%23dfc4a4%22%2F%3E%20%3C%2Fg%3E%20%3C%2Fg%3E%3C%2Fsvg%3E");
  background-repeat: no-repeat;
  background-position: center;
`;

const SHeroImage = styled.div`
  width: 440px;
  height: 0px;
  text-align: right;
  margin: 0 auto;
`;

const SChangeBackgroundColor = styled.div`
  background-color: var(--common);
  padding: 40px 0;
`;

const STitle = styled(TitlePrimary)`
  margin-top: 40px;
  margin-bottom: 16px;
`;

const STitleSecondery = styled(TitleSecondery)`
  margin-top: 40px;
  margin-bottom: 16px;
`;

const SGallery = styled.div`
  width: 340px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const SImage = styled.img`
  width: 160px;
  height: 160px;
  object-fit: cover;
  margin-bottom: 20px;
`;

const SSpace = styled.div`
  padding: 40px 0;
`;

const TopView = {
  snsList: [
    {
      image: "https://profy-59433.web.app/assets/sns-icon/sns/instagram.png",
      alt: "Instagram",
      url: "https://www.instagram.com/miku427"
    },
    {
      image: "https://profy-59433.web.app/assets/sns-icon/sns/twitter.png",
      alt: "Twitter",
      url: "https://twitter.com/miku427x"
    },
    {
      image: "https://profy-59433.web.app/assets/sns-icon/sns/facebook.png",
      alt: "Facebook",
      url: "https://www.facebook.com/"
    }
  ]
};

const OurTeam = {
  image1:
    "https://lh3.googleusercontent.com/fife/ABSRlIpKktE5hPs-Gk0ICCFxdy7p5r5Z4GPV7lG3o80ly9vZtfnCE5gI6X1Z7pXsofAYej8NbAOfNomaZY3f2Se2kFMocK3BrWezqvcimWLBdjdM-VR-PKaE5U7NF9TqWS-swsSoyJXgmWem-EEmD9ZLc1YYGtHjk9omPgKg7mVdIh3hyBFZ_JpMY1bNR2E6maXIxN9D-Ejo5usDxBQw_MBV7AXwUFgR9TqJF0G4aMMguV_pnnkhqV86oOvd43xrvEnid9bprvegQeXeL6ekov7nkHBz-31eaQgA1hrgYHptFLiMI8jj__1YuSiTcX7YN6Hn17abWMCqCWFQxDpinXid9B9r9_dB2Sx4CkJOXc7ggvcKxGCsw504c2Sha9YlEcfF9nvig8DRuyIZt7FvyjrxHq2fRdrGHbgFFwmaDjM-DUddP1tbR_T42PibwxxyLXkQfXZbdneY0AwBT5ohVfN2g87F7Bi1l2XbVJLkhb7mt10I6OGvmapHtqdTClkANw-tLslGRiI4xwjK7-Y7Vyr9ySH63ewX9XBVdFPq_wHZ6Ib83xuCUaRtDhO0f0GZrCyN9PyZ3EzWGNfvAZTH_dLK48MSEsB5nrs9nTQcx-fbolDr4QUcqpimQahJkL49Z_v4p9BlfOCZJK8kzAfX1ZfSU3rx-fRNAuJb8u0ftGdl4EvJkdeWtzwJGGyXyHoj10QD_kiXwwZ1ejXMZv46HcnXGJ6yNw=w3000-h6495-ft",
  image2:
    "https://lh3.googleusercontent.com/fife/ABSRlIrj5DMCz6CjGO82UraPCgVRev-4pAS-nu_RZ7r0xxLkV-XxiwtrTzl7wQCYIu5fBNKv4h05Wb7PRQkpikiRLrD4o3eNX3ajkOdu95_EM6KmLhg0YHXYQXe3QYhm9M67mn621oa19Ti5KX5Rd_nKVhcDKtW4MYRuGs4tr1cMEFvbnCbzmUnQOd5bBSpwOHpFJzyvApfFB_R-uYh6IA8zgkcfMLJhubd_Co-EbQjNo7ykWMw71VtTg63a9T5458fUwr_yr5jUYN5jeDqciVQXJ_TQ073gyalXJxXhzG4drrjQy80UMhQvocHioCkc49GL2u1GObaWLqFqhZA83NGAJsVus0tbbEo4n1lmzAU26JvTtbb0d8emTQsQoREgbul3gtWNzsYLhthrxa6UD-P9lgjDu3CSae_2TYjrhzd6_IEWoC6ygaMMkZ03zzR0blMAOAC_x-rrvockhzymDGszHCRmvRYEsRm_6UuZ-K3UfMJXfC-Nuz6ApBIEnx8HBfKk2uOzloS19lRFQ68PMr0mmHkWXETqyevRX1BpySqHsIeyzTGIAsxZ8dA3i3WrV8UVtbvzxlFm34NJTuJAGeMlHQf8Aasy0YCEXDh1IwOdesOpJkFX6kvRD_3Fjj6kDVvXlhwb5yXojdiJz4T0nkmKkaMQvjWOVaZx88Q79Ny7cT3Qfx_xmraWeh2XDBNpqokjQUJqdhNR7he-MrNhGTBZMStMlA=w2880-h1354-ft",
  image3:
    "https://lh3.googleusercontent.com/fife/ABSRlIo5n1WAOeOxiQ3w-xmXYX3rUmXZFqa_ViWwwDbY5opX9CnyGGtQRy8nVN9FVNuS8wjgnIsA2WYL95GepPaI5gmOB7E_gHU3W_NOtdszBJZJFcVS1hR6hz2g65BBbkvSdE46l8tqVn23f7u9BkdJ-FOYGiW3CFr67ysQ_9byNYZHDvuKM68mNN-KBowTsweZ8oxyBWN_ddNAnt7j1zuR7meP4KUuYGYSJvwB8QA_vPV5RtPR7MbTezmZbCO0QBfUb9c1oNx1w0SC24g0V5n3acUdBO5-PkKQGdrKI4JQxk7rymNa1dSsAa5CThNbHqZu99oiiORBWA0xWJ-vYLlDVFAYi1DOHo15pm_Pkh0Am_Q3gmMGFk2MwBcril5rK71aTa0pGUQQ2nUYLMurcJ2yL4BWXbXZNymxtev9EoVmqs2jLEPK67hyLEyzDH6AfQYRXIszV1WDpVvwBRBCzVL4gYob9rqSv4ubkcyMxNhvVRo1BtemRHhIZJpiEBQ1ieLo7CrSg_8f-5qoTW9K3SdgQ9RXiKixtOgyuj5xMS92gPcb-HApuxPmNvMFMR1dwhVMRE0aytT4lrWyRdX6A0I6wXqYQaZwBb1QEop-Ax-urZgU7sGB-F7-bvgQJTdPKdWn-s2JqQoYcp4HNUwtdSxU4zLexuBNgmhR7U-6NcSkjC1oBdnq4EGe1Aa2DbONOgZ0Tcv8P575U-Fa0SwBvZaoU3LwRg=w3000-h6495-ft",
  image4:
    "https://lh3.googleusercontent.com/fife/ABSRlIp6KNwLNafEnKf5GVK_0Lv51WwmNpY2JylW1k7zuZFssUgGCUZdcHFybuCD8g2daoRgni474ULKa53OPmJ-0qwsf8w2mNr0fdIe7nLVozPxILWCGDCv7KT7Hb8v7mHHcRCZyt3EavFJIM1yr68nV0TIklcSI4wgJ9b71kKlsXoboONz6RtWP4kfo0AjPUcb_T-XJpbex_SHdtl5fs4uZW_ItTiGA3bffyjUobIbm5gB1Zt1xo4Pij49NbjAvzOuZYZNwYTACDAZHB2XBVe9jhN4zFfu03_MHfrDYBhTgAtEd66msVm6oyo0ad8qWHp-dnv-o_mTs7LtvdfRJW5lDf2I0e2SUam6RCE9QPh-9igYD3bSLiXV_yoe-DSCpCyxZZgPAOYWAKrieC2jWYrODpUrpEpc89s8yWKviUI0cFxvXjRlpBjJZK4iCmkf-6YRukgvvhqfFitdfhi_aRm8OEIgZy8G-QRXXN9Ynlyk_tCcJ_ntJov2uBixM7HToW6aNq2BLFVzVVWUM3uJ-cOfWLgKun7XHmLhYCLx6oMz2jVL1O-hf6YvMPYXGamlXryuqm60tKs2cRnWgpxPfwp1yD9rJ7oQuoSS_4LdE0m6KSW4kvSJC3746VpwpkdvT18F6D383q3zAm7FyruSpZQTmOyIj9UzzE-BqnWgpgANKFNElUr9Sgpux6rWg2SwEXujs5dOhID6n8b1jaFYMYgMDB6fig=w2880-h1354-ft"
};

const linkList = [
  {
    link: "https://note.com/profy_link",
    icon: "https://profy-59433.web.app/assets/icon/help.svg",
    title: "使い方・活用例",
    target: true
  },
  {
    link: "/setting/contact",
    icon: "https://profy-59433.web.app/assets/icon/inquiry.svg",
    title: "お問い合わせ",
    target: false
  },
  {
    link: "/setting/terms",
    icon: "https://profy-59433.web.app/assets/icon/document.svg",
    title: "利用規約",
    target: false
  },
  {
    link: "/setting/terms",
    icon: "https://profy-59433.web.app/assets/icon/document.svg",
    title: "個人情報保護方針",
    target: false
  }
];

export default BrandPage;
