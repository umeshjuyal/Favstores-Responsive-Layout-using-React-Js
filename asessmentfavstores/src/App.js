import React from "react";
import Navbar from "./components/Navbar";
import "./index.css";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from './img/11.jpg';
import image2 from './img/12.jpg';
import image3 from './img/13.jpg';
import image4 from './img/14.jpg';

//Bootstrap import
// import "bootstrap/dist/css/bootstrap.min.css";
// import {Card,CardImg,CardBody,CardTitle,CardText,Button} from "reactstrap";

const  App=()=>{
  return (
    <>
      <Navbar />
      <div className="App">
        <AliceCarousel autoPlay autoPlayInterval="3000">
          <img src={image1} className="sliderimg" alt="" />
          <img src={image2} className="sliderimg" alt="" />
          <img src={image3} className="sliderimg" alt="" />
          <img src={image4} className="sliderimg" alt="" />
        </AliceCarousel>
      </div>
  

  {/* Bootstrap */}
  
  <div className="row">
  <div className="column">
    <div className="card ">
    <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" class="card-img-top" alt="img1"/>
    <h3>Fashion 1</h3>
      <p>Men1</p>
      <p>Men Cothing</p>
    </div>
  </div>

  <div className="column">
    <div className="card">
    <img src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFzaGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" class="card-img-top" alt="img2"/>
    <h3>Fashion 2</h3>
      <p>Men2</p>
      <p>Men Clothing</p>
    </div>
  </div>

  <div className="column">
    <div className="card">
    <img src="https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" class="card-img-top" alt="img3"/>
    <h3>Fashion 3</h3>
      <p>Men3</p>
      <p>Men Clothing</p>
    </div>
  </div>

  <div className="column">
    <div className="card">
    <img src="https://images.unsplash.com/photo-1554412933-514a83d2f3c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" class="card-img-top" alt=" img4"/>
    <h3>Fashion 4</h3>
      <p>Men4</p>
      <p>Men Clothing</p>
    </div>
  </div>
</div> 



    </>
  );
}
export default App;
