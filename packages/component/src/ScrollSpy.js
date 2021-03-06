import React from 'react';

import debounce from './debounce';
import memoize from './memoize';

export default class ScrollSpy extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handlePointerOver = debounce(this.handlePointerOver.bind(this), 300);
    this.handleScroll = this.handleScroll.bind(this);

    this.emitScroll = memoize((initial, fraction, width) => {
      this.props.onScroll && this.props.onScroll({ initial, fraction, width });
    });
  }

  componentDidMount() {
    const { target } = this.props;

    if (target) {
      target.addEventListener('pointerover', this.handlePointerOver, { passive: true });
      target.addEventListener('scroll', this.handleScroll, { passive: true });
      this.emitInitialScrollEvent(target);
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.target !== this.props.target) {
      const { target: prevTarget } = prevProps;
      const { target } = this.props;

      if (prevTarget) {
        prevTarget.removeEventListener('pointerover', this.handlePointerOver);
        prevTarget.removeEventListener('scroll', this.handleScroll);
      }

      if (target) {
        target.addEventListener('pointerover', this.handlePointerOver, { passive: true });
        target.addEventListener('scroll', this.handleScroll, { passive: true });
        this.emitInitialScrollEvent(target);
      }
    }
  }

  emitInitialScrollEvent(target, waited) {
    if (!waited && target.scrollWidth === target.offsetWidth) {
      // HACK: Chrome 66 will initially say scrollWidth equals to offsetWidth, until some time later
      setTimeout(() => this.emitInitialScrollEvent(target, true));
    }

    this.handleScroll({ target }, true);
  }

  componentWillUnmount() {
    const { target } = this.props;

    target && target.removeEventListener('scroll', this.handleScroll);
  }

  handlePointerOver() {
    // We need to send "onScroll" because "scrollWidth" might have changed
    // For example, the container resized, the scroll width will be incorrect
    // We will debounce to prevent "pointerOver" calculating too often
    // We will memoize to prevent firing unnecessary "onScroll"
    const { target } = this.props;

    this.handleScroll({ target });
  }

  handleScroll({ target }, initial = false) {
    const { offsetWidth, scrollLeft, scrollWidth } = target;

    this.emitScroll(
      initial,
      `${ scrollWidth === offsetWidth ? 0 : scrollLeft / (scrollWidth - offsetWidth) * 100 }%`,
      `${ offsetWidth / scrollWidth * 100 }%`
    );
  }

  render() {
    return false;
  }
}
