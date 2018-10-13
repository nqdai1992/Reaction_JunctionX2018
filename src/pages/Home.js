import React, { Component } from "react";
import PromotionCards from "../components/PromotionList/PromotionCards";
import { promotionList } from "../store/data";

export default class Home extends Component {
  state = {
    promotionList: promotionList,
    showAddActivity: false
  };
  render() {
    console.log(this.state.promotionList);
    return (
      <div>
        <h1>Welcome Choe</h1>
        <PromotionCards promotionList={this.state.promotionList} />
      </div>
    );
  }
}
