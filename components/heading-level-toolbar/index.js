/**
 * WordPress dependencies
 */
import { __, sprintf } from '@wordpress/i18n'
import { ToolbarGroup } from '@wordpress/components'

/**
 * Internal dependencies
 */
import HeadingLevelIcon from './icon'

const range = (start, end) => {
  const arr = []
  for (let i = start; i <= end; i++) {
    arr.push(i)
  }
  return arr
}

const HeadingToolbar = ({
  isCollapsed = true,
  minLevel,
  maxLevel,
  selectedLevel,
  onChange,
}) => {
  const createLevelControl = (targetLevel, selectedLevel, onChange) => {
    const isActive = targetLevel === selectedLevel
    return {
      icon: <HeadingLevelIcon level={targetLevel} isPressed={isActive} />,
      // translators: %s: heading level e.g: "1", "2", "3"
      title: sprintf(__('Heading %d'), targetLevel),
      isActive,
      onClick: () => onChange(targetLevel),
    }
  }

  return (
    <ToolbarGroup
      isCollapsed={isCollapsed}
      icon={<HeadingLevelIcon level={selectedLevel} />}
      controls={range(minLevel, maxLevel).map((index) =>
        createLevelControl(index, selectedLevel, onChange)
      )}
      label={__('Change heading level')}
    />
  )
}

export default HeadingToolbar
