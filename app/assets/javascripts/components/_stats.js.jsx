var Stats = React.createClass({
  render () {
    return (
      <div className='in-game-stats'>
        <h4>Stats</h4>
        <p>Shots Fired: {this.props.shotsFired}</p>
        <p>Shots Hit: {this.props.shotsHit}</p>
        <p>Shots Missed: {this.props.shotsMissed}</p>
      </div>
    )
  }
})
