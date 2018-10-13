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
    <Route path="/profile" component={modules.UserProfile} />
  </div>
);

export default RouterMap;
