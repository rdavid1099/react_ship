var Body = React.createClass({
  getInitialState () {
    return { boardSize: 8,
             playing: false }
  },

  handleBoardSize (size) {
    this.setState({ boardSize: size })
  },

  handleGameStart () {
    var newState = {
      boardSize: this.state.boardSize,
      playing: true,
      shotsFired: 0,
      shotsMissed: 0,
      shotsHit: 0
    }
    this.setState(newState)
  },

  render () {
    return (
      <div>
        <div>
          <Board boardSize={this.state.boardSize} />
          <div className='menu'>
            <Menu
              playing={this.state.playing}
              handleGameStart={this.handleGameStart}
              handleBoardSize={this.handleBoardSize}
              shotsFired={this.state.shotsFired}
              shotsMissed={this.state.shotsMissed}
              shotsHit={this.state.shotsHit} />
          </div>
          <FleetStatus />
        </div>
      </div>
    )
  }
})
