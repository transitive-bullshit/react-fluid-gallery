// TODO: handle resizing properly

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import raf from 'raf'

import FluidGallery from './fluid-gallery'

const noop = () => undefined

export default class ReactFluidGallery extends Component {
  static propTypes = {
    slides: PropTypes.arrayOf(PropTypes.string).isRequired,
    startAt: PropTypes.number,
    onChange: PropTypes.func,
    style: PropTypes.object
  }

  static defaultProps = {
    onChange: noop,
    style: { }
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
      style,
      ...rest
    } = this.props

    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          ...style
        }}
        {...rest}
      >
        <canvas
          ref={this._canvasRef}
          onWheel={this._onWheel}
          style={{
            width: '100%',
            height: '100%'
          }}
        />
      </div>
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

    this._canvas.width = this._canvas.clientWidth
    this._canvas.height = this._canvas.clientHeight

    this._gallery = new FluidGallery({
      canvas: this._canvas,
      slides,
      current: this._current
    })
  }
}
