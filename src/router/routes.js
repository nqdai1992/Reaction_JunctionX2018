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
<<<<<<< HEAD
    <Route path="/notifications" component={modules.Notifications} />
=======
    <Route path="/about" component={modules.About} />
    <Route path="/topics" component={modules.Topics} />
    <Route path="/profile" component={modules.UserProfile} />
>>>>>>> 2527872647e921d21a3564a164b128b510309428
  </div>
);

export default RouterMap;
