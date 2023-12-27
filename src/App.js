import "./App.css";
import Categories from "./Components/Categories/Categories";
import Header from "./Components/Header/Header";
import Plans from "./Components/Plans/Plans";
import TopBanner from "./Components/TopBanner.js/TopBanner";
import VariousDevice from "./Components/VariousDevice/VariousDevice";

function App() {
  return (
    <div className="App">
      <TopBanner />
      <Categories />
      <VariousDevice />
      <Plans />
    </div>
  );
}

export default App;
