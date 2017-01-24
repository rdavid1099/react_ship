var Menu = React.createClass({
  getInitialState () {
    return { selectedDifficulty: 'Intermediate (8x8 Map)' }
  },

  handleDifficultySelection (event) {
    this.setState({ selectedDifficulty: event.target.innerText })
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
