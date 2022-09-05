/**
 * COMPONENT: Spacing Controls
 */

/**
 * External dependencies
 */
import classNames from 'classnames'

/**
 * WordPress dependencies
 */
import { RangeControl, SelectControl } from '@wordpress/components'

export function SpacingControl({
  valueLabel,
  unitLabel,
  className,
  initialPosition,
  min,
  max,
  attribute,
  target,
  onChange,
  isResponsive = true,
}) {
  const classes = classNames('fleximple-components-spacing-control', {
    [className]: className,
    'fleximple-components-control__row': true,
    'gap-h-none': true,
    'width-80-20': true,
    'flex-end': true,
  })

  if (!isResponsive) {
    return (
      <div className={classes}>
        <RangeControl
          label={valueLabel}
          className="fleximple-components-spacing-control__value-range"
          initialPosition={initialPosition}
          min={min === 0 ? min : attribute.unit === 'px' ? min : min / 10}
          max={attribute.unit === 'px' ? max : max / 10}
          step={attribute.unit === 'em' || attribute.unit === 'rem' ? 0.1 : 1}
          value={attribute.value}
          onChange={(value) => {
            const newObj = JSON.parse(JSON.stringify(attribute))
            newObj.value = value
            onChange(newObj)
          }}
        />

        <SelectControl
          label={unitLabel}
          labelPosition="top"
          hideLabelFromVision={true}
          className="fleximple-components-spacing-control__unit-select"
          value={attribute.unit}
          options={[
            { label: 'px', value: 'px' },
            { label: 'em', value: 'em' },
            { label: 'rem', value: 'rem' },
            { label: '%', value: '%' },
            { label: 'vw', value: 'vw' },
            { label: 'vh', value: 'vh' },
          ]}
          onChange={(value) => {
            const newObj = JSON.parse(JSON.stringify(attribute))
            newObj.unit = value
            onChange(newObj)
          }}
        />
      </div>
    )
  }

  return (
    <div className={classes}>
      <RangeControl
        label={valueLabel}
        className="fleximple-components-spacing-control__value-range"
        initialPosition={initialPosition}
        min={min === 0 ? min : attribute[target].unit === 'px' ? min : min / 10}
        max={attribute[target].unit === 'px' ? max : max / 10}
        step={
          attribute[target].unit === 'em' || attribute[target].unit === 'rem'
            ? 0.1
            : 1
        }
        value={attribute[target].value}
        onChange={(value) => {
          const newObj = JSON.parse(JSON.stringify(attribute))
          newObj[target].value = value
          onChange(newObj)
        }}
      />

      <SelectControl
        label={unitLabel}
        labelPosition="top"
        hideLabelFromVision={true}
        className="fleximple-components-spacing-control__unit-select"
        value={attribute[target].unit}
        options={[
          { label: 'px', value: 'px' },
          { label: 'em', value: 'em' },
          { label: 'rem', value: 'rem' },
          { label: '%', value: '%' },
          { label: 'vw', value: 'vw' },
          { label: 'vh', value: 'vh' },
        ]}
        onChange={(value) => {
          const newObj = JSON.parse(JSON.stringify(attribute))
          newObj[target].unit = value
          onChange(newObj)
        }}
      />
    </div>
  )
}

export default SpacingControl
