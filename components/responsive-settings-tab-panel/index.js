/**
 * COMPONENT: Tab Panel: Responsive
 */

/**
 * Internal dependencies
 */
import { tabIcons } from '../icons'

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n'
import { TabPanel, Tooltip } from '@wordpress/components'

export function ResponsiveSettingsTabPanel({ initialTabName, children }) {
  return (
    <TabPanel
      className="fleximple-components-tab-panel fleximple-components"
      activeClass="is-active"
      initialTabName={ initialTabName }
      tabs={ [
        {
          name: 'small',
          title: <Tooltip text={ __( 'Small screens' ) }>{ tabIcons.mobile }</Tooltip>,
          className: 'fleximple-components-tab-panel__tab tab--small',
        },
        {
          name: 'medium',
          title: <Tooltip text={ __( 'Medium screens' ) }>{ tabIcons.tablet }</Tooltip>,
          className: 'fleximple-components-tab-panel__tab tab-medium',
        },
        {
          name: 'large',
          title: <Tooltip text={ __( 'Large screens' ) }>{ tabIcons.desktop }</Tooltip>,
          className: 'fleximple-components-tab-panel__tab tab-large',
        },
      ] }
    >
      { children }
    </TabPanel>
  )
}

export default ResponsiveSettingsTabPanel
