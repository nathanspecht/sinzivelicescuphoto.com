import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

class Slides extends React.Component {
  constructor(props) {
    super(props)
    this.state = { index: 0 }
  }

  next = () => {
    this.setState(
      {
        index: this.nextIndex(),
      },
      this.preloadNext,
    )
  }

  prev = () => {
    this.setState(
      {
        index: this.prevIndex(),
      },
      this.preloadPrev,
    )
  }

  preloadNext = () => {
    preload(this.props.images[this.nextIndex()])
  }

  preloadPrev = () => {
    preload(this.props.images[this.prevIndex()])
  }

  nextIndex = () => (this.state.index + 1) % this.props.images.length

  prevIndex = () =>
    (this.state.index - 1 + this.props.images.length) % this.props.images.length

  render() {
    const { images } = this.props
    const image = images[this.state.index]

    return (
      <div className="flex flex-auto relative">
        <TransitionGroup className="flex flex-auto">
          <CSSTransition key={image} timeout={250} classNames="fade">
            <div
              className="flex flex-auto absolute top-0 left-0 right-0 h-100"
              style={{
                backgroundImage: `url(${image})`,
                backgroundPosition: 'center top',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
              }}
            />
          </CSSTransition>
        </TransitionGroup>
        <div
          className="w-50 h-100 absolute top-0 left-0 no-select w-resize"
          onClick={this.prev}
        />
        <div
          className="w-50 h-100 absolute top-0 right-0 no-select e-resize"
          onClick={this.next}
        />
      </div>
    )
  }
}

function preload(url) {
  const image = new Image()
  image.src = url
}

export default Slides
