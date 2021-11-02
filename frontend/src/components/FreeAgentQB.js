import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const FreeAgentQB = ({ qb, loading }) =>
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
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {qb.map((freeAgent) => (
          <SwiperSlide key={freeAgent.id} className='slide'>
            <div className='slide-content'>
              <h5 style={{ padding: '.25rem 0' }}>
                {freeAgent.player.fullName}
              </h5>
              <ul>
                <li>
                  <strong>{freeAgent.player.proTeam}</strong>
                </li>

                <li>Passing Yards: {freeAgent.rawStats.passingYards}</li>
                <li>Touchdowns: {freeAgent.rawStats.passingTouchdowns}</li>
                <li>
                  Interceptions: {freeAgent.rawStats.passingInterceptions}
                </li>
                <li>Rushing Yards: {freeAgent.rawStats.rushingYards}</li>

                <li>% Owned: {freeAgent.player.percentOwned.toFixed(2)}</li>
              </ul>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );

export default FreeAgentQB;
