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
            <div class="col-sm-12 btn btn-info">
              Star furniture Emeral
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
              <img className="img" src={"assets/img/1.jpeg"} />
            </div>

            <div>
              <img className="img" src={"assets/img/2.jpeg"} />
            </div>

            <div>
              <img className="img" src={"assets/img/4.jpeg"} />
            </div>

            <div>
              <img className="img" src={"assets/img/3.jpeg"} />
            </div>

            <div>
              <img className="img" src={"assets/img/5.jpeg"} />
            </div>

            <div>
              <img className="img" src={"assets/img/6.jpeg"} />
            </div>

            <div>
              <img className="img" src={"assets/img/download.jpeg"} />
            </div>
          </OwlCarousel>
        </div>
      </div>
    );
}

export default Banner
