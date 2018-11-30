// TODO: handle resizing properly

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import raf from 'raf'
import sizeMe from 'react-sizeme'

import FluidGallery from './fluid-gallery'

const noop = () => undefined

class ReactFluidGallery extends Component {
  static propTypes = {
    slides: PropTypes.arrayOf(PropTypes.string).isRequired,
    startAt: PropTypes.number,
    onChange: PropTypes.func,
    size: PropTypes.shape({
      width: PropTypes.number,
      height: PropTypes.number
    }).isRequired
  }

  static defaultProps = {
    onChange: noop
  }

  _current = (typeof this.props.startAt !== 'undefined'
    ? this.props.startAt
    : (Math.random() * this.props.slides.length | 0)
  )

  componentDidMount() {
    this._reset(this.props)
    this._tick()
  }

  componentWillUnmount() {
    if (this._tickRaf) {
      raf.cancel(this._tickRaf)
      this._tickRaf = null
    }
  }

  render() {
    const {
      slides,
      startAt,
      onChange,
      size,
      ...rest
    } = this.props

    return (
      <canvas
        ref={this._canvasRef}
        width={size.width}
        height={size.height}
        onWheel={this._onWheel}
        {...rest}
      />
    )
  }

  _canvasRef = (ref) => {
    this._canvas = ref
  }

  _onWheel = (event) => {
    this._gallery.onScroll(event)
  }

  _tick = () => {
    const {
      onChange
    } = this.props

    this._gallery.update()
    this._gallery.render()

    if (this._current !== this._gallery.currentSlideIndex) {
      this._current = this._gallery.currentSlideIndex
      onChange(this._current)
    }

    this._tickRaf = raf(this._tick)
  }

  _reset(props) {
    const {
      slides
    } = props

    this._gallery = new FluidGallery({
      canvas: this._canvas,
      slides,
      current: this._current
    })
  }
}

export default sizeMe({ monitorWidth: true, monitorHeight: true })(ReactFluidGallery)
