import React from 'react'
import { css } from 'glamor'
import { compose } from 'react-apollo'
import { withRouter } from 'next/router'
import withT from '../lib/withT'

import Frame from '../components/Frame'

import {
  colors,
  CommentBodyBlockQuote,
  CommentBodyBlockQuoteParagraph,
  CommentBodyCode,
  CommentBodyHeading,
  CommentBodyList,
  CommentBodyListItem,
  CommentBodyParagraph,
  Editorial,
  Interaction,
  HR
} from '@project-r/styleguide'

import { PUBLIC_BASE_URL, CDN_FRONTEND_BASE_URL } from '../lib/constants'

const { P, A, Emphasis, Cursive, StrikeThrough } = Editorial

const styles = {
  table: css({
    '& th': {
      borderBottom: `1px solid ${colors.divider}`,
      padding: '0 40px 20px 0',
      textAlign: 'left'
    },
    '& td': {
      padding: '20px 40px 0 0'
    }
  })
}

export default compose(
  withT, withRouter
)(({ router, t }) => {
  const meta = {
    pageTitle: t('markdown/pageTitle'),
    title: t('markdown/title'),
    description: t('markdown/description'),
    image: `${CDN_FRONTEND_BASE_URL}/static/social-media/markdown.png`,
    url: `${PUBLIC_BASE_URL}${router.pathname}`
  }

  return (
    <Frame meta={meta}>
      <Interaction.H1>Markdown</Interaction.H1>
      <P>Sie wollen in einer Debatte eine Quelle verlinken oder einen Begriff hervorheben? Das können Sie ganz einfach mit Markdown. Hier die wichtigsten Tricks im Überblick:</P>
      <table {...styles.table}>
        <tbody>
          <tr>
            <th>Markdown</th>
            <th>Ergebnis</th>
          </tr>
          <tr>
            <td>**fett**</td>
            <td><Emphasis>fett</Emphasis></td>
          </tr>
          <tr>
            <td>*kursiv*</td>
            <td><Cursive>kursiv</Cursive></td>
          </tr>
          <tr>
            <td>~~durchgestrichen~~</td>
            <td>
              <CommentBodyParagraph>
                <StrikeThrough>durchgestrichen</StrikeThrough>
              </CommentBodyParagraph>
            </td>
          </tr>
          <tr>
            <td>Ein [Link](https://republik.ch)</td>
            <td>
              <CommentBodyParagraph>Ein <A href='https://www.republik.ch'>Link</A></CommentBodyParagraph>
            </td>
          </tr>
          <tr>
            <td># Eine Überschrift</td>
            <td><CommentBodyHeading>Eine Überschrift</CommentBodyHeading></td>
          </tr>
          <tr>
            <td>> Ein Zitat</td>
            <td>
              <CommentBodyBlockQuote>
                <CommentBodyBlockQuoteParagraph>Ein Zitat</CommentBodyBlockQuoteParagraph>
              </CommentBodyBlockQuote>
            </td>
          </tr>
          <tr>
            <td>Ein `CodeBeispiel()` im Text</td>
            <td>
              <CommentBodyParagraph>
                Ein <CommentBodyCode>CodeBeispiel()</CommentBodyCode> im Text
              </CommentBodyParagraph>
            </td>
          </tr>
          <tr>
            <td>***</td>
            <td><HR /></td>
          </tr>
          <tr>
            <td>
              * Liste<br />
              * Liste<br />
              * Liste<br />
            </td>
            <td>
              <CommentBodyList data={{ ordered: false }}>
                <CommentBodyListItem>Liste</CommentBodyListItem>
                <CommentBodyListItem>Liste</CommentBodyListItem>
                <CommentBodyListItem>Liste</CommentBodyListItem>
              </CommentBodyList>
            </td>
          </tr>
          <tr>
            <td>
              1. Liste<br />
              2. Liste<br />
              3. Liste<br />
            </td>
            <td>
              <CommentBodyList data={{ ordered: true }}>
                <CommentBodyListItem>Liste</CommentBodyListItem>
                <CommentBodyListItem>Liste</CommentBodyListItem>
                <CommentBodyListItem>Liste</CommentBodyListItem>
              </CommentBodyList>
            </td>
          </tr>
        </tbody>
      </table>
    </Frame>
  )
})
