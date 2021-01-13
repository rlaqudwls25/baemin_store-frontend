import React, { Component, Fragment} from 'react';
import { Link } from 'react-router-dom';
import Item from '../../../../Components/Item/Item';
import ItemList from '../../../../Data/Data'
import '../Category/Category.scss';

class Category extends Component {
  constructor(props){
    super(props);
    this.state = {
      itemList : []
    }
  }

  componentDidMount() {
    this.setState({
      itemList: ItemList
    });
  }
  
  render() { 
    const {itemList} = this.state;
    //console.log("itemList" , itemList);

    return (
      <Fragment>
      <section className="category">
        <div className="content">
          <div className="goods_pick_list">
            <span className="all_count">총 <strong>222</strong>개</span>
            <div className="pick_list_box">
              <ul className="pick_list">
                <li className="pick_list_sort_recommend">추천순</li>
                <li className="pick_list_sort">인기순</li>
                <li className="pick_list_sort">최신순</li>
                <li className="pick_list_sort">낮은가격순</li>
                <li className="pick_list_sort">높은가격순</li>
              </ul>
            </div>
          </div>   
          <div className="goods_list_item">
            <ul>
             {itemList.map((item => {
               return (
               <Item
                 url={item.url}
                 sale={item.sale}
                 title={item.item}
                 price={item.price}
                 itemId={item.itemId}
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
