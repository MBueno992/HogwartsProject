import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import Letter from '../Letter/Letter';
import Materials from '../Letter/Materials';

function SwiperLetter({ userName, name }) {
  return (
    <Swiper
      pagination={{
        type: 'fraction',
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide> {<Letter userName={userName} name={name} />}</SwiperSlide>
      <SwiperSlide>
        {' '}
        <Materials />
      </SwiperSlide>
    </Swiper>
  );
}

export default SwiperLetter;
