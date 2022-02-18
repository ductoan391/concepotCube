import React, { Suspense } from "react";
import Router from "./Routers/Router";

import './App.scss';
import SideMenu from "./Layout/SideMenu/SideMenu";

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Suspense fallback="...">
          <SideMenu />
          <Router />
        </Suspense>
      </React.Fragment>
    </div>
  );
}

export default App;
