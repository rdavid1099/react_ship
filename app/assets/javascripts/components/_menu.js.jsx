var Menu = React.createClass({
  getInitialState () {
    return { selectedDifficulty: 'Intermediate (8x8 Map)' }
  },

  handleDifficultySelection (event) {
    var newDifficulty = event.target.innerText
    var size
    if (newDifficulty === 'Beginner (4x4 Map)') {
      size = 4
    } else if (newDifficulty === 'Intermediate (8x8 Map)') {
      size = 8
    } else {
      size = 12
    }
    this.props.handleBoardSize(size)
    this.setState({ selectedDifficulty: newDifficulty })
  },

  initPlay () {
    this.props.handleGameStart()
  },

  resetBoard () {
    this.props.handleQuit()
    this.setState({ selectedDifficulty: 'Intermediate (8x8 Map)' })
  },

  render () {
    return (
      <div>
        <h3>Game Menu</h3>
        {this.props.playing === false &&
          <div>
            <DifficultySelect
              selectedDifficulty={this.state.selectedDifficulty}
              handleDifficultySelection={this.handleDifficultySelection} />
            <button onClick={this.initPlay}>Play New Game</button><br />
          </div>
        }
        {this.props.playing === 'ships' &&
          <div>
            <ShipPlacement
              selectedDifficulty={this.state.selectedDifficulty}
              handleShipPlacement={this.props.handleShipPlacement} />
          </div>
        }
        {this.props.playing === true &&
          <div>
            <Stats
              shotsFired={this.props.shotsFired}
              shotsHit={this.props.shotsHit}
              shotsMissed={this.props.shotsMissed} />
          </div>
        }
        <button>Instructions</button><br />
        <button onClick={this.resetBoard}>Quit</button>
      </div>
    )
  }
})
