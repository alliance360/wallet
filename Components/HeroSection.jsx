import React from "react";

const HeroSection = () => {
  return (
    <div class="intro-area intro-area-2">
      <div class="bg-wrapper">
        <img src="img/background/bg2.jpg" alt="" />
      </div>
      <div class="intro-content">
        <div class="slider-content">
          <div class="container">
            <div class="row d-flex flex-wrap align-items-center">
              <div class="col-xl-6 col-lg-6 col-md-6">
                <div class="slide-all-text">
                  <div class="layer-2 wow fadeInUp" data-wow-delay="0.3s">
                    <h1>
                      <span class="title-2">Votre wallet</span><br />
                      <span class="color-text-bold">Alliance360</span><br />
                      <span class="title-1">Une économie participative</span>
                    </h1>
                  </div>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6">
                <div class="slide-images wow fadeInUp" data-wow-delay="0.3s">
                  <img src="img/slider/s1.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
