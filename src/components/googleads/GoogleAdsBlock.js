/* @flow */
import React from 'react';
import styled from 'react-emotion';
import GoogleAds from './GoogleAds';

export type Props = {};

const Wrapper = styled.div`
  position: absolute;
  left: 10%;
  top: 15%;
  padding: 0px;
  background: #1a1a1a;
  border: 1px solid #a38d6d;
  height: 600px !important;
  width: 160px;
`;

const Label = styled.div`
  color: #474138;
  position: relative;
  display: block;
  top: 190px;
  text-align: center;
  width: 140px;
  color: #a38d6d;
  line-height: 32px;
  font-size: 20px;
  font-style: italic;
  z-index: 0;
  margin: auto;
  height: 0;
`;

export default class GoogleAdsBlock extends React.Component {
  props: Props;

  render() {
    //const { type } = this.props;
    if(process.env.REACT_APP_AD_CLIENT){
      return (
        <Wrapper>
          <Label>Please consider supporting us by disabling AdBlock.</Label>
          <GoogleAds
           client={process.env.REACT_APP_AD_CLIENT}
           slot={process.env.REACT_APP_AD_SLOT}
           style={{ display: 'inline-block', width: '160px', height: '600px', zIndex: 1, position: 'relative', }}
          />
        </Wrapper>
      );
  }
    else { return null }
  }
}
