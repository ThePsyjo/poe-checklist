/* @flow */
import React from 'react';

export type Props = {
  tier: number,
  name: string,
};

export default class MapTier extends React.Component {
  props: Props;

  render() {
    return (
      <div>
        <span>
          {this.props.tier}{' '}
        </span>
      </div>
    );
  }
}
