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

  render () {
    return (
      <div>
        <h3>Game Menu</h3>
        {!this.props.playing &&
          <div className='new-game-menu'>
            <DifficultySelect
              selectedDifficulty={this.state.selectedDifficulty}
              handleDifficultySelection={this.handleDifficultySelection} />
            <button onClick={this.initPlay}>Play New Game</button><br />
          </div>
        }
        {this.props.playing &&
          <div className='in-game-stats'>
            <h4>Stats</h4>
            <p>Shots Fired: {this.props.shotsFired}</p>
            <p>Shots Hit: {this.props.shotsHit}</p>
            <p>Shots Missed: {this.props.shotsMissed}</p>
          </div>
        }
        <button>Instructions</button><br />
        <button>Quit</button>
      </div>
    )
  }
})
