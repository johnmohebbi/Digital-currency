import React from "react";
//redux
import { Provider } from "react-redux";
import store from "./redux/store";
//components
import Landing from "./component/Landing";
const App = () => {
  return (
    <div className="font-RobotoM">
      <Provider store={store}>
        <Landing />
      </Provider>
    </div>
  );
};

export default App;
