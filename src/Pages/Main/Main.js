import React, { Component } from 'react';
import Carousel from './Components/Carousel/Carousel';
import Item from '../../Components/Item/Item';
import Recommend from './Components/Recommend/Recommend';
import { ItemList, RecommendList } from '../../Data/Data';
import './Main.scss';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotList: [],
      newList: [],
      saleList: [],
      recommendList: [],
    }
  }

  componentDidMount() {
    // fetch(`http://10.58.0.114:8000/products/product_list/0/all` , {
    fetch('/data/product.json' , {  
      method: 'GET'
    })
      .then(res => res.json())
      .then(data => {
      
      console.log(data.RESULT);
      this.setState({
        itemList: data.RESULT,
        nowItemList: data.RESULT[0],
        recommendList: RecommendList,
        hotList: data.RESULT[0].slice(0,4),
        newList: data.RESULT[0].slice(4,12),
        saleList: data.RESULT[1].slice(0,8),
      });
    })
  }
  
  render() {
    const { hotList, newList, recommendList, saleList } = this.state;
    return (
      <main className="main">
        <Carousel />
        <div className="main-item-container">
          <section className="hot-container">
            <h3>잘나가요</h3>
            <div className="hot-wrap">
              {hotList.map(item => <Item {...item} />)}
            </div>
          </section>
          <section className="new-container">
            <h3>새로 나왔어요</h3>
            <div className="new-wrap">
              {newList.map(item => <Item {...item} />)}
            </div>
          </section>
          <section className="recommend-container">
            <h3>선물하기 딱 좋아요!</h3>
            <div className="recommend-wrap">
              {recommendList.map(recommend => <Recommend {...recommend} />)}
            </div>
          </section>
          <section className="sale-container">
            <h3>지금은 할인 중</h3>
            <div className="sale-wrap">
              {saleList.map(item => <Item {...item} />)}
            </div>
          </section>
        </div>
      </main>
    )
  }
}
