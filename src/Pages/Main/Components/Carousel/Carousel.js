import React, { Component } from 'react';
import { ImageList } from '../../../../Data/Data';
import './Carousel.scss';

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageList: ImageList,
      index: 0,
    }
    this.changeIndex();
  }

  componentDidMount() {
    this.setState({
      imageList: ImageList,
    })
  }

  changeIndex = () => {
    const { index } = this.state;
    setInterval(() => {
      this.setState({ index: index + 1 })
    }, 1000);
  }

  render() {
    const { imageList, index } = this.state;
    return (
      <div className="main-slider">
        <div className="image-wrap">
          <img alt={`carousel-img`} src={imageList && imageList[index].img} className="slider-img" />
          {/* {imageList.map((image) => {
            return (
              <img alt={`carousel-img${image.id}`} src={image.img} className="slider-img" />
            )
          })} */}
        </div>
        <ul className="slider-dotbox">
          {imageList.map((_, i) => <li className={`slider-dot ${i === index && 'focus'}`}></li>)}
        </ul>
      </div>
    )
  }
}
