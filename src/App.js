// import logo from './logo.svg';
// import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"; //redundant because of 'rel="Stylesheet"' link in index.html
import Appbar from "./components/Appbar.js";
import TabsContainer from "./components/tabComponents/TabsContainer.js";
// import ArrayTabsContainer from "./components/tabComponents/ArrayTabsContainer.js";

function App() {
  return (
    <div>
      <Appbar />
      <TabsContainer />
    </div>
  );
}

export default App;
