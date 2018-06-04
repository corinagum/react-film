import { css } from 'glamor';
import classNames from 'classnames';
import React from 'react';
import Film from 'react-film';

import Flipper from './Flipper';
import ScrollBar from './ScrollBar';

const SCROLL_BAR_CSS = css({
  bottom: -30,
  transitionDelay: '1s',
  transitionDuration: '300ms',
  transitionProperty: 'bottom'
});

const FLIPPER_CSS = css({
  position: 'absolute',
  top: 0,
  transitionDelay: '1s',
  transitionDuration: '300ms'
});

const LEFT_FLIPPER_CSS = css({
  left: -50,
  transitionProperty: 'left'
}, FLIPPER_CSS);

const RIGHT_FLIPPER_CSS = css({
  right: -50,
  transitionProperty: 'right'
}, FLIPPER_CSS);

const FILM_CSS = css({
  height: 316,
  overflow: 'hidden',
  position: 'relative',

  '&:hover, &.scrolling': {
    [`& .${ SCROLL_BAR_CSS + '' }, & .${ LEFT_FLIPPER_CSS + '' }, & .${ RIGHT_FLIPPER_CSS + '' }`]: {
      transitionDelay: '0s'
    },

    [`& .${ SCROLL_BAR_CSS + '' }`]: {
      bottom: 0
    },

    [`& .${ LEFT_FLIPPER_CSS + '' }`]: {
      left: 0
    },

    [`& .${ RIGHT_FLIPPER_CSS + '' }`]: {
      right: 0
    }
  }
});

export default class BasicFilm extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleNextClick = this.handleNextClick.bind(this);
    this.handlePrevClick = this.handlePrevClick.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleScrollToEnd = this.handleScrollToEnd.bind(this);

    this.state = {
      scrollBarLeft: 0,
      scrollBarWidth: 0,
      scrollTo: null,
      scrolling: false
    };
  }

  handleNextClick() {
    this.setState(() => ({ scrollTo: ({ indexFraction }) => Math.floor(indexFraction) + 1 }));
  }

  handlePrevClick() {
    this.setState(() => ({ scrollTo: ({ indexFraction }) => Math.ceil(indexFraction) - 1 }));
  }

  handleScroll({ initial, left, width }) {
    this.setState(() => ({
      scrollBarLeft: left,
      scrollBarWidth: width,
      scrolling: !initial
    }));

    !initial && setTimeout(() => this.setState(() => ({ scrolling: false })), 500);
  }

  handleScrollToEnd() {
    this.setState(() => ({ scrollTo: null }));
  }

  render() {
    const { scrolling } = this.state;

    return (
      <div className={ classNames(FILM_CSS + '', { scrolling }, this.props.className) }>
        <Film
          onScroll={ this.handleScroll }
          onScrollToEnd={ this.handleScrollToEnd }
          scrollTo={ this.state.scrollTo }
        >
          { this.props.children }
        </Film>
        {
          this.state.scrollBarWidth !== '100%' &&
            <React.Fragment>
              <ScrollBar
                className={ SCROLL_BAR_CSS + '' }
                left={ this.state.scrollBarLeft }
                width={ this.state.scrollBarWidth }
              />
              <Flipper
                className={ LEFT_FLIPPER_CSS + '' }
                onClick={ this.handlePrevClick }
              >
                &lt;
              </Flipper>
              <Flipper
                className={ RIGHT_FLIPPER_CSS + '' }
                onClick={ this.handleNextClick }
              >
                &gt;
              </Flipper>
            </React.Fragment>
        }
      </div>
    );
  }
}