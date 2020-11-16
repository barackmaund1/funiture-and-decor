import React from 'react'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css"; 
import './Banner.css'


const Banner = () => {
    return (
      <div>
        <div class="container-fluid">
          <div className="row title" style={{ marginBottom: "20px" }}>
            <div class="col-sm-12 btn btn" id='title'>
              Star Furniture Emeral
            </div>
          </div>
        </div>
        <div class="container-fluid">
          <OwlCarousel
            items={3}
            className="owl-theme"
            items={3}
            margin={8}
            autoplay={true}
          >
            <div>
              <img className="img" src={"assets/img/1.jpg"} />
            </div>

            <div>
              <img className="img" src={"assets/img/3.jpg"} />
            </div>

            <div>
              <img className="img" src={"assets/img/7.jpg"} />
            </div>

            <div>
              <img className="img" src={"assets/img/4.jpg"} />
            </div>

            <div>
              <img className="img" src={"assets/img/5.jpg"} />
            </div>

            <div>
              <img className="img" src={"assets/img/6.jpg"} />
            </div>

            <div>
              <img className="img" src={"assets/img/9.jpg"} />
            </div>
          </OwlCarousel>
        </div>
      </div>
    );
}

export default Banner
