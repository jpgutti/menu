import classNames from 'classnames'
import React from 'react'
import { defineMessages } from 'react-intl'

const Submenu : StorefrontFunctionComponent<SubmenuProps> = (props) => {
  return (
    <div className={`${props.width === '100%' ? '' : 'relative'}`}>
      <div className={classNames('absolute left-0 bg-base pv4 bw1 bb b--muted-3 z-2', {
        'dn': !props.isHovered,
        'flex': props.isHovered,
        'w-100': props.width === '100%',
        'w-auto ml6': props.width === 'auto',
      })}>
        <section className="w-100 flex justify-center">
          {props.children}
        </section>
      </div>
    </div>
  )
}

interface SubmenuProps extends SubmenuSchema {
  isHovered: boolean
  positionTop: string
}

interface SubmenuSchema {
  width: '100%' | 'auto'
}

const messages = defineMessages({
  submenuTitle: {
    defaultMessage: '',
    id: 'editor.menu.submenu.title',
  },
  submenuWidthTitle: {
    defaultMessage: '',
    id: 'editor.menu.item.submenuWidth.title',
  },
})

// tslint:disable: object-literal-sort-keys
Submenu.schema = {
  title: messages.submenuTitle.id,
  type: 'object',
  properties: {
    submenuWidth: {
      title: messages.submenuWidthTitle.id,
      enum: ['100%', 'auto'],
      default: 'auto',
    },
  },
}

export default Submenu