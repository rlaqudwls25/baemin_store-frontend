import React, { Component } from 'react';


class Buttons extends Component {
    

  render() {
    const {fetchCategory} = this.props;
    return (
      <div>
        <button data-idx="0" onClick={fetchCategory}>1</button>
        <button data-idx="1" onClick={fetchCategory}>2</button>
        <button data-idx="2" onClick={fetchCategory}>3</button>
        <button data-idx="3" onClick={fetchCategory}>4</button>
        <button data-idx="4" onClick={fetchCategory}>5</button>
      </div>
    );
  }
}

export default Buttons;