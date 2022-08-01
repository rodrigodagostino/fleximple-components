/**
 * COMPONENT: Spinner
 */

/**
 * External dependencies
 */
import classNames from 'classnames'

export default function Spinner({ size }) {
  const classes = classNames('fleximple-components-spinner', {
    ['size-small']: size === 'small',
    ['size-medium']: size === 'medium',
    ['size-large']: size === 'large',
  })

  return (
    <div className={classes}>
      <svg className="circular" viewBox="25 25 50 50">
        <circle
          className="path"
          cx="50"
          cy="50"
          r="20"
          fill="none"
          strokeWidth="6"
          strokeMiterlimit="10"
        />
      </svg>
    </div>
  )
}
