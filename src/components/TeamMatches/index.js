import {Component} from 'react'

import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {data: {}, isLoading: true}

  componentDidMount() {
    this.getTeamData()
  }

  getTeamData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    this.setState({data: updatedData, isLoading: false})
  }

  renderData = () => {
    const {data} = this.state
    return (
      <div className="team-container">
        <img
          src={data.teamBannerUrl}
          alt="team banner"
          className="team-image"
        />
        <p className="extra-small">Latest matches</p>
        <LatestMatch details={data.latestMatchDetails} />
        <ul className="match-card-list">
          {data.recentMatches.map(eachMatch => (
            <MatchCard details={eachMatch} key={eachMatch.id} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    const teamMatch = isLoading ? (
      <div testid="loader">
        <Loader type="Oval" color="#ffffff" height={50} width={50} />
      </div>
    ) : (
      this.renderData()
    )
    return teamMatch
  }
}

export default TeamMatches
