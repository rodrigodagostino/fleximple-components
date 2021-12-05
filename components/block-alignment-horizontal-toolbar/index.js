/**
 * COMPONENT: Block Horizontal Alignment Toolbar
 */

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n'
import { ToolbarGroup } from '@wordpress/components'
import { withViewportMatch } from '@wordpress/viewport'
import { withSelect } from '@wordpress/data'
import { compose } from '@wordpress/compose'
import { } from '@wordpress/element'

/**
 * Internal dependencies
 */
import { toolbarIcons } from '../icons'


const BLOCK_ALIGNMENTS_CONTROLS = {
  start: {
    icon: toolbarIcons.alignmentHorizontalStart,
    title: __( 'Align start', 'fleximpleblocks' ),
  },
  center: {
    icon: toolbarIcons.alignmentHorizontalCenter,
    title: __( 'Align center', 'fleximpleblocks' ),
  },
  end: {
    icon: toolbarIcons.alignmentHorizontalEnd,
    title: __( 'Align end', 'fleximpleblocks' ),
  },
  'space-evenly': {
    icon: toolbarIcons.alignmentHorizontalSpaceEvenly,
    title: __( 'Align space evenly', 'fleximpleblocks' ),
  },
  'space-around': {
    icon: toolbarIcons.alignmentHorizontalSpaceAround,
    title: __( 'Align space around', 'fleximpleblocks' ),
  },
  'space-between': {
    icon: toolbarIcons.alignmentHorizontalSpaceBetween,
    title: __( 'Align space between', 'fleximpleblocks' ),
  },
}

const DEFAULT_CONTROLS = [ 'start', 'center', 'end', 'space-evenly', 'space-around', 'space-between' ]
const DEFAULT_CONTROL = 'start'
const SPACE_CONTROLS = [ 'space-evenly', 'space-around', 'space-between' ]

export function BlockAlignmentHorizontalToolbar({ isCollapsed, value, onChange, controls = DEFAULT_CONTROLS, spaceControlsEnabled = false }) {
  function applyOrUnset( alignment ) {
    return () => onChange( value === alignment ? undefined : alignment )
  }

  const enabledControls = spaceControlsEnabled ?
    controls :
    controls.filter( control => SPACE_CONTROLS.indexOf( control ) === -1 )

  const activeAlignment = BLOCK_ALIGNMENTS_CONTROLS[ value ]
  const defaultAlignmentControl = BLOCK_ALIGNMENTS_CONTROLS[ DEFAULT_CONTROL ]

  return (
    <>
      <ToolbarGroup
        isCollapsed={ isCollapsed }
        icon={ activeAlignment ? activeAlignment.icon : defaultAlignmentControl.icon }
        label={ __( 'Change horizontal alignment', 'fleximpleblocks' ) }
        controls={
          enabledControls.map( control => {
            return {
              ...BLOCK_ALIGNMENTS_CONTROLS[ control ],
              isActive: value === control,
              onClick: applyOrUnset( control ),
            }
          })
        }
      />
    </>
  )
}

export default compose(
  withViewportMatch({ isLargeViewport: 'medium' }),
  withSelect( ( select, { clientId, isLargeViewport, isCollapsed }) => {
    const { getBlockRootClientId, getSettings } = select( 'core/block-editor' )
    const settings = getSettings()
    return {
      wideControlsEnabled: settings.alignWide,
      isCollapsed: isCollapsed || !isLargeViewport ||
				!settings.hasFixedToolbar &&
				getBlockRootClientId( clientId )
      ,
    }
  }),
)( BlockAlignmentHorizontalToolbar )
