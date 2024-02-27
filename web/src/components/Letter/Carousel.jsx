import Carousel from 'react-bootstrap/Carousel';
import Letter from './Letter';
import Materials from './Materials';

function CarouselFadeExample({ index, selectCarousel, userName, lastName }) {
  return (
    <Carousel
      fade
      activeIndex={index}
      onSelect={selectCarousel}
      interval={null}
    >
      <Carousel.Item>
        {<Letter userName={userName} lastName={lastName} />}
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Materials />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;
