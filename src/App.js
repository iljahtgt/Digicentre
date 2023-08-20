import React from "react";
// import logo from './logo.svg';
import './App.css';
import Question1 from './question1';
import Question2 from './question2';
import Home from './home';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <Router>

      <div className="App">
        <h1>Digicentre</h1>
          <div className='gl'>
            {/* <div className="row col-md-12">
              <Link to="/">Home</Link>
            </div> */}
              <div className="col-md-12 qc">
                <div className="col-md-6 qu1">
                  <Link to="/question1">Question1 圖表</Link>
                  <div className="des">只需呈現圖表即可</div>
                  <img src="image/chart.png" className= 'img1' width="300" heigh="300" alt="只需呈現圖表"></img>
                </div>
                <div className="col-md-6 qu2">
                  <Link to="/question2">Question2 3D街景圖</Link>
                  <div className="des">使用以下地圖當底在上面放幾個大樓，放置位置、顏色和形狀沒有限制，只要可以呈現出來即可</div>
                  <img src="image/map.png" className= 'img2' alt="台北地圖"></img>
                </div>
              </div>
          </div>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/question1" element={<Question1 />} />
        <Route path="/question2" element={<Question2 />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
