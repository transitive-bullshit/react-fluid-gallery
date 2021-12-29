# react-fluid-gallery ([demo](https://transitive-bullshit.github.io/react-fluid-gallery/))

> Fluid media gallery for React powered by WebGL.

[![NPM](https://img.shields.io/npm/v/react-fluid-gallery.svg)](https://www.npmjs.com/package/react-fluid-gallery) [![Build Status](https://travis-ci.com/transitive-bullshit/react-fluid-gallery.svg?branch=master)](https://travis-ci.com/transitive-bullshit/react-fluid-gallery) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

[![Demo](https://raw.githubusercontent.com/transitive-bullshit/react-fluid-gallery/master/example/demo.gif)](https://transitive-bullshit.github.io/react-fluid-gallery/)

Inspired by [Tao Tajima](http://taotajima.jp/). Use the scroll wheel or swipe to transition fluidly between background images in the gallery.

## Install

```bash
npm install --save react-fluid-gallery
```

## Usage

Check out the [demo](https://transitive-bullshit.github.io/react-fluid-gallery/).

```jsx
import React, { Component } from 'react'

import FluidGallery from 'react-fluid-gallery'

import image1 from './1.jpg'
import image2 from './2.jpg'
import video from './video.mp4'

export default class App extends Component {
  render () {
    return (
      <FluidGallery
        style={{ width: '100vw', height: '100vh' }}
        slides={[ image1, image2, video ]}
      />
    )
  }
}

```

## Props

| Property    | Type             | Default  | Description |
|:------------|:-----------------|:---------|:------------|
| `slides`    | `Array<string>`  | **required** | Array of image / video URLs to use for the gallery slides. |
| `startAt`   | number           | random   | Default slide to show. |
| `onChange`  | function(index: number) | undefined   | Optional callback when the active slide is changed. |
| `changeSlide`  | `changeSlideEnum.next \| changeSlideEnum.prev` | undefined   | Passing down `next` will change the active slide to the next, whereas passing down `prev` will change the active slide to the previous. This is useful if you want to control the slide transition in the consuming application by means other than manually swiping / scrolling. See an example of this in ./example. |
| `...`       | ...              | undefined | Any other props are applied to the root element. |

## Credits

The original version of this awesome gallery technique was published on the personal website of [Tao Tajima](http://taotajima.jp/).

## License

MIT © [Travis Fischer](https://github.com/transitive-bullshit)

Support my OSS work by <a href="https://twitter.com/transitive_bs">following me on twitter <img src="https://storage.googleapis.com/saasify-assets/twitter-logo.svg" alt="twitter" height="24px" align="center"></a>
