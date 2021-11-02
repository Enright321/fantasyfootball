import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const WatchList = ({ freeAgents, loading }) =>
  loading ? (
    <h2>Loading...</h2>
  ) : (
    <div className='swiper'>
      <Swiper
        breakpoints={{
          100: {
            centeredSlides: true,
            slidesPerView: 1,
          },
          450: {
            centeredSlides: true,
            slidesPerView: 2,
          },
          780: {
            centeredSlides: true,
            slidesPerView: 3,
          },
          1000: {
            centeredSlides: true,
            slidesPerView: 4,
          },
        }}
        spaceBetween={20}
        slidesPerView={3}
        centeredSlidesBounds
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {freeAgents.map((freeAgent) => (
          <SwiperSlide className='slide' key={freeAgent.player.id}>
            <div className='slide-content'>
              <h5 style={{ padding: '.25rem 0' }}>
                {freeAgent.player.fullName}
              </h5>
              <ul>
                <li>
                  <strong>{freeAgent.player.proTeam}</strong>
                </li>

                <li>Position: {freeAgent.player.defaultPosition}</li>

                <li>% Change: {freeAgent.player.percentChange.toFixed(2)}</li>
              </ul>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );

export default WatchList;
