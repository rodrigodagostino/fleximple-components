/**
 * COMPONENT: Spacing Panel
 */

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n'
import { PanelBody } from '@wordpress/components'

/**
 * Internal dependencies
 */
import ResponsiveSettingsTabPanel from '../responsive-settings-tab-panel'
import SpacingControl from '../spacing-control'

const DEFAULT_CONTROLS = [
  'min-height',
  'margin-top',
  'margin-bottom',
  'padding-top',
  'padding-bottom',
]

export function SpacingPanel({
  title,
  controls = DEFAULT_CONTROLS,
  initialOpen,
  attributes: {
    gap,
    minHeight,
    contentWidth,
    contentGap,
    margin,
    marginTop,
    marginLeft,
    marginRight,
    marginBottom,
    padding,
    paddingTop,
    paddingLeft,
    paddingRight,
    paddingBottom,
  },
  setAttributes,
  isResponsive = true,
}) {
  if (!isResponsive) {
    return (
      <PanelBody title={title} initialOpen={initialOpen}>
        {controls.map((control, index) => {
          if ('gap' === control) {
            return (
              <SpacingControl
                key={index}
                valueLabel={__('Gap size', 'fleximpleblocks')}
                unitLabel={__('Gap size unit', 'fleximpleblocks')}
                initialPosition={0}
                min={0}
                max={200}
                attribute={gap}
                onChange={(value) => setAttributes({ gap: value })}
                isResponsive={false}
              />
            )
          }

          if ('min-height' === control) {
            return (
              <SpacingControl
                key={index}
                valueLabel={__('Minimum height', 'fleximpleblocks')}
                unitLabel={__('Minimum height unit', 'fleximpleblocks')}
                className="gap-v-small"
                initialPosition={0}
                min={0}
                max={1200}
                attribute={minHeight}
                onChange={(value) => setAttributes({ minHeight: value })}
                isResponsive={false}
              />
            )
          }

          if ('content-width' === control) {
            return (
              <SpacingControl
                key={index}
                valueLabel={__('Content width', 'fleximpleblocks')}
                unitLabel={__('Content width unit', 'fleximpleblocks')}
                className="gap-v-small"
                initialPosition={100}
                min={0}
                max={1000}
                attribute={contentWidth}
                onChange={(value) => setAttributes({ contentWidth: value })}
                isResponsive={false}
              />
            )
          }

          if ('content-gap' === control) {
            return (
              <SpacingControl
                key={index}
                valueLabel={__('Content gap', 'fleximpleblocks')}
                unitLabel={__('Content gap unit', 'fleximpleblocks')}
                initialPosition={0}
                min={0}
                max={200}
                attribute={contentGap}
                onChange={(value) => setAttributes({ contentGap: value })}
                isResponsive={false}
              />
            )
          }

          if ('margin' === control) {
            return (
              <SpacingControl
                key={index}
                valueLabel={__('Margin', 'fleximpleblocks')}
                unitLabel={__('Margin unit', 'fleximpleblocks')}
                className="gap-v-small"
                initialPosition={0}
                min={0}
                max={500}
                attribute={margin}
                onChange={(value) => setAttributes({ margin: value })}
                isResponsive={false}
              />
            )
          }

          if ('margin-top' === control) {
            return (
              <SpacingControl
                key={index}
                valueLabel={__('Top margin', 'fleximpleblocks')}
                unitLabel={__('Top margin unit', 'fleximpleblocks')}
                className="gap-v-small"
                initialPosition={0}
                min={-500}
                max={500}
                attribute={marginTop}
                onChange={(value) => setAttributes({ marginTop: value })}
                isResponsive={false}
              />
            )
          }

          if ('margin-left' === control) {
            return (
              <SpacingControl
                key={index}
                valueLabel={__('Left margin', 'fleximpleblocks')}
                unitLabel={__('Left margin unit', 'fleximpleblocks')}
                className="gap-v-small"
                initialPosition={0}
                min={-500}
                max={500}
                attribute={marginLeft}
                onChange={(value) => setAttributes({ marginLeft: value })}
                isResponsive={false}
              />
            )
          }

          if ('margin-right' === control) {
            return (
              <SpacingControl
                key={index}
                valueLabel={__('Right margin', 'fleximpleblocks')}
                unitLabel={__('Right margin unit', 'fleximpleblocks')}
                className="gap-v-small"
                initialPosition={0}
                min={-500}
                max={500}
                attribute={marginRight}
                onChange={(value) => setAttributes({ marginRight: value })}
                isResponsive={false}
              />
            )
          }

          if ('margin-bottom' === control) {
            return (
              <SpacingControl
                key={index}
                valueLabel={__('Bottom margin', 'fleximpleblocks')}
                unitLabel={__('Bottom margin unit', 'fleximpleblocks')}
                initialPosition={0}
                min={-500}
                max={500}
                attribute={marginBottom}
                onChange={(value) => setAttributes({ marginBottom: value })}
                isResponsive={false}
              />
            )
          }

          if ('padding' === control) {
            return (
              <SpacingControl
                key={index}
                valueLabel={__('Padding', 'fleximpleblocks')}
                unitLabel={__('Padding unit', 'fleximpleblocks')}
                className="gap-v-small"
                initialPosition={0}
                min={0}
                max={500}
                attribute={padding}
                onChange={(value) => setAttributes({ padding: value })}
                isResponsive={false}
              />
            )
          }

          if ('padding-top' === control) {
            return (
              <SpacingControl
                key={index}
                valueLabel={__('Top padding', 'fleximpleblocks')}
                unitLabel={__('Top padding unit', 'fleximpleblocks')}
                className="gap-v-small"
                initialPosition={0}
                min={0}
                max={500}
                attribute={paddingTop}
                onChange={(value) => setAttributes({ paddingTop: value })}
                isResponsive={false}
              />
            )
          }

          if ('padding-left' === control) {
            return (
              <SpacingControl
                key={index}
                valueLabel={__('Left padding', 'fleximpleblocks')}
                unitLabel={__('Left padding unit', 'fleximpleblocks')}
                className="gap-v-small"
                initialPosition={0}
                min={0}
                max={500}
                attribute={paddingLeft}
                onChange={(value) => setAttributes({ paddingLeft: value })}
                isResponsive={false}
              />
            )
          }

          if ('padding-right' === control) {
            return (
              <SpacingControl
                key={index}
                valueLabel={__('Right padding', 'fleximpleblocks')}
                unitLabel={__('Right padding unit', 'fleximpleblocks')}
                className="gap-v-small"
                initialPosition={0}
                min={0}
                max={500}
                attribute={paddingRight}
                onChange={(value) => setAttributes({ paddingRight: value })}
                isResponsive={false}
              />
            )
          }

          if ('padding-bottom' === control) {
            return (
              <SpacingControl
                key={index}
                valueLabel={__('Bottom padding', 'fleximpleblocks')}
                unitLabel={__('Bottom padding unit', 'fleximpleblocks')}
                initialPosition={0}
                min={0}
                max={500}
                attribute={paddingBottom}
                onChange={(value) => setAttributes({ paddingBottom: value })}
                isResponsive={false}
              />
            )
          }
        })}
      </PanelBody>
    )
  }

  return (
    <PanelBody title={title} initialOpen={initialOpen}>
      <ResponsiveSettingsTabPanel initialTabName="small">
        {(tab) => (
          <>
            {controls.map((control, index) => {
              if ('gap' === control) {
                return (
                  <SpacingControl
                    key={index}
                    valueLabel={__('Gap size', 'fleximpleblocks')}
                    unitLabel={__('Gap size unit', 'fleximpleblocks')}
                    initialPosition={0}
                    min={0}
                    max={200}
                    attribute={gap}
                    target={tab.name}
                    onChange={(value) => setAttributes({ gap: value })}
                  />
                )
              }

              if ('min-height' === control) {
                return (
                  <SpacingControl
                    key={index}
                    valueLabel={__('Minimum height', 'fleximpleblocks')}
                    unitLabel={__('Minimum height unit', 'fleximpleblocks')}
                    className="gap-v-small"
                    initialPosition={0}
                    min={0}
                    max={1200}
                    attribute={minHeight}
                    target={tab.name}
                    onChange={(value) => setAttributes({ minHeight: value })}
                  />
                )
              }

              if ('content-width' === control) {
                return (
                  <SpacingControl
                    key={index}
                    valueLabel={__('Content width', 'fleximpleblocks')}
                    unitLabel={__('Content width unit', 'fleximpleblocks')}
                    className="gap-v-small"
                    initialPosition={100}
                    min={0}
                    max={1000}
                    attribute={contentWidth}
                    target={tab.name}
                    onChange={(value) => setAttributes({ contentWidth: value })}
                  />
                )
              }

              if ('content-gap' === control) {
                return (
                  <SpacingControl
                    key={index}
                    valueLabel={__('Content gap', 'fleximpleblocks')}
                    unitLabel={__('Content gap unit', 'fleximpleblocks')}
                    initialPosition={0}
                    min={0}
                    max={200}
                    attribute={contentGap}
                    target={tab.name}
                    onChange={(value) => setAttributes({ contentGap: value })}
                  />
                )
              }

              if ('margin' === control) {
                return (
                  <SpacingControl
                    key={index}
                    valueLabel={__('Margin', 'fleximpleblocks')}
                    unitLabel={__('Margin unit', 'fleximpleblocks')}
                    className="gap-v-small"
                    initialPosition={0}
                    min={0}
                    max={500}
                    attribute={margin}
                    target={tab.name}
                    onChange={(value) => setAttributes({ margin: value })}
                  />
                )
              }

              if ('margin-top' === control) {
                return (
                  <SpacingControl
                    key={index}
                    valueLabel={__('Top margin', 'fleximpleblocks')}
                    unitLabel={__('Top margin unit', 'fleximpleblocks')}
                    className="gap-v-small"
                    initialPosition={0}
                    min={-500}
                    max={500}
                    attribute={marginTop}
                    target={tab.name}
                    onChange={(value) => setAttributes({ marginTop: value })}
                  />
                )
              }

              if ('margin-left' === control) {
                return (
                  <SpacingControl
                    key={index}
                    valueLabel={__('Left margin', 'fleximpleblocks')}
                    unitLabel={__('Left margin unit', 'fleximpleblocks')}
                    className="gap-v-small"
                    initialPosition={0}
                    min={-500}
                    max={500}
                    attribute={marginLeft}
                    target={tab.name}
                    onChange={(value) => setAttributes({ marginLeft: value })}
                  />
                )
              }

              if ('margin-right' === control) {
                return (
                  <SpacingControl
                    key={index}
                    valueLabel={__('Right margin', 'fleximpleblocks')}
                    unitLabel={__('Right margin unit', 'fleximpleblocks')}
                    className="gap-v-small"
                    initialPosition={0}
                    min={-500}
                    max={500}
                    attribute={marginRight}
                    target={tab.name}
                    onChange={(value) => setAttributes({ marginRight: value })}
                  />
                )
              }

              if ('margin-bottom' === control) {
                return (
                  <SpacingControl
                    key={index}
                    valueLabel={__('Bottom margin', 'fleximpleblocks')}
                    unitLabel={__('Bottom margin unit', 'fleximpleblocks')}
                    initialPosition={0}
                    min={-500}
                    max={500}
                    attribute={marginBottom}
                    target={tab.name}
                    onChange={(value) => setAttributes({ marginBottom: value })}
                  />
                )
              }

              if ('padding' === control) {
                return (
                  <SpacingControl
                    key={index}
                    valueLabel={__('Padding', 'fleximpleblocks')}
                    unitLabel={__('Padding unit', 'fleximpleblocks')}
                    className="gap-v-small"
                    initialPosition={0}
                    min={0}
                    max={500}
                    attribute={padding}
                    target={tab.name}
                    onChange={(value) => setAttributes({ padding: value })}
                  />
                )
              }

              if ('padding-top' === control) {
                return (
                  <SpacingControl
                    key={index}
                    valueLabel={__('Top padding', 'fleximpleblocks')}
                    unitLabel={__('Top padding unit', 'fleximpleblocks')}
                    className="gap-v-small"
                    initialPosition={0}
                    min={0}
                    max={500}
                    attribute={paddingTop}
                    target={tab.name}
                    onChange={(value) => setAttributes({ paddingTop: value })}
                  />
                )
              }

              if ('padding-left' === control) {
                return (
                  <SpacingControl
                    key={index}
                    valueLabel={__('Left padding', 'fleximpleblocks')}
                    unitLabel={__('Left padding unit', 'fleximpleblocks')}
                    className="gap-v-small"
                    initialPosition={0}
                    min={0}
                    max={500}
                    attribute={paddingLeft}
                    target={tab.name}
                    onChange={(value) => setAttributes({ paddingLeft: value })}
                  />
                )
              }

              if ('padding-right' === control) {
                return (
                  <SpacingControl
                    key={index}
                    valueLabel={__('Right padding', 'fleximpleblocks')}
                    unitLabel={__('Right padding unit', 'fleximpleblocks')}
                    className="gap-v-small"
                    initialPosition={0}
                    min={0}
                    max={500}
                    attribute={paddingRight}
                    target={tab.name}
                    onChange={(value) => setAttributes({ paddingRight: value })}
                  />
                )
              }

              if ('padding-bottom' === control) {
                return (
                  <SpacingControl
                    key={index}
                    valueLabel={__('Bottom padding', 'fleximpleblocks')}
                    unitLabel={__('Bottom padding unit', 'fleximpleblocks')}
                    initialPosition={0}
                    min={0}
                    max={500}
                    attribute={paddingBottom}
                    target={tab.name}
                    onChange={(value) =>
                      setAttributes({ paddingBottom: value })
                    }
                  />
                )
              }
            })}
          </>
        )}
      </ResponsiveSettingsTabPanel>
    </PanelBody>
  )
}

export default SpacingPanel
