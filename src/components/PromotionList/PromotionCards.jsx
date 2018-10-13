import React from "react";
import PromotionCard from "./PromotionCard";

const promotionCards = props => {
  let transformCardList = Object.keys(props.promotionList)
    .map(promotionKey => {
      return [...Array(props.promotionList[promotionKey])].map((_, i) => {
        return (
          <PromotionCard
            key={props.promotionList[promotionKey]}
            name={props.promotionList[promotionKey].name}
            category={props.promotionList[promotionKey].category}
            promotion={props.promotionList[promotionKey].promotion}
            thumbnail={props.promotionList[promotionKey].thumbnail}
          />
        );
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  //console.log(transformFoodList);
  return <div>{transformCardList}</div>;
};

export default promotionCards;
