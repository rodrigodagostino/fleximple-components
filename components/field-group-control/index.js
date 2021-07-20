/**
 * WordPress dependencies
 */
const { useInstanceId } = wp.compose
const { BaseControl } = wp.components


export default function InputGroup( {
	label,
	hideLabelFromVision,
	value,
	help,
	className,
	prepend = false,
	prependText = null,
	append = false,
	appendText = null,
	onChange,
	type = 'text',
	...props
} ) {
	const instanceId = useInstanceId( InputGroup )
	const id = `fleximple-components-field-group-control-${ instanceId }`
	const classes = 'fleximple-components-field-group-control'
	const onChangeValue = ( event ) => onChange( event.target.value )

	return (
		<BaseControl
			label={ label }
			hideLabelFromVision={ hideLabelFromVision }
			id={ id }
			help={ help }
			className={ className }
		>
			<div className={ classes }>
				{ !! prepend &&
				<div className={ `${ classes }__prepend` }>
					<span className={ `${ classes }__prepend-text` }>{ prependText }</span>
				</div>
				}
				<input
					className={ `${ classes }__input` }
					type={ type }
					id={ id }
					value={ value }
					onChange={ onChangeValue }
					aria-describedby={ !! help ? id + '__help' : undefined }
					{ ...props }
				/>
				{ !! append &&
				<div className={ `${ classes }__append` }>
					<span className={ `${ classes }__append-text` }>{ appendText }</span>
				</div>
				}
			</div>
		</BaseControl>
	)
}
