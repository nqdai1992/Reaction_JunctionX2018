import React, { Component } from "react";
import PromotionCards from "../components/PromotionList/PromotionCards";
import Card from "../components/UI/Card/Card";
import { promotionList } from "../store/data";
import AddAcitvityButton from "../components/AddActivityButton/AddActivityButton";

export default class Home extends Component {
  state = {
    promotionList: promotionList,
    showAddActivity: false
  };
  render() {
    return (
      <div>
        <h1>Welcome Choe</h1>
        <Card />
        <PromotionCards promotionList={this.state.promotionList} />
        <AddAcitvityButton />
      </div>
    );
  }
}
