/**
 * COMPONENT: Icon Picker
 */

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n'
import { BaseControl, RangeControl } from '@wordpress/components'
import { withInstanceId } from '@wordpress/compose'
import { } from '@wordpress/element'

/**
 * Internal dependencies
 */
import FontIconPicker from '@fonticonpicker/react-fonticonpicker'
import { fontAwesomeIcons } from './definitions'


export function IconPicker( {
	icons,
	sizes,
	instanceId,
} ) {
	const id = `fleximple-components-icon-picker-controls-${ instanceId }`
	const className = 'fleximple-components-icon-picker-controls'

	return (
		<>
			<div className={ className }>
				<div className="fleximple-components-control__row">
					{ icons.map( ( icon, i ) => (
						<BaseControl
							key={ i }
							label={ icon.label }
							id={ id }
						>
							<div className={ className } id={ id }>
								<FontIconPicker
									icons={ fontAwesomeIcons }
									renderUsing={ 'class' }
									value={ icon.value }
									onChange={ icon.onChange }
									appendTo="body"
									isMulti={ false }
									searchPlaceholder={ __( 'Type the icon name…', 'fleximpleblocks' ) }
									noIconPlaceholder={ __( 'No icons found.', 'fleximpleblocks' ) }
									noSelectedPlaceholder={ __( 'Select icon', 'fleximpleblocks' ) }
								/>
							</div>
						</BaseControl>
					) ) }
				</div>

				{ sizes.map( ( size, i ) => (
					<RangeControl
						key={ i }
						label={ size.label }
						initialPosition={ size.initialPosition }
						min={ size.min }
						max={ size.max }
						value={ size.value }
						onChange={ size.onChange }
					/>
				) ) }
			</div>
		</>
	)
}

export default withInstanceId( IconPicker )
