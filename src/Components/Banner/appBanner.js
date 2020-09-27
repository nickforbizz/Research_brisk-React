import React, { useState, useEffect } from 'react';
import axios from "axios";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import AuthService from '../../HOC/helpers/authservice';
import { authHeader } from '../../HOC/helpers/authheader';

// components
import AppPlaceOrder from '../Academic/Orders/placeOrder';


// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


export default function AppBanner() {
  // variables 
  const headers = authHeader();
  const fetch_recent_blogs = AuthService.API_URL + 'fetch_recent_blog';

  // states
  const [show, setShow] = useState(false);
  const [recent_blogs, setRecent_blogs] = useState([]);


  let placeOrder = () => {
    setShow(true)
  }

  // fetch order formats data 
  useEffect(() => {
    // recent_blogs
    axios.get(fetch_recent_blogs, {
      headers: headers
    }).then(res => {
      setRecent_blogs(res.data.data)
    });

  }, []);

  // renderIndicators
  const renderIndicators = () => {
    if (recent_blogs.length < 0) {
      return (
        < >
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </>
      );
    } else {
      return recent_blogs.map((item, i) => {
        if (i === 0) {
          return (<li data-target="#myCarousel" data-slide-to="0" className="active"></li>)
        } else {
          return (<li data-target="#myCarousel" data-slide-to={i} key={i}></li>)
        }
      })
    }
  }

  // renderImages
  const renderImages = () => {
    if (recent_blogs.length < 0) {
      return (
        < >
          <SwiperSlide>
            <img
              src="images/1acc2d6cb1ad0e4ccdbd5fcfded96fc0.jpg"
              height="294px"
              width="100%"
              alt="New York"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="images/1acc2d6cb1ad0e4ccdbd5fcfded96fc0.jpg"
              height="294px"
              width="100%"
              alt="New York"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="images/1acc2d6cb1ad0e4ccdbd5fcfded96fc0.jpg"
              height="294px"
              width="100%"
              alt="New York"
            />
          </SwiperSlide>

        </>
      );
    } else {
      return recent_blogs.map((item, i) => (
        <SwiperSlide key={i}>
          <h6 className="text-center ">{item.title}</h6>
          <img
            src={`${AuthService.IMG_URL}storage/${item.media_link.replace('public/', '')}`}
            height="100%"
            width="100%"
            alt={`${item.title}`}
          />
        </SwiperSlide>

      ))
    }
  }

  if (recent_blogs.length < 1) {
    return (
      <div className="">
        <h4>Loading ..</h4>
      </div>)
  } else {
    return (
      <>
        <AppPlaceOrder isOpen={show} close={() => setShow(false)} />
        <div className="jumbotron boxHeader">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <h3>Blogger and Academic Writer</h3>
                <p>
                  React Mobile navbar is a horizontal navigation component which
                  apart from traditional, text links, might embed also icons.
                  Basic exampl
                </p>
                <button className="btn btn-info" id="placeorder_btn" onClick={() => placeOrder()}>
                  Place Order
                </button>
              </div>

              <div className="col-md-4">
                <div className="pt-2">





                  <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    autoPlay
                    pagination={{ clickable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                  >
                    {renderImages()}

                  </Swiper>




                </div>
              </div>
            </div>
            {/* .row */}
          </div>
        </div>
        {/* .jumbotron */}
      </>
    );

  }
}
