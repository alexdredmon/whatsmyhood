import React from 'react'
import { connect } from 'react-redux'

import { getIn } from 'common/lib/core/util/iterable'

import AppStoreDownload from 'lib/components/layout/AppStoreDownload'
import FlexCell from 'lib/components/layout/FlexCell'
import FlexColumn from 'lib/components/layout/FlexColumn'
import FlexRow from 'lib/components/layout/FlexRow'
import If from 'common/lib/components/If'
import Text from 'lib/components/layout/Text'
import ViewSourceOnGitHub from 'lib/components/layout/ViewSourceOnGitHub'

import ErrorMessage from 'common/components/ErrorMessage'
import Loading from 'common/components/Loading'
import Neighborhood from 'common/components/Neighborhood'
import { requestLocation } from 'common/actions/neighborhood'


class NeighborhoodContainer extends React.Component {
  componentDidMount = () => {
    const {
      requestLocation,
    } = this.props

    requestLocation()
  }

  handleAlertCoordinates = () => {
    const {
      latitude,
      longitude,
    } = this.props

    alert(`Your current coordinates are: \n\nLatitude: ${latitude}\nLongitude: ${longitude}`)
  }

  renderBody = () => {
    const {
      error,
      neighborhoods,
    }  = this.props

    if (error) {
      return <ErrorMessage message={error} />
    }

    if (! neighborhoods) {
      return <Loading />
    }

    return (
      <Neighborhood
        key="neighborhoods"
        neighborhoods={neighborhoods}
      />
    )
  }

  render = () => {
    const {
      error,
      neighborhoods,
      requestLocation,
    } = this.props

    return (
      <FlexColumn>
        <FlexCell>
          <Text
            style={{
              color: '#8b8b8b',
              fontSize: 20,
            }}
          >
            What's your current neighborhood?
          </Text>
        </FlexCell>
        <FlexCell>
          { this.renderBody() }
          <AppStoreDownload
            style={{
              marginTop: 50
            }}
            url="https://apps.apple.com/us/app/whats-my-hood/id1234734604?ls=1"
          />
          <ViewSourceOnGitHub
            url="https://github.com/alexdredmon/whatsmyhood"
          />
        </FlexCell>
        <FlexCell
          style={{
            justifyContent: 'flex-end',
          }}
        >
        <If condition={error || neighborhoods}>
          <FlexRow>
            <If condition={! error}>
              <FlexCell
                style={{
                  cursor: 'pointer',
                  marginRight: 30,
                }}
                onClick={this.handleAlertCoordinates}
              >
                <Text
                  style={{
                    fontSize: 20,
                    color: '#cacaca',
                  }}
                >
                  Details
                </Text>
              </FlexCell>
            </If>
            <FlexCell
              onClick={requestLocation}
              style={{
                cursor: 'pointer',
                marginLeft: error ? null : 30,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  color: '#cacaca',
                }}
              >
                  Refresh
                </Text>
              </FlexCell>
            </FlexRow>
          </If>
        </FlexCell>
      </FlexColumn>
    )
  }
}

export default connect(
  (state, props) => ({
    error: getIn(state, 'neighborhood.error'),
    latitude: getIn(state, 'neighborhood.latitude'),
    longitude: getIn(state, 'neighborhood.longitude'),
    neighborhoods: getIn(state, 'neighborhood.neighborhoods'),
  }),
  (dispatch, props) => ({
    requestLocation: () => dispatch(requestLocation()),
  }),
)(NeighborhoodContainer)
