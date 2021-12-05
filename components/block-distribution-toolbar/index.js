/**
 * COMPONENT: Block Distribution Toolbar
 */

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n'
import { ToolbarGroup } from '@wordpress/components'
import { withViewportMatch } from '@wordpress/viewport'
import { withSelect } from '@wordpress/data'
import { compose } from '@wordpress/compose'

/**
 * Internal dependencies
 */
import { toolbarIcons } from '../interface-icons'


const BLOCK_DISTRIBUTIONS_CONTROLS = {
  left: {
    icon: toolbarIcons.distributionLeft,
    title: __( 'Distribute left', 'fleximpleblocks' ),
  },
  center: {
    icon: toolbarIcons.distributionCenter,
    title: __( 'Distribute center', 'fleximpleblocks' ),
  },
  right: {
    icon: toolbarIcons.distributionRight,
    title: __( 'Distribute right', 'fleximpleblocks' ),
  },
  full: {
    icon: toolbarIcons.distributionFull,
    title: __( 'Distribute full', 'fleximpleblocks' ),
  },
}

const DEFAULT_CONTROLS = [ 'left', 'center', 'right', 'full' ]
const DEFAULT_CONTROL = 'left'

export function BlockDistributionToolbar({ isCollapsed, value, onChange, controls = DEFAULT_CONTROLS }) {
  function applyOrUnset( alignment ) {
    return () => onChange( value === alignment ? undefined : alignment )
  }

  const activeAlignment = BLOCK_DISTRIBUTIONS_CONTROLS[ value ]
  const defaultAlignmentControl = BLOCK_DISTRIBUTIONS_CONTROLS[ DEFAULT_CONTROL ]

  return (
    <ToolbarGroup
      isCollapsed={ isCollapsed }
      icon={ activeAlignment ? activeAlignment.icon : defaultAlignmentControl.icon }
      label={ __( 'Change distribution', 'fleximpleblocks' ) }
      controls={
        controls.map( control => {
          return {
            ...BLOCK_DISTRIBUTIONS_CONTROLS[ control ],
            isActive: value === control,
            onClick: applyOrUnset( control ),
          }
        })
      }
    />
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
)( BlockDistributionToolbar )
