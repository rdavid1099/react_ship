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

  },

  render () {
    return (
      <div>
        <h3>Game Menu</h3>
        <DifficultySelect
          selectedDifficulty={this.state.selectedDifficulty}
          handleDifficultySelection={this.handleDifficultySelection} />
        <button onClick={this.initPlay}>Play New Game</button><br />
        <button>Instructions</button><br />
        <button>Quit</button>
      </div>
    )
  }
})
