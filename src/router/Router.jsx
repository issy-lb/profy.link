import { Route, Switch, useLocation, Redirect } from "react-router-dom";
import SlideRoutes from "react-slide-routes";
import AddParts from "../components/pages/AddParts";
import Component from "../components/pages/Component";
import Edit from "../components/pages/Edit";
import EditBannerLink from "../components/pages/EditBannerLink";
import EditButtonLink from "../components/pages/EditButtonLink";
import EditButtonLinkDetail from "../components/pages/EditButtonLinkDetail";
import EditGalleryView from "../components/pages/EditGalleryView";
import EditIcon from "../components/pages/EditIcon";
import EditMovieView from "../components/pages/EditMovieView";
import EditTextView from "../components/pages/EditTextView";
import Home from "../components/pages/Home";
import SampleEdit from "../components/pages/SampleEdit";
import Setting from "../components/pages/Setting";
import SettingBg from "../components/pages/SettingBg";
import SettingBgDetail from "../components/pages/SettingBgDetail";
import SettingFont from "../components/pages/SettingFont";
import SettingLink from "../components/pages/SettingLink";
import { PreviewTest } from "../Test/PreviewTest";
import Login from "../components/pages/user/Login";
import Signup from "../components/pages/user/Signup";
import SignupMailSend from "../components/pages/user/SignupMailSend";
import SignupAction from "../components/pages/user/SignupAction";
import EditTopView from "../components/pages/EditTopView";
import CreateLink from "../components/pages/CreatLink";
import { Notice } from "../components/pages/Notice";
import Contact from "../components/pages/Contact";
import SignupBeta from "../components/pages/user/SignupBeta";
import BrandPage from "../components/pages/BrandPage";
import Terms from "../components/pages/regal/Terms";
import CenterdTabs from "../components/organisms/CenterdTabs";
import { Test } from "../components/pages/Test";
import EditCommentLink from "../components/pages/EditCommentLink";

export const Router = () => {
  const location = useLocation();
  return (
    <>
      <Switch>
        <Route path="/top" component={BrandPage} />
        <Route path="/tabs" component={CenterdTabs} />
        <Route path="/component" component={Component} />
        <Route path="/test" component={Test} exact />
        <Route path="/preview" component={PreviewTest} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/signup-mail-send" component={SignupMailSend} />
        <Route path="/signup-action" component={SignupAction} />
        <Route path="/signup-beta" component={SignupBeta} />
      </Switch>
      <SlideRoutes location={location} duration={400}>
        <Route path="/notice" exact component={Notice} />
        <Route path="/home" exact component={Home} />
        <Route path="/setting/contact" exact component={Contact} />
        <Route path="/setting/terms" exact component={Terms} />
        <Route path="/create-link" exact component={CreateLink} />
        <Route path="/edit" exact component={Edit} />
        <Route path="/edit/top-view" exact component={EditTopView} />
        <Route path="/edit/setting-link" exact component={SettingLink} />
        <Route path="/edit/setting-bg" exact component={SettingBg} />
        <Route path="/edit/setting-bg/:id" exact component={SettingBgDetail} />
        <Route path="/edit/setting-font" exact component={SettingFont} />
        <Route path="/edit/add-parts/:slide" exact component={AddParts} />
        <Route
          path="/edit/movie-view/:slide/:section"
          exact
          component={EditMovieView}
        />
        <Route
          path="/edit/button-link/:slide/:section"
          exact
          component={EditButtonLink}
        />
        <Route
          // path="/edit/button-link/:slide/:section"
          path="/edit/comment-link/:slide/:section"
          exact
          component={EditCommentLink}
        />
        <Route
          path="/edit/gallery-view/:slide/:section"
          exact
          component={EditGalleryView}
        />
        <Route
          path="/edit/banner-link/:slide/:section"
          exact
          component={EditBannerLink}
        />
        <Route
          path="/edit/text-view/:slide/:section"
          exact
          component={EditTextView}
        />
        <Route
          path="/edit/button-link/detail"
          exact
          component={EditButtonLinkDetail}
        />
        <Route path="/edit/icon" exact component={EditIcon} />
        <Route path="/setting" exact component={Setting} />
      </SlideRoutes>
    </>
  );
};
