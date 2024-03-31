import Carousel from 'react-bootstrap/Carousel';
import Letter from './Letter';
import Materials from './Materials';
import PropTypes from 'prop-types';

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
CarouselFadeExample.propTypes = {
  index: PropTypes.number,
  selectCarousel: PropTypes.func,
  userName: PropTypes.string,
};
export default CarouselFadeExample;
