<div
                    id="myCarousel"
                    className="carousel slide bannerCarousel"
                    data-ride="carousel"
                  >
                    {/* Indicators */}
                    <ol className="carousel-indicators">
                      {renderIndicators()}
                    </ol>
  
                    {/* Wrapper for slides */}
                    <div className="carousel-inner">
                      {renderImages()}
                    </div>
  
                    {/* Left and right controls */}
                    <a
                      className="left carousel-control"
                      href="#myCarousel"
                      data-slide="prev"
                    >
                      <span className="glyphicon glyphicon-chevron-left"></span>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a
                      className="right carousel-control"
                      href="#myCarousel"
                      data-slide="next"
                    >
                      <span className="glyphicon glyphicon-chevron-right"></span>
                      <span className="sr-only">Next</span>
                    </a>
                  </div>