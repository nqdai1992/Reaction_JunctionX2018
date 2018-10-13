import React from "react";
import { Route } from "react-router-dom";

const modules = {};
const pages = require.context("../pages", false, /.*\.js$/);
pages.keys().forEach(fileName => {
  let moduleName = fileName.replace(/(\.\/|\.js)/g, "");
  modules[moduleName] = pages(fileName).default;
});

const RouterMap = () => (
  <div>
    <Route exact path="/" component={modules.Home} />
    <Route path="/notifications" component={modules.Notifications} />
    <Route path="/chat" component={modules.Chat} />
    <Route path="/profile" component={modules.UserProfile} />
    <Route path="/transaction-history" component={modules.TransactionHistory} />
    <Route path="/friends" component={modules.Friends} />
    <Route path="/group-list" component={modules.GroupList} />
    <Route path="/add_activity" component={modules.AddActivityForm} />
    <Route path="/sign_in" component={modules.SignIn} />
    <Route path="/created_form_group" component={modules.AddActivityForm} />
  </div>
);

export default RouterMap;
