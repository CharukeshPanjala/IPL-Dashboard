import './index.css'

const LatestMatch = props => {
  const {details} = props
  const updatedDetails = {
    umpires: details.umpires,
    result: details.result,
    manOfTheMatch: details.man_of_the_match,
    id: details.id,
    date: details.date,
    competingTeam: details.competing_team,
    competingTeamLogo: details.competing_team_logo,
    firstInnings: details.first_innings,
    secondInnings: details.second_innings,
    venue: details.venue,
    matchStatus: details.match_status,
  }
  console.log(updatedDetails)
  return (
    <div className="latest-match-container">
      <div className="container1">
        <p className="large">{updatedDetails.competingTeam}</p>
        <p className="medium">{updatedDetails.date}</p>
        <p className="extra-small">{updatedDetails.venue}</p>
        <p className="extra-small">{updatedDetails.result}</p>
      </div>
      <div className="image-container">
        <img
          src={updatedDetails.competingTeamLogo}
          alt={`latest match ${updatedDetails.competingTeam}`}
          className="competing-team-logo"
        />
      </div>
      <div className="container2">
        <p className="small">First Innings</p>
        <p className="extra-small">{updatedDetails.firstInnings}</p>
        <p className="small">Second Innings</p>
        <p className="extra-small">{updatedDetails.secondInnings}</p>
        <p className="medium">Man Of The Match</p>
        <p className="extra-small">{updatedDetails.manOfTheMatch}</p>
        <p className="medium">Umpires</p>
        <p className="extra-small">{updatedDetails.umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
