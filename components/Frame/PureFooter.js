import React from 'react'
import { css } from 'glamor'
import 'glamor/reset'
import IconLink from '../IconLink'
import { mediaQueries, fontFamilies, Label } from '@project-r/styleguide'
import { EMAIL_CONTACT } from '../../lib/constants'
import { prefixHover } from '../../lib/utils/hover'

css.global('html', { boxSizing: 'border-box' })
css.global('*, *:before, *:after', { boxSizing: 'inherit' })

export const SPACE = 60

const linkRule = css({
  textDecoration: 'none',
  color: 'inherit',
  [prefixHover()]: {
    opacity: 0.6
  }
})

export const A = ({ children, ...props }) => (
  <a {...props} {...linkRule}>
    {children}
  </a>
)

const styles = {
  container: css({
    marginTop: SPACE * 2,
    paddingBottom: SPACE,
    textAlign: 'center'
  }),
  nav: css({
    marginTop: SPACE,
    marginBottom: SPACE,
    [mediaQueries.mUp]: {
      marginTop: SPACE,
      marginBottom: SPACE * 2
    }
  }),
  mainNav: css({
    fontFamily: fontFamilies.sansSerifRegular,
    fontSize: 44,
    lineHeight: '60px'
  }),
  address: css({
    lineHeight: 1.6,
    fontStyle: 'normal'
  })
}

const Footer = ({ inverted, en }) => (
  <div {...styles.container}>
    <div {...styles.nav}>
      {!!en && <Label>Read more in German</Label>}
      <div {...styles.mainNav}>
        <br />
        <A href='https://project-r.construction/' target='_blank' rel='noopener'>
          Project R
        </A>
      </div>
    </div>

    <address {...styles.address} style={{ marginBottom: 20 }}>
      <A href='https://goo.gl/maps/j1F8cXQhrmo' target='_blank' rel='noopener'>
        Republik AG<br />
        Sihlhallenstrasse 1<br />
        8004 Zürich<br />
        {!!en && (
          <span>
            Switzerland<br />
          </span>
        )}
      </A>
      <A href={`mailto:${EMAIL_CONTACT}`}>{EMAIL_CONTACT}</A>
    </address>

    <IconLink
      fill={inverted ? '#fff' : '#000'}
      icon='facebook'
      href='https://www.facebook.com/RepublikMagazin'
      target='_blank'
    />
    <IconLink
      fill={inverted ? '#fff' : '#000'}
      icon='twitter'
      href='https://twitter.com/RepublikMagazin'
      target='_blank'
    />
  </div>
)

export default Footer
