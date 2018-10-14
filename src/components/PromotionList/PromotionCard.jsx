import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
`;
const Thumbnail = styled.div`
  flex: 3;
  height: 128px;
  margin-right: 5px;

  img {
    object-fit: cover;
    width: 128px;
    height: 100px;
  }
`;

const CardContent = styled.div`
  flex: 5;
  text-align: left;
  padding-left: 10px;

  h6 {
    color: orange;
    margin-top: 20px;
    font-size: 16px;
  }
`;

const CardAction = styled.div`
  flex: 2;
`;

const promotionCard = props => (
  <CardContainer>
    <Thumbnail>
      <img
        src={require("../../assets/" + props.thumbnail)}
        alt=""
        width="128"
      />
    </Thumbnail>
    <CardContent>
      <h3>{props.name}</h3>
      <h4>{props.category}</h4>
      <h6>{props.promotion}</h6>
    </CardContent>
    <CardAction>
      <div>Like</div>
      <div>Invite</div>
    </CardAction>
  </CardContainer>
);

export default promotionCard;
