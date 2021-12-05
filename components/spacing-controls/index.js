/**
 * COMPONENT: Spacing Controls
 */

/**
 * WordPress dependencies
 */
import { RangeControl, SelectControl } from '@wordpress/components'

export function SpacingControls({
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
  if ( !isResponsive ) {
    return (
      <div className={ `fleximple-components-spacing-controls fleximple-components-control__row gap-h-none width-80-20 flex-end${ className ? ' ' + className : '' }` }>
        <RangeControl
          label={ valueLabel }
          className="fleximple-components-spacing-controls__value-range"
          initialPosition={ initialPosition }
          min={ min === 0 ? min : attribute.unit === 'px' ? min : min / 10 }
          max={ attribute.unit === 'px' ? max : max / 10 }
          step={ attribute.unit === 'em' || attribute.unit === 'rem' ? 0.1 : 1 }
          value={ attribute.value }
          onChange={ value => {
            const newObj = JSON.parse( JSON.stringify( attribute ) )
            newObj.value = value
            onChange( newObj )
          } }
        />

        <SelectControl
          label={ unitLabel }
          labelPosition="top"
          hideLabelFromVision={ true }
          className="fleximple-components-spacing-controls__unit-select"
          value={ attribute.unit }
          options={ [
            { label: 'px', value: 'px' },
            { label: 'em', value: 'em' },
            { label: 'rem', value: 'rem' },
            { label: '%', value: '%' },
            { label: 'vw', value: 'vw' },
            { label: 'vh', value: 'vh' },
          ] }
          onChange={ value => {
            const newObj = JSON.parse( JSON.stringify( attribute ) )
            newObj.unit = value
            onChange( newObj )
          } }
        />
      </div>
    )
  }

  return (
    <div className={ `fleximple-components-spacing-controls fleximple-components-control__row gap-h-none width-80-20 flex-end${ className ? ' ' + className : '' }` }>
      <RangeControl
        label={ valueLabel }
        className="fleximple-components-spacing-controls__value-range"
        initialPosition={ initialPosition }
        min={ min === 0 ? min : attribute[ target ].unit === 'px' ? min : min / 10 }
        max={ attribute[ target ].unit === 'px' ? max : max / 10 }
        step={ attribute[ target ].unit === 'em' || attribute[ target ].unit === 'rem' ? 0.1 : 1 }
        value={ attribute[ target ].value }
        onChange={ value => {
          const newObj = JSON.parse( JSON.stringify( attribute ) )
          newObj[ target ].value = value
          onChange( newObj )
        } }
      />

      <SelectControl
        label={ unitLabel }
        labelPosition="top"
        hideLabelFromVision={ true }
        className="fleximple-components-spacing-controls__unit-select"
        value={ attribute[ target ].unit }
        options={ [
          { label: 'px', value: 'px' },
          { label: 'em', value: 'em' },
          { label: 'rem', value: 'rem' },
          { label: '%', value: '%' },
          { label: 'vw', value: 'vw' },
          { label: 'vh', value: 'vh' },
        ] }
        onChange={ value => {
          const newObj = JSON.parse( JSON.stringify( attribute ) )
          newObj[ target ].unit = value
          onChange( newObj )
        } }
      />
    </div>
  )
}

export default SpacingControls
