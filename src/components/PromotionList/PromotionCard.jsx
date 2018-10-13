import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
`;
const Thumbnail = styled.div`
  flex: 3;
  height: 128px;
  margin-right: 5px;
`;

const CardContent = styled.div`
  flex: 5;
  text-align: left;
  padding-left: 10px;
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
      <h4>{props.name}</h4>
      <h6>{props.category}</h6>
      <h3>{props.promotion}</h3>
    </CardContent>
    <CardAction>
      <div>Like</div>
      <div>Invite</div>
    </CardAction>
  </CardContainer>
);

export default promotionCard;
