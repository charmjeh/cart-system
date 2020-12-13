import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 278px;
  height: 387px;
  padding: 0px 12px;
  margin-bottom: 32px;
  background-color: #efefef;
`

function cartItem({ item }) {
    return (
      <Card>
        <p>{item}</p>
      </Card>
    );
  }

export default cartItem;