import React from 'react'
import { compose, graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Loader from '../Loader'
import {
  colors,
  fontStyles,
  mediaQueries
} from '@project-r/styleguide'
import { css } from 'glamor'
import { countFormat } from '../../lib/utils/format'
import { ELECTION_STATS_POLL_INTERVAL } from '../../lib/constants'
import voteT from './voteT'

const styles = {
  wrapper: css({
    lineHeight: 1.4,
    background: colors.secondaryBg,
    textAlign: 'center',
    marginBottom: 15,
    padding: 15,
    [mediaQueries.mUp]: {
      float: 'right',
      width: '33%',
      margin: '0 0 5px 10px'
    }
  }),
  number: css({
    color: colors.lightText,
    paddingBottom: 4,
    ...fontStyles.sansSerifMedium58
  })
}

const VoteCounter = ({ data, vt }) =>
  <Loader loading={data.loading} error={data.error} render={() => {
    const { elections, votings } = data
    const counts = elections.concat(votings).map(o => o.turnout.submitted)
    const minSubmitted = Math.min(...counts)

    return (
      <div {...styles.wrapper}>
        <div>{vt('vote/intro/counter1')}</div>
        <div {...styles.number}>{countFormat(minSubmitted)}</div>
        <div>{vt('vote/intro/counter2')}</div>
      </div>
    )
  }} />

const query = gql`
  {
    elections {
      id
      turnout {
        submitted
      }
    }
    votings {
      id
      turnout {
        submitted
      }
    }
  }
`

export default compose(
  voteT,
  graphql(query, {
    options: ({ slug }) => ({
      variables: {
        slug
      },
      pollInterval: ELECTION_STATS_POLL_INTERVAL
    })
  })
)(VoteCounter)
