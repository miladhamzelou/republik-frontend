import React, { Component } from 'react'
import { withRouter } from 'next/router'

import {
  NarrowContainer
} from '@project-r/styleguide'

import {
  CDN_FRONTEND_BASE_URL, CROWDFUNDING_NAME, SALES_UP
} from '../lib/constants'

import Frame from '../components/Frame'
import PledgeForm from '../components/Pledge/Form'
import PledgeReceivePayment from '../components/Pledge/ReceivePayment'

import { PSP_PLEDGE_ID_QUERY_KEYS } from '../components/Payment/constants'

const PLEDGE_CROWDFUNDING_NAME = SALES_UP || CROWDFUNDING_NAME

class PledgePage extends Component {
  render () {
    const meta = {
      title: 'Jetzt Mitglied und Abonnentin werden',
      description: 'Lasst uns gemeinsam ein neues Fundament für unabhängigen Journalismus bauen!',
      image: `${CDN_FRONTEND_BASE_URL}/static/social-media/logo.png`
    }

    const { router: { query } } = this.props

    const queryKey = PSP_PLEDGE_ID_QUERY_KEYS.find(key => query[key])
    const pledgeId = queryKey && query[queryKey].split('_')[0]

    return (
      <Frame meta={meta}>
        <NarrowContainer>
          {pledgeId ? (
            <PledgeReceivePayment
              crowdfundingName={PLEDGE_CROWDFUNDING_NAME}
              pledgeId={pledgeId}
              query={query} />
          ) : (
            <PledgeForm
              crowdfundingName={PLEDGE_CROWDFUNDING_NAME}
              query={query} />
          )}
        </NarrowContainer>
      </Frame>
    )
  }
}

export default withRouter(PledgePage)
