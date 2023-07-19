import "./App.scss";
import curve from "./assets/Group 41914.png";
import Header from "./Component/Header/Header";
import Carousel from "./Component/Carousel/Carousel";
import Certificate from "./Component/Certificate/Certificate";
import Explain from "./Component/Explain/Explain";
import Rates from "./Component/Rates/Rates";
import Motivate from "./Component/Motivate/Motivate";
function App() {
  return (
    <div className=" overflow-hidden ">
      <div className="container position-relative">
        {/* <div className="imagecurve">
          <img src={curve} alt="curve image " />
        </div> */}

        <Header />
        <Carousel />
      </div>

      <div>
        <Explain />
      </div>
      <div>
        <Rates />
      </div>
      <div>
        <Motivate />
      </div>
    </div>
  );
}

export default App;
