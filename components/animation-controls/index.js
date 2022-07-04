/**
 * COMPONENT: Animation Control
 */

/**
 * Internal dependencies
 */
import {
  animationList,
  delayList,
  durationList,
  repeatList,
} from './definitions'

/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n'
import { SelectControl } from '@wordpress/components'
import { Component } from '@wordpress/element'

class AnimationControls extends Component {
  constructor() {
    super(...arguments)

    this.updateAnimation = this.updateAnimation.bind(this)
    this.updateDuration = this.updateDuration.bind(this)
    this.updateDelay = this.updateDelay.bind(this)
    this.updateRepeat = this.updateRepeat.bind(this)

    this.state = {
      animation: 'none',
      duration: 'default',
      delay: 'default',
      repeat: 'default',
    }
  }

  componentDidMount() {
    const {
      attributes: { className },
    } = this.props
    if (className) {
      const classes = className.split(' ')
      let animationClass
      animationList.forEach((animation) => {
        if (classes.find((currentValue) => currentValue.endsWith(animation))) {
          animationClass = `animate__${animation}`
        }
      })
      let delayClass
      delayList.forEach((delay) => {
        if (classes.find((currentValue) => currentValue.endsWith(delay))) {
          delayClass = `animate__delay-${delay}`
        }
      })
      let durationClass
      durationList.forEach((duration) => {
        if (classes.find((currentValue) => currentValue.endsWith(duration))) {
          durationClass = `animate__${duration}`
        }
      })
      let repeatClass
      repeatList.forEach((repeat) => {
        if (classes.find((currentValue) => currentValue.endsWith(repeat))) {
          repeatClass = `animate__${repeat}`
        }
      })

      this.setState({
        animation: animationClass
          ? animationClass.replace('animate__', '')
          : 'none',
        delay: delayClass
          ? delayClass.replace('animate__delay-', '')
          : 'default',
        duration: durationClass
          ? durationClass.replace('animate__', '')
          : 'default',
        repeat: repeatClass ? repeatClass.replace('animate__', '') : 'default',
      })
    }
  }

  updateAnimation(value) {
    const {
      attributes: { className },
    } = this.props
    let classes

    if ('none' !== value) {
      if (className) {
        classes = className.split(' ')
        const isAnimated = classes.find(
          (currentValue) => 'animate__animated' === currentValue
        )
        let hasAnimationClass
        animationList.forEach((animation) => {
          if (
            classes.find((currentValue) => currentValue.endsWith(animation))
          ) {
            hasAnimationClass = true
          }
        })

        if (!isAnimated) {
          classes.push('animate__animated')
        }

        if (hasAnimationClass) {
          classes = classes
            .join(' ')
            .replace(`animate__${this.state.animation}`, `animate__${value}`)
        } else {
          classes.push(`animate__${value}`)
          classes = classes.join(' ')
        }
      } else {
        classes = `animate__animated animate__${value}`
      }
    } else {
      classes = className
        .replace('animate__animated', '')
        .replace(`animate__${this.state.animation}`, '')
        .replace(`animate__delay-${this.state.delay}`, '')
        .replace(`animate__${this.state.duration}`, '')
        .replace(`animate__${this.state.repeat}`, '')
      this.setState({
        duration: 'default',
        delay: 'default',
        repeat: 'default',
      })
    }

    classes = classes.replace(/\s+/g, ' ')
    classes = classes.trim()

    this.setState({ animation: value })
    this.props.setAttributes({ className: classes })
  }

  updateDelay(value) {
    const {
      attributes: { className },
    } = this.props
    let classes

    if ('default' !== value) {
      if (className) {
        classes = className.split(' ')
        let hasDelayClass
        delayList.forEach((delay) => {
          if (classes.find((currentValue) => currentValue.endsWith(delay))) {
            hasDelayClass = true
          }
        })

        if (hasDelayClass) {
          classes = classes
            .join(' ')
            .replace(
              `animate__delay-${this.state.delay}`,
              `animate__delay-${value}`
            )
        } else {
          classes.push(`animate__delay-${value}`)
          classes = classes.join(' ')
        }
      } else {
        classes = `animate__delay-${value}`
      }
    } else {
      classes = className.replace(`animate__delay-${this.state.delay}`, '')
      this.setState({ delay: 'default' })
    }

    classes = classes.replace(/\s+/g, ' ')
    classes = classes.trim()

    this.setState({ delay: value })
    this.props.setAttributes({ className: classes })
  }

  updateDuration(value) {
    const {
      attributes: { className },
    } = this.props
    let classes

    if ('default' !== value) {
      if (className) {
        classes = className.split(' ')
        let hasDurationClass
        durationList.forEach((duration) => {
          if (classes.find((currentValue) => currentValue.endsWith(duration))) {
            hasDurationClass = true
          }
        })

        if (hasDurationClass) {
          classes = classes
            .join(' ')
            .replace(`animate__${this.state.duration}`, `animate__${value}`)
        } else {
          classes.push(`animate__${value}`)
          classes = classes.join(' ')
        }
      } else {
        classes = `animate__${value}`
      }
    } else {
      classes = className.replace(`animate__${this.state.duration}`, '')
      this.setState({ duration: 'default' })
    }

    classes = classes.replace(/\s+/g, ' ')
    classes = classes.trim()

    this.setState({ duration: value })
    this.props.setAttributes({ className: classes })
  }

  updateRepeat(value) {
    const {
      attributes: { className },
    } = this.props
    let classes

    if ('default' !== value) {
      if (className) {
        classes = className.split(' ')
        let hasRepeatClass
        repeatList.forEach((repeat) => {
          if (classes.find((currentValue) => currentValue.endsWith(repeat))) {
            hasRepeatClass = true
          }
        })

        if (hasRepeatClass) {
          classes = classes
            .join(' ')
            .replace(`animate__${this.state.repeat}`, `animate__${value}`)
        } else {
          classes.push(`animate__${value}`)
          classes = classes.join(' ')
        }
      } else {
        classes = `animate__${value}`
      }
    } else {
      classes = className.replace(`animate__${this.state.repeat}`, '')
      this.setState({ repeat: 'default' })
    }

    classes = classes.replace(/\s+/g, ' ')
    classes = classes.trim()

    this.setState({ repeat: value })
    this.props.setAttributes({ className: classes })
  }

  render() {
    return (
      <>
        <SelectControl
          label={__('On scroll animation', 'fleximpleblocks')}
          labelPosition="top"
          value={this.state.animation}
          options={[
            { label: __('None', 'fleximpleblocks'), value: 'none' },
            {
              label: __('— Attention seekers —', 'fleximpleblocks'),
              value: null,
              disabled: true,
            },
            {
              label: __('Bounce', 'fleximpleblocks'),
              value: 'bounce',
            },
            {
              label: __('Flash', 'fleximpleblocks'),
              value: 'flash',
            },
            {
              label: __('Head shake', 'fleximpleblocks'),
              value: 'headShake',
            },
            {
              label: __('Heartbeat', 'fleximpleblocks'),
              value: 'heartBeat',
            },
            {
              label: __('Jello', 'fleximpleblocks'),
              value: 'jello',
            },
            {
              label: __('Pulse', 'fleximpleblocks'),
              value: 'pulse',
            },
            {
              label: __('Rubber band', 'fleximpleblocks'),
              value: 'rubberBand',
            },
            {
              label: __('Shake', 'fleximpleblocks'),
              value: 'shake',
            },
            {
              label: __('Shake X', 'fleximpleblocks'),
              value: 'shakeX',
            },
            {
              label: __('Shake Y', 'fleximpleblocks'),
              value: 'shakeY',
            },
            {
              label: __('Swing', 'fleximpleblocks'),
              value: 'swing',
            },
            {
              label: __('Ta-da', 'fleximpleblocks'),
              value: 'tada',
            },
            {
              label: __('Wobble', 'fleximpleblocks'),
              value: 'wobble',
            },
            {
              label: __('— Back entrances —', 'fleximpleblocks'),
              value: null,
              disabled: true,
            },
            {
              label: __('Back in down', 'fleximpleblocks'),
              value: 'backInDown',
            },
            {
              label: __('Back in left', 'fleximpleblocks'),
              value: 'backInLeft',
            },
            {
              label: __('Back in right', 'fleximpleblocks'),
              value: 'backInRight',
            },
            {
              label: __('Back in up', 'fleximpleblocks'),
              value: 'backInUp',
            },
            {
              label: __('— Back exits —', 'fleximpleblocks'),
              value: null,
              disabled: true,
            },
            {
              label: __('Back out down', 'fleximpleblocks'),
              value: 'backOutDown',
            },
            {
              label: __('Back out left', 'fleximpleblocks'),
              value: 'backOutLeft',
            },
            {
              label: __('Back out right', 'fleximpleblocks'),
              value: 'backOutRight',
            },
            {
              label: __('Back out up', 'fleximpleblocks'),
              value: 'backOutUp',
            },
            {
              label: __('— Bouncing entrances —', 'fleximpleblocks'),
              value: null,
              disabled: true,
            },
            {
              label: __('Bounce in', 'fleximpleblocks'),
              value: 'bounceIn',
            },
            {
              label: __('Bounce in down', 'fleximpleblocks'),
              value: 'bounceInDown',
            },
            {
              label: __('Bounce in left', 'fleximpleblocks'),
              value: 'bounceInLeft',
            },
            {
              label: __('Bounce in right', 'fleximpleblocks'),
              value: 'bounceInRight',
            },
            {
              label: __('Bounce in up', 'fleximpleblocks'),
              value: 'bounceInUp',
            },
            {
              label: __('— Bouncing exits —', 'fleximpleblocks'),
              value: null,
              disabled: true,
            },
            {
              label: __('Bounce out', 'fleximpleblocks'),
              value: 'bounceOut',
            },
            {
              label: __('Bounce out down', 'fleximpleblocks'),
              value: 'bounceOutDown',
            },
            {
              label: __('Bounce out left', 'fleximpleblocks'),
              value: 'bounceOutLeft',
            },
            {
              label: __('Bounce out right', 'fleximpleblocks'),
              value: 'bounceOutRight',
            },
            {
              label: __('Bounce out up', 'fleximpleblocks'),
              value: 'bounceOutUp',
            },
            {
              label: __('— Fading entrances —', 'fleximpleblocks'),
              value: null,
              disabled: true,
            },
            {
              label: __('Fade in', 'fleximpleblocks'),
              value: 'fadeIn',
            },
            {
              label: __('Fade in bottom left', 'fleximpleblocks'),
              value: 'fadeInBottomLeft',
            },
            {
              label: __('Fade in bottom right', 'fleximpleblocks'),
              value: 'fadeInBottomRight',
            },
            {
              label: __('Fade in down', 'fleximpleblocks'),
              value: 'fadeInDown',
            },
            {
              label: __('Fade in down big', 'fleximpleblocks'),
              value: 'fadeInDownBig',
            },
            {
              label: __('Fade in left', 'fleximpleblocks'),
              value: 'fadeInLeft',
            },
            {
              label: __('Fade in left big', 'fleximpleblocks'),
              value: 'fadeInLeftBig',
            },
            {
              label: __('Fade in right', 'fleximpleblocks'),
              value: 'fadeInRight',
            },
            {
              label: __('Fade in right big', 'fleximpleblocks'),
              value: 'fadeInRightBig',
            },
            {
              label: __('Fade in top left', 'fleximpleblocks'),
              value: 'fadeInTopLeft',
            },
            {
              label: __('Fade in top right', 'fleximpleblocks'),
              value: 'fadeInTopRight',
            },
            {
              label: __('Fade in up', 'fleximpleblocks'),
              value: 'fadeInUp',
            },
            {
              label: __('Fade in up big', 'fleximpleblocks'),
              value: 'fadeInUpBig',
            },
            {
              label: __('— Fading exits —', 'fleximpleblocks'),
              value: null,
              disabled: true,
            },
            {
              label: __('Fade out', 'fleximpleblocks'),
              value: 'fadeOut',
            },
            {
              label: __('Fade out bottom left', 'fleximpleblocks'),
              value: 'fadeOutBottomLeft',
            },
            {
              label: __('Fade out bottom right', 'fleximpleblocks'),
              value: 'fadeOutBottomRight',
            },
            {
              label: __('Fade out down', 'fleximpleblocks'),
              value: 'fadeOutDown',
            },
            {
              label: __('Fade out down big', 'fleximpleblocks'),
              value: 'fadeOutDownBig',
            },
            {
              label: __('Fade out left', 'fleximpleblocks'),
              value: 'fadeOutLeft',
            },
            {
              label: __('Fade out left big', 'fleximpleblocks'),
              value: 'fadeOutLeftBig',
            },
            {
              label: __('Fade out right', 'fleximpleblocks'),
              value: 'fadeOutRight',
            },
            {
              label: __('Fade out right big', 'fleximpleblocks'),
              value: 'fadeOutRightBig',
            },
            {
              label: __('Fade out top left', 'fleximpleblocks'),
              value: 'fadeOutTopLeft',
            },
            {
              label: __('Fade out top right', 'fleximpleblocks'),
              value: 'fadeOutTopRight',
            },
            {
              label: __('Fade out up', 'fleximpleblocks'),
              value: 'fadeOutUp',
            },
            {
              label: __('Fade out up big', 'fleximpleblocks'),
              value: 'fadeOutUpBig',
            },
            {
              label: __('— Flippers —', 'fleximpleblocks'),
              value: null,
              disabled: true,
            },
            { label: __('Flip', 'fleximpleblocks'), value: 'flip' },
            {
              label: __('Flip in X', 'fleximpleblocks'),
              value: 'flipInX',
            },
            {
              label: __('Flip in Y', 'fleximpleblocks'),
              value: 'flipInY',
            },
            {
              label: __('Flip out X', 'fleximpleblocks'),
              value: 'flipOutX',
            },
            {
              label: __('Flip out Y', 'fleximpleblocks'),
              value: 'flipOutY',
            },
            {
              label: __('— Light speed —', 'fleximpleblocks'),
              value: null,
              disabled: true,
            },
            {
              label: __('Light speed in left', 'fleximpleblocks'),
              value: 'lightSpeedInLeft',
            },
            {
              label: __('Light speed in right', 'fleximpleblocks'),
              value: 'lightSpeedInRight',
            },
            {
              label: __('Light speed out left', 'fleximpleblocks'),
              value: 'lightSpeedOutLeft',
            },
            {
              label: __('Light speed out right', 'fleximpleblocks'),
              value: 'lightSpeedOutRight',
            },
            {
              label: __('— Rotating entrances —', 'fleximpleblocks'),
              value: null,
              disabled: true,
            },
            {
              label: __('Rotate in', 'fleximpleblocks'),
              value: 'rotateIn',
            },
            {
              label: __('Rotate in down left', 'fleximpleblocks'),
              value: 'rotateInDownLeft',
            },
            {
              label: __('Rotate in down right', 'fleximpleblocks'),
              value: 'rotateInDownRight',
            },
            {
              label: __('Rotate in up left', 'fleximpleblocks'),
              value: 'rotateInUpLeft',
            },
            {
              label: __('Rotate in up right', 'fleximpleblocks'),
              value: 'rotateInUpRight',
            },
            {
              label: __('— Rotating exits —', 'fleximpleblocks'),
              value: null,
              disabled: true,
            },
            {
              label: __('Rotate out', 'fleximpleblocks'),
              value: 'rotateOut',
            },
            {
              label: __('Rotate out down left', 'fleximpleblocks'),
              value: 'rotateOutDownLeft',
            },
            {
              label: __('Rotate out down right', 'fleximpleblocks'),
              value: 'rotateOutDownRight',
            },
            {
              label: __('Rotate out up left', 'fleximpleblocks'),
              value: 'rotateOutUpLeft',
            },
            {
              label: __('Rotate out up right', 'fleximpleblocks'),
              value: 'rotateOutUpRight',
            },
            {
              label: __('— Sliding entrances —', 'fleximpleblocks'),
              value: null,
              disabled: true,
            },
            {
              label: __('Slide in down', 'fleximpleblocks'),
              value: 'slideInDown',
            },
            {
              label: __('Slide in left', 'fleximpleblocks'),
              value: 'slideInLeft',
            },
            {
              label: __('Slide in right', 'fleximpleblocks'),
              value: 'slideInRight',
            },
            {
              label: __('Slide in up', 'fleximpleblocks'),
              value: 'slideInUp',
            },
            {
              label: __('— Sliding exits —', 'fleximpleblocks'),
              value: null,
              disabled: true,
            },
            {
              label: __('Slide out down', 'fleximpleblocks'),
              value: 'slideOutDown',
            },
            {
              label: __('Slide out left', 'fleximpleblocks'),
              value: 'slideOutLeft',
            },
            {
              label: __('Slide out right', 'fleximpleblocks'),
              value: 'slideOutRight',
            },
            {
              label: __('Slide out up', 'fleximpleblocks'),
              value: 'slideOutUp',
            },
            {
              label: __('— Specials —', 'fleximpleblocks'),
              value: null,
              disabled: true,
            },
            {
              label: __('Hinge', 'fleximpleblocks'),
              value: 'hinge',
            },
            {
              label: __('Jack in the box', 'fleximpleblocks'),
              value: 'jackInTheBox',
            },
            {
              label: __('Roll in', 'fleximpleblocks'),
              value: 'rollIn',
            },
            {
              label: __('Roll out', 'fleximpleblocks'),
              value: 'rollOut',
            },
            {
              label: __('— Zooming entrances —', 'fleximpleblocks'),
              value: null,
              disabled: true,
            },
            {
              label: __('Zoom in', 'fleximpleblocks'),
              value: 'zoomIn',
            },
            {
              label: __('Zoom in down', 'fleximpleblocks'),
              value: 'zoomInDown',
            },
            {
              label: __('Zoom in left', 'fleximpleblocks'),
              value: 'zoomInLeft',
            },
            {
              label: __('Zoom in right', 'fleximpleblocks'),
              value: 'zoomInRight',
            },
            {
              label: __('Zoom in up', 'fleximpleblocks'),
              value: 'zoomInUp',
            },
            {
              label: __('— Zooming exits —', 'fleximpleblocks'),
              value: null,
              disabled: true,
            },
            {
              label: __('Zoom out', 'fleximpleblocks'),
              value: 'zoomOut',
            },
            {
              label: __('Zoom out down', 'fleximpleblocks'),
              value: 'zoomOutDown',
            },
            {
              label: __('Zoom out left', 'fleximpleblocks'),
              value: 'zoomOutLeft',
            },
            {
              label: __('Zoom out right', 'fleximpleblocks'),
              value: 'zoomOutRight',
            },
            {
              label: __('Zoom out up', 'fleximpleblocks'),
              value: 'zoomOutUp',
            },
          ]}
          onChange={this.updateAnimation}
        />

        {this.state.animation !== 'none' && (
          <>
            <div className="fleximple-components-control__row">
              <SelectControl
                label={__('Delay', 'fleximpleblocks')}
                labelPosition="top"
                value={this.state.delay}
                options={[
                  {
                    label: __('None', 'fleximpleblocks'),
                    value: 'default',
                  },
                  {
                    label: __('1 second', 'fleximpleblocks'),
                    value: '1s',
                  },
                  {
                    label: __('2 seconds', 'fleximpleblocks'),
                    value: '2s',
                  },
                  {
                    label: __('3 seconds', 'fleximpleblocks'),
                    value: '3s',
                  },
                  {
                    label: __('4 seconds', 'fleximpleblocks'),
                    value: '4s',
                  },
                  {
                    label: __('5 seconds', 'fleximpleblocks'),
                    value: '5s',
                  },
                ]}
                onChange={this.updateDelay}
              />

              <SelectControl
                label={__('Duration', 'fleximpleblocks')}
                labelPosition="top"
                value={this.state.duration}
                options={[
                  {
                    label: __('Faster', 'fleximpleblocks'),
                    value: 'faster',
                  },
                  {
                    label: __('Fast', 'fleximpleblocks'),
                    value: 'fast',
                  },
                  {
                    label: __('Default', 'fleximpleblocks'),
                    value: 'default',
                  },
                  {
                    label: __('Slow', 'fleximpleblocks'),
                    value: 'slow',
                  },
                  {
                    label: __('Slower', 'fleximpleblocks'),
                    value: 'slower',
                  },
                ]}
                onChange={this.updateDuration}
              />
            </div>

            <SelectControl
              label={__('Repeat', 'fleximpleblocks')}
              labelPosition="side"
              value={this.state.repeat}
              options={[
                {
                  label: __('1 time', 'fleximpleblocks'),
                  value: 'default',
                },
                {
                  label: __('2 times', 'fleximpleblocks'),
                  value: 'repeat-2',
                },
                {
                  label: __('3 times', 'fleximpleblocks'),
                  value: 'repeat-3',
                },
                {
                  label: __('Infinitely', 'fleximpleblocks'),
                  value: 'infinite',
                },
              ]}
              onChange={this.updateRepeat}
            />
          </>
        )}
      </>
    )
  }
}

export default AnimationControls
