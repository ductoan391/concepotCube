import React, { Suspense } from "react";
import Router from "./Routers/Router";

import './App.scss';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Suspense fallback="...">
          <Router />
        </Suspense>
      </React.Fragment>
    </div>
  );
}

export default App;
