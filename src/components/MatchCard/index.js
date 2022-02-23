import './index.css'

const MatchCard = props => {
  const {details} = props
  const colorClass = details.match_status === 'Won' ? 'green' : 'red'
  return (
    <li className="match-card">
      <img
        src={details.competing_team_logo}
        alt={`competing team ${details.competing_team}`}
        className="match-card-logo"
      />
      <p className="medium">{details.competing_team}</p>
      <p className="extra-small">{details.result}</p>
      <p className={`small ${colorClass}`}>{details.match_status}</p>
    </li>
  )
}

export default MatchCard
