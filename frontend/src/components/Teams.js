import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Teams = ({ teams, loading }) =>
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
        {teams.map((team) => (
          <SwiperSlide key={team.id} className='slide'>
            <Link to={`/team/${team.id}`} className='text-center'>
              <div className='slide-content'>
                <div className='team-logo'>
                  <img src={team.logoURL} alt='person' className='team-photo' />
                </div>
                <h5 style={{ padding: '.25rem 0' }}>{team.name}</h5>
                <p>Position: {team.playoffSeed}</p>
                <ul>
                  <li>
                    Record: {team.wins} - {team.losses} - {team.ties}
                  </li>
                  <li>Total Points: {team.totalPointsScored.toFixed(2)}</li>
                  <li>
                    Points Against: {team.regularSeasonPointsAgainst.toFixed(2)}
                  </li>
                  <li>Winning Percentage: {team.winningPercentage}%</li>
                </ul>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );

export default Teams;
