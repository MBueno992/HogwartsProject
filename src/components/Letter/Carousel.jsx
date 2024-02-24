import Carousel from 'react-bootstrap/Carousel';
import Letter from './Letter';
import Materials from './Materials';

function CarouselFadeExample({ index, selectCarousel, userName }) {
  return (
    <Carousel
      fade
      activeIndex={index}
      onSelect={selectCarousel}
      interval={null}
    >
      <Carousel.Item>
        {<Letter userName={userName} />}
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
