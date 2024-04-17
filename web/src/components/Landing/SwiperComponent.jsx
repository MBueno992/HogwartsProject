import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../scss/layout/SwiperStyle.scss';
import arrowLeft from '../../images/arrow-left.svg';
import arrowRigth from '../../images/arrow-right.svg';
import sombrero from '../../images/sombrero.jpeg';
import games from '../../images/games.jpeg';
import letter from '../../images/letter.jpeg';
import Articles from '../Articles';

function SwiperComponent() {
  return (
    <Swiper
      modules={[EffectCoverflow, Navigation, Pagination]}
      navigation={{
        prevEl: '.button-prev',
        nextEl: '.button-next',
      }}
      pagination={{ clickable: true }}
      speed={1000}
      slidesPerView="2"
      centeredSlides
      effect={'coverflow'}
      coverFlowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slidesShadows: true,
      }}
    >
      <SwiperSlide>
        <Articles
          photo={sombrero}
          desc="Descubre a qué casa perteneces contestando sólo 6 preguntas"
          linkText="Descubrir"
          url="/quest-intro"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Articles
          photo={games}
          desc="¿Y si te digo que puedes jugar a juegos clásicos versionados a la increíble historia de Hogwarts y sus personajes?"
          linkText="En construcción"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Articles
          photo={letter}
          desc="¿No soñaste con recibir tu carta de admisión? ¡Es el momento!"
          linkText="Quiero mi carta"
          url="/ministery"
        />
      </SwiperSlide>
      <div className="button-prev">
        <img src={arrowLeft} alt="Left" />
      </div>
      <div className="button-next">
        <img src={arrowRigth} alt="Rigth" />
      </div>
    </Swiper>
  );
}

export default SwiperComponent;
