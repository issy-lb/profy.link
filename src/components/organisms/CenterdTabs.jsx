// Module     : ブランドページのタブ部分
// Author     : okabe
// LastUpdate : 2021/05/16
// Since      : 2021/05/16

import React from "react";
import styled from "styled-components";
import "../../styles/color.css";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

// タブ内に表示するイラスト
const Contents = {
  tab: [
    {
      id: 0
    },
    {
      id: 1,
      image:
        "https://lh3.googleusercontent.com/fife/ABSRlIrNzMAw2p4dg_u6y7QDpncI973gtGRAeYipJJPRURKDAurh5nZCTbvetBbNGAcyprnVHZVhYagONc1bq_UT970x3N6tgcGoYP0BknbinhnYGqg1fbM-jys1KYxvukZJWX1wbYrF3O_jaGNG7-kxj556xnskVrj51gfZhCg6BQq36zIc7GL83c-knBzi2Gk8O6VAr_2gx8K58xqJHeCGDg8t9OBO1nshtZyv54woTMqeh7-p7YuCGQKJD70uP-Uu03pyujGXLSmTAs6wCjkwTsqfaNyytK6whFquZQj4y7MChLEBLytWBnYx1ccyxLhbHFF-Juz9rAXdfUUAE9DfQcdLiGm6zK3iDwiM738-juf3KvRvWnPthrYONzPxwQ0dSMfflhgJEiJOXG2W1qURkdCjJOB21Kz2U3jKYuO7BsQEL-MAvP1KYqhYNYXgQ7400vCfOyNrqfLtr-xFPZni54uieWPgfEqy-yp8HejUTpbM58ND7MABfFq8aRuQUkEYc9LUONcUKqHxPYTRsdYgmTbk0QcQBN3lzmuHtKOfFIfy-e5tTVWvG0jU8xJQjvlQCt2gdMSNJ9C6klvMGKJdyGl6nABLyaKhlxxOwmrInsGRgF0vDW8dmps9tF6s1Ka2OdfLSHNiJ9Z_X1_K0tY6GUcsmIskC6snxlz7ulIgMA22wDIFaO3C67ePqkMnMVrGR8qob4LBH5rolBCjTtEWOPe2gA=w2880-h1354-ft",
      alt: "Tab Image1",
      message:
        "SNS、WEBページ、商品紹介のリンクなど、利用中のサービスを1つのリンクにまとめよう。"
    },
    {
      id: 2,
      image:
        "https://lh3.googleusercontent.com/fife/ABSRlIq_tT1xhk5Qyq5Po56qBUAxwjqGbpyipTixmVf79zi7p1Zky7g5ksem6fLmZMKoi52CLqaHYxi-ANAalD48W74RoAhvrisHaGdAyevhHRBTjkQp_19E03ZSd8BQy4MEdH7eFinAJtgg7cDICAas0rZSVtJ8h7PaVFKJYs1UVypFCNELOMT9UIkxvdz1NSdY8GTKLl_-r3zLNLRhM_mPirZWjl-6nvLcHl6t24oepKBo5bE_hFGClui-TMk6D4R90uPK44Gl7M2L-viNGED1noa451ATuPqWy7GQdykziNpom-A5oZypJagNYo1A4JuE4tErV63Ms2fvCxqq5Dbz9EMcR6VeMuNK1Sof8OEVc6vKTGwWHiMReeQe2-by46pJ_Y7mFLmzdcgEZVit53Cgd7cRqV_-0mVQEc2Ip0X1olFldGs1auQnhkGeGLvNPrZvvPkn81zFasy48WYqHKRfiF73jA53sURESMEeVub4qr0G4TVImLz4Bdqu2yq-D3Un0ieIcST6yvdvqT9dqFKu_SY3HP5Kf8a-ryEpNWkdp2iva1DmdAj7nzUQqXB10UDKFvIZ0P-nbcnJaXkCyroij9855pk1q41WdzbMFRXGI-QCwDctfT8-DClDm_nWahBNOxdU_LVynsEHXMWYWBPsistNk3pj4YjRm39VJ9sq0tyRMJHdNGwXyPuwKpyckU1wzdnHcGkK9hwWBZqKfNeN0Mnc0w=w3000-h6495-ft",
      alt: "Tab Image2",
      message: "豊富なパーツを選択することでページのカスタマイズができます。"
    },
    {
      id: 3,
      image:
        "https://lh3.googleusercontent.com/fife/ABSRlIqR1ug6BA58m0fkz4J_yjrQ9PgF3a5E8ZQ2KaYbI631Ejxc85_EKRQ4by10L3j4fgU0b9-8WwvFgKQPdBEK81fVsDY_LtEZkI6ujMCcoOxrJ-ctdHDXKDY7qyTv0S2cEJuz5PrXap5a6Bf8zn6e5gRmL2BfzK4-Mjydf7U8-DZQhwaInIIwV4LdIAL19VrZTFbyPt8s6AaWCb40eJurA1c-l7MAghJKWnNLWUvQYXEnrbLdT9UOqUn16pCECVlDujM7QObt2sNVOS0Jo9Tn49hzLL-ZIy7JYlv05BhV1VhUleqtQTIYzkv-fKiFygrjKDG_7MqcDTIxPC6fBX87SVf4kp8Ex4Ar0XCkyEV_3D_zJPq-JXXXopmc5ffPoZKK3q3PxQKC5qHJ-21PMJzlGIwftEZW6ABUwakV6QGipn3xHL1Ntt87_fQ5v0c8QT7UUsb9ufeazIsK538qFv5MKX96XVLBCiNlNea7V769GwZtlAbrRaM69IaFkHbPJuT7_ZGyBT2sF6Ze2y6YTr8O_IHAlfSTR5MAthMQdPbw70CWzwVEpelcyZlu-bnobsJrfJbuORnBIDzWaV57CqeVmon1ohZxl5ztntczCPWOzV_oD9NZIn-8INARYR-E05unuoIrul-jEFXUnN_WrqXYCqxZ_puePMmNwGGvXnd5TWOMeGEA_foiSUIK8EWbq3wEUv-0889NQVhQQrcptbl8mzv3XA=w3000-h6495-ft",
      alt: "Tab Image3",
      message:
        "作成したリンクはどこにでも利用できます。InstagramやTwitterのプロフィール、YouTubeの概要欄に貼ってみよう。"
    }
  ]
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper
  }
}));

export default function (CenterdTabs) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <SBody>
        <AppBar position="static" color="default">
          {/* タブのタイトルを表示 */}
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="サンプル1" {...a11yProps(0)} />
            <Tab label="サンプル2" {...a11yProps(1)} />
            <Tab label="サンプル3" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        {/* タブ内のコンテンツを表示（"Contents"JSONからデータ取得） */}
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <SContainer>
              <img src={Contents.tab[1].image} alt={Contents.tab[1].alt} />
              <p>{Contents.tab[1].message} </p>
            </SContainer>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <SContainer>
              <img src={Contents.tab[2].image} alt={Contents.tab[2].alt} />
              <p>{Contents.tab[2].message}</p>
            </SContainer>
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <SContainer>
              <img src={Contents.tab[3].image} alt={Contents.tab[3].alt} />
              <p>{Contents.tab[3].message}</p>
            </SContainer>
          </TabPanel>
        </SwipeableViews>
      </SBody>
    </div>
  );
}

const SBody = styled.div`
  color: var(--main-secondry);
`;

const SContainer = styled.div`
  text-align: center;
`;
