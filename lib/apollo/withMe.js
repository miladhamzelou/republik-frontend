import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

export const meQuery = gql`
  query me {
    me {
      id
      username
      portrait
      name
      firstName
      lastName
      email
      initials
      roles
      hasPublicProfile
      discussionNotificationChannels
      accessCampaigns {
        id
      }
    }
  }
`

export default graphql(meQuery, {
  props: ({ data }) => ({
    me: data.me
  })
})
