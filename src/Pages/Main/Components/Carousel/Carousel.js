import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ImageList } from '../../../../Data/Data';
import './Carousel.scss';

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageList: [],
      imageIndex: 0,
    }
  }

  componentDidMount() {
    this.setState({
      imageList: ImageList,
    })
  }

  setSlidePosition = (idx) => {
    const { imageList, imageIndex } = this.state;
    let positionClass = 'nextSlide';
    if (idx === imageIndex) {
      positionClass = 'activeSlide';
    }
    if ((idx === imageIndex - 1) || (idx === imageList.length - 1 && imageIndex === 0)) {
      positionClass = 'prevSlide';
    }
    return positionClass;
  }

  slidePrev = () => {
    const { imageList, imageIndex } = this.state;
    this.setState({
      imageIndex: (imageIndex === 0) ? imageList.length - 1 : imageIndex - 1,
    })
  }

  slideNext = () => {
    const { imageList, imageIndex } = this.state;
    this.setState({
      imageIndex: (imageIndex + 1) % imageList.length,
    })
  }

  render() {
    const { imageList, imageIndex } = this.state;
    const { setSlidePosition, slidePrev, slideNext } = this;
    return (
      <div className="main-slider">
        <div className="image-wrap">
          {imageList && imageList.map((image, index) => {
            const position = setSlidePosition(index);
            return (
              <Link to={image.link}>
                <img alt='carousel-img' src={image.img} className={`slider-img ${position}`} /> 
              </Link>
            )
          })}
        </div>
        <ul className="slider-dotbox">
          {imageList.map((_, i) => 
            <li 
              className={`slider-dot ${i === imageIndex && 'focus'}`}
              onClick={() => this.setState({ imageIndex: i })}
            ></li>)}
        </ul>
        <button 
          className='slider-prev-btn'
          onClick={slidePrev}>
          ◀︎
        </button>
        <button
          className='slider-next-btn'
          onClick={slideNext}>
          ▶︎
        </button>
      </div>
    )
  }
}
