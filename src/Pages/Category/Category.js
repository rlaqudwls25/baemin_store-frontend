import React, { Component, Fragment} from 'react';
import Item from '../../Components/Item/Item';
<<<<<<< HEAD
import Buttons from './Buttons';
import ItemList from '../../Data/Data';
=======
import { ItemList } from '../../Data/Data';
>>>>>>> main
import '../../Styles/reset.scss';
import '../Category/Category.scss';



class Category extends Component {
  constructor(props){
    super(props);
    this.state = {
      pager: {},
      product : [],
      currentIdx: 1,
      page: 1,
      start: 0,
      end: 4,
      // nowItemList : [],
      // CategoryId : 0,
    }
  }
  

  // indexOfLast = 페이지의 마지막 인덱스
  // indexOfFirst = 페이지의 첫 번째 인덱스
  // postsPerPage = 데이터 등분
  // currentPage = 현재 페이지
  // currentPost = 현재 포스트 페이지
  // 처음과 끝 인덱스 번호를 구한 다음 currentPosts 함수를 통해 100개의 배열 데이터를 slice 함수로 분할

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
    //페이징
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

  changeIndexUp = () => {
    const { page, start, end } = this.state;
    this.setState({
      page: page + 1,
      end: end + 4,
      start: start + 4
    })
  }

  changeIndexDown = () => {
    const { page, start, end } = this.state;
    if(start === 0) {
      return;
    }
    this.setState({
      page: page - 1,
      end: end - 4,
      start: start - 4
    })

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

export default Category;
