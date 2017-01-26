var Body = React.createClass({
  getInitialState () {
    return { boardSize: 8,
             playing: false }
  },

  handleShipPlacement (size) {
    this.props.displayShipPlacement(size)
  },

  handleBoardSize (size) {
    this.setState({ boardSize: size })
  },

  handleGameStart () {
    var newState = {
      boardSize: this.state.boardSize,
      playing: 'ships',
      shotsFired: 0,
      shotsMissed: 0,
      shotsHit: 0
    }
    this.setState(newState)
  },

  handleQuit () {
    var resetState = { boardSize: 8,
                       playing: false }
    this.setState(resetState)
  },

  render () {
    return (
      <div>
        <div>
          <Board
            boardSize={this.state.boardSize}
            playing={this.state.playing} />
          <div className='menu'>
            <Menu
              playing={this.state.playing}
              handleGameStart={this.handleGameStart}
              handleBoardSize={this.handleBoardSize}
              handleShipPlacement={this.handleShipPlacement}
              handleQuit={this.handleQuit}
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
