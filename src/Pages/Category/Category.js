import React, { Component, Fragment} from 'react';
import Item from '../../Components/Item/Item';
import Buttons from './Buttons';
import {ItemList} from '../../Data/Data';
import '../../Styles/reset.scss';
import '../Category/Category.scss';

export default class Category extends Component {
  constructor(props){
    super(props);
    this.state = {
      pager: {},
      product : [],
      currentIdx: 1,
      // nowItemList : [],
      // CategoryId : 0,
    }
  }
  
  // 백 mapping
  // componentDidMount() {
  //   fetch(`http://192.168.219.121:8000/product/product_list/0` , {
  //     method: 'GET'
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //     const { RESULT } = data;
  //     // console.log(data);
  //     this.setState({
  //       itemList: data.RESULT,
  //       nowItemList: RESULT[this.state.CategoryId],
  //     });
  //   })
  // }

  //Mock data
  componentDidMount() {
    fetch(``)
    .then((res) => res.json())
    .then((res) => this.setState({ }))
    this.setState({
      product: ItemList,
    })
  }

  fetchCategory = (e) => {
    const LIMIT = 12;
    const offset = e.target.dataset.idx;

    fetch(``)
  }

  render() { 
    const { nowItemList , product, currentIdx } = this.state;
    const { fetchCategory } = this;
    return (
      <Fragment>
      <section className="category">
        <div className="content">
          <div className="goods_pick_list">
            <span className="all_count">총 <strong>222</strong>개</span>
            <div className="pick_list_box">
              <ul className="pick_list">
                <li className="pick_list_sort_recommend">추천순</li>
                <li>인기순</li>
                <li>최신순</li>
                <li>낮은가격순</li>
                <li>높은가격순</li>
              </ul>
            </div>
          </div>
          <div className="goods_list_item">
            <ul>
              {product.map((product => {   //nowItemList
                return (
                <Item
                  // main_image={item.main_image}
                  // name={item.name}
                  // money_replace={item.money_replace}
                  // price={item.price}
                  // itemId={item.itemId}
                  itemId = {product.itemId}
                  url = {product.url}
                  sale = {product.sale}
                  item = {product.item}
                  price = {product.price}
                />
                )
              }))}
            </ul>
          </div>
          <div className="pagination">
            <ul>
              <Buttons
              currentIdx={currentIdx}
              fetchCategory={fetchCategory}
              />
            </ul>
          </div>
          </div>
      </section>
      </Fragment>
    );
  }
}