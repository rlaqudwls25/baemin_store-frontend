import React, { Component, Fragment} from 'react';
import { Link } from 'react-router-dom';
import Item from '../../Components/Item/Item';
// import ItemList from '../../Data/Data';
import '../../Styles/reset.scss';
import '../Category/Category.scss';

class Category extends Component {
  constructor(props){
    super(props);
    this.state = {
      itemList : [],
      nowItemList : [],
      CategoryId : 0,
    }
  }

  componentDidMount() {
    fetch(`http://192.168.219.121:8000/product/product_list/0` , {
      method: 'GET'
    })
      .then(res => res.json())
      .then(data => {
      const { RESULT } = data;
      console.log(data);
      this.setState({
        itemList: data.RESULT,
        nowItemList: RESULT[this.state.CategoryId],
      });
    })
  }

  render() { 
    const { nowItemList } = this.state;
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
              {nowItemList.map((item => {
                return (
                <Item
                  main_image={item.main_image}
                  name={item.name}
                  money_replace={item.money_replace}
                  price={item.price}
                  // itemId={item.itemId}
                />
                )
              }))}
            </ul>
          </div>
          <div className="pagination">
            <ul>
              <li className="page_one"><Link to=""/>1</li>
              <li><Link to=""/>2</li>
              <li><Link to=""/>3</li>
              <li><Link to=""/>4</li>
            </ul>
          </div>
          </div>
      </section>
      </Fragment>
    );
  }
}

export default Category;
