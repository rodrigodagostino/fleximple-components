/**
 * External dependencies
 */
import ReactSelectControl from 'react-select'

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n'

/**
 * Internal dependencies
 */
import { BaseControl, RangeControl, SelectControl } from '@wordpress/components'

const DEFAULT_MIN_ITEMS = 1
const DEFAULT_MAX_ITEMS = 100


export default function QueryControls( {
	numberOfItems,
	offset,
	categoriesList,
	selectedCategories,
	selectedExcludedCategories,
	order,
	orderBy,
	maxItems = DEFAULT_MAX_ITEMS,
	minItems = DEFAULT_MIN_ITEMS,
	onNumberOfItemsChange,
	onOffsetChange,
	onCategoriesChange,
	onExcludedCategoriesChange,
	onOrderChange,
	onOrderByChange,
} ) {
	return [
		onNumberOfItemsChange && (
			<RangeControl
				key="query-controls-range-control"
				label={ __( 'Number of items' ) }
				className="gap-v-small"
				value={ numberOfItems }
				onChange={ onNumberOfItemsChange }
				min={ minItems }
				max={ maxItems }
				required
			/>
		),

		onOffsetChange && (
			<RangeControl
				label={ __( 'Offset', 'fleximpleblocks' ) }
				value={ offset }
				onChange={ onOffsetChange }
				min={ 0 }
				max={ 100 }
				required
			/>
		),

		onCategoriesChange && (
			<BaseControl
				label={ __( 'Categories', 'fleximpleblocks' ) }
				className="gap-v-small"
			>
				<ReactSelectControl
					className="react-select-container"
					classNamePrefix="react-select"
					placeholder={ __( 'Include category…', 'fleximpleblocks' ) }
					options={
						categoriesList.map( ( category ) => ( {
							label: category.name,
							value: category.id,
						} ) )
					}
					value={ selectedCategories }
					onChange={ onCategoriesChange }
					isMulti={ true }
					isSearchable={ false }
				/>
			</BaseControl>
		),

		onExcludedCategoriesChange && (
			<BaseControl label={ __( 'Excluded categories', 'fleximpleblocks' ) }>
				<ReactSelectControl
					className="react-select-container"
					classNamePrefix="react-select"
					placeholder={ __( 'Exclude category…', 'fleximpleblocks' ) }
					options={
						categoriesList.map( ( category ) => ( {
							label: category.name,
							value: category.id,
						} ) )
					}
					value={ selectedExcludedCategories }
					onChange={ onExcludedCategoriesChange }
					isMulti={ true }
					isSearchable={ false }
				/>
			</BaseControl>
		),

		onOrderChange && onOrderByChange && (
			<SelectControl
				key="query-controls-order-select"
				label={ __( 'Order by' ) }
				labelPosition="side"
				value={ `${ orderBy }/${ order }` }
				options={ [
					{
						label: __( 'Newest to oldest' ),
						value: 'date/desc',
					},
					{
						label: __( 'Oldest to newest' ),
						value: 'date/asc',
					},
					{
						/* translators: label for ordering posts by title in ascending order */
						label: __( 'A → Z' ),
						value: 'title/asc',
					},
					{
						/* translators: label for ordering posts by title in descending order */
						label: __( 'Z → A' ),
						value: 'title/desc',
					},
				] }
				onChange={ ( value ) => {
					const [ newOrderBy, newOrder ] = value.split( '/' )
					if ( newOrder !== order ) {
						onOrderChange( newOrder )
					}
					if ( newOrderBy !== orderBy ) {
						onOrderByChange( newOrderBy )
					}
				} }
			/>
		),
	]
}
