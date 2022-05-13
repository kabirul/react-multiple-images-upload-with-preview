import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./style/global.css";
import "bootstrap/dist/css/bootstrap.min.css";

import UploadImages from "./components/ImagesUpload";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="container" >
	<BrowserRouter>
      <Navbar />
       <h4>React Multiple Images Upload with Preview</h4>
       <div className="content">
        <UploadImages />
      </div>
	  <Footer />
	  </BrowserRouter>
    </div>
  );
}

export default App;
