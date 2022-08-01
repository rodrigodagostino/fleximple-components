/**
 * COMPONENT: Icon Picker
 */

/**
 * WordPress dependencies
 */
import { BaseControl, RangeControl } from '@wordpress/components'
import { withInstanceId } from '@wordpress/compose'

/**
 * Internal dependencies
 */
import Select from 'react-select'
import { fontAwesomeIcons } from './definitions'

const groupStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}

const groupBadgeStyles = {
  display: 'inline-block',
  minWidth: 1,
  padding: '0.125rem 0.5rem',
  borderRadius: '2rem',
  backgroundColor: 'var(--gray-050)',
  fontSize: 12,
  fontWeight: 'normal',
  lineHeight: '1',
  color: 'var(--black)',
  textAlign: 'center',
}

const formatGroupLabel = (data) => (
  <div style={groupStyles}>
    <span>{data.label}</span>
    <span style={groupBadgeStyles}>{data.options.length}</span>
  </div>
)

const labelStyles = { display: 'flex', alignItems: 'center', gap: '0.5rem' }

const labelIconStyles = {
  fontSize: '1.25rem',
  width: '1.5rem',
  textAlign: 'center',
}

const getOptionLabel = (e) => (
  <div style={labelStyles}>
    <i className={e.value} style={labelIconStyles} />
    <span>{e.label}</span>
  </div>
)

export function IconPicker({ icons, sizes, instanceId }) {
  const id = `fleximple-components-icon-picker-controls-${instanceId}`
  const className = 'fleximple-components-icon-picker-controls'

  return (
    <>
      <div className={className}>
        <div className="fleximple-components-control__row">
          {icons.map((icon, i) => (
            <BaseControl
              key={i}
              label={icon.label}
              className="fleximple-components-select-control"
              id={id}
            >
              <div className={className} id={id}>
                <Select
                  className="react-select-container"
                  classNamePrefix="react-select"
                  defaultValue={icon.value}
                  options={fontAwesomeIcons}
                  formatGroupLabel={formatGroupLabel}
                  getOptionLabel={getOptionLabel}
                  onChange={icon.onChange}
                />
              </div>
            </BaseControl>
          ))}
        </div>

        {sizes.map((size, i) => (
          <RangeControl
            key={i}
            label={size.label}
            initialPosition={size.initialPosition}
            min={size.min}
            max={size.max}
            value={size.value}
            onChange={size.onChange}
          />
        ))}
      </div>
    </>
  )
}

export default withInstanceId(IconPicker)
