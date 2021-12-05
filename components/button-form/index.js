/**
 * COMPONENT: Button Form
 */

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n'
import {
  Dashicon,
  Dropdown,
  Button,
  RadioControl,
} from '@wordpress/components'
import { URLInput } from '@wordpress/block-editor'


export function ButtonForm({
  attributes: { url, linkTarget },
  setAttributes,
  isSelected,
}) {
  return (
    <form
      className="fleximple-block-button__inline-link"
      onSubmit={ event => event.preventDefault() }>
      <Dashicon icon="admin-links" />

      <URLInput
        value={ url }
        /* eslint-disable jsx-a11y/no-autofocus */
        // Disable Reason: The rule is meant to prevent enabling auto-focus, not disabling it.
        autoFocus={ false }
        /* eslint-enable jsx-a11y/no-autofocus */
        onChange={ value => setAttributes({ url: value }) }
        disableSuggestions={ !isSelected }
        isFullWidth
      />

      <Button
        icon="editor-break" label={ __( 'Apply', 'fleximpleblocks' ) } type="submit"
      />

      <Dropdown
        className="editor-block-settings-menu__popover block-editor-block-settings-menu__popover"
        position="bottom left"
        renderToggle={ ({ isOpen, onToggle }) => (
          <Button
            icon="ellipsis"
            label={ __( 'More options', 'fleximpleblocks' ) }
            onClick={ onToggle }
            aria-expanded={ isOpen }
          />
        ) }
        // eslint-disable-next-line no-unused-vars
        renderContent={ ({ onClose }) => (
          <div className="fleximple-components-popover__row">
            <RadioControl
              selected={ linkTarget }
              options={ [
                { label: __( 'Open in current tab', 'fleximpleblocks' ), value: '_self' },
                { label: __( 'Open in new tab', 'fleximpleblocks' ), value: '_blank' },
                { label: __( 'Open in modal window', 'fleximpleblocks' ), value: '_modal' },
              ] }
              onChange={ value => setAttributes({ linkTarget: value }) }
            />
          </div>
        ) }
      />
    </form>
  )
}

export default ButtonForm
