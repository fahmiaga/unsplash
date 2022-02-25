import { BrowserRouter, Route, Switch } from "react-router-dom";
import Detail from "./components/Detail";
import Photos from "./components/Photos";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Photos} />
          <Route path="/detail/:id" component={Detail} />
        </Switch>
      </BrowserRouter>
    </>
    // <div>
    //   <Users />
    // </div>
  );
}

export default App;
