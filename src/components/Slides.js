import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

class Slides extends React.Component {
  constructor(props) {
    super(props)
    this.state = { index: 0 }
  }

  next = () => {
    this.setState({
      index: (this.state.index + 1) % this.props.images.length,
    })
  }

  prev = () => {
    this.setState({
      index:
        (this.state.index - 1 + this.props.images.length) %
        this.props.images.length,
    })
  }

  render() {
    const { images } = this.props
    const image = images[this.state.index]

    return (
      <div className="relative w-100">
        <TransitionGroup>
          <CSSTransition key={image} timeout={100} classNames="fade">
            <img className="db center" src={image} />
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

export default Slides
