import React, { Component } from 'react'

import FluidGallery from 'react-fluid-gallery'
import GitHubCorner from 'react-github-corner'

import video1 from './assets/0.mp4'
import image1 from './assets/1.jpg'
import image2 from './assets/2.jpg'
import image3 from './assets/3.jpg'
import image4 from './assets/4.jpg'
import image5 from './assets/5.jpg'
import image6 from './assets/6.jpg'

const images = [
  video1,
  image1,
  image2,
  image3,
  image4,
  image5,
  image6
]

export default class App extends Component {
  render () {
    return (
      <div
        style={{
          height: '100vh'
        }}
      >
        <FluidGallery
          slides={images}
          startAt={0}
          onChange={this._onChange}
        />

        <div
          style={{
            position: 'absolute',
            zIndex: 1,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#fff',
            fontFamily: 'Quicksand, "Helvetica Neue", sans-serif',
            pointerEvents: 'none'
          }}
        >
          <h1
            style={{
              fontSize: '3em',
              textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)'
            }}
          >
            React Fluid Gallery
          </h1>

          <p
            style={{
              fontSize: '1.5em'
            }}
          >
            Scroll with your mouse wheel or by swiping.
          </p>
        </div>

        <GitHubCorner
          href='https://github.com/transitive-bullshit/react-fluid-gallery'
          bannerColor='#70B7FD'
        />
      </div>
    )
  }

  _onChange = (index) => {
    console.log('FluidGallery.onChange', index)
  }
}
