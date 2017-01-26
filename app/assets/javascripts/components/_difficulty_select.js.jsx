var DifficultySelect = React.createClass({
  getInitialState () {
    return { displaySelect: false }
  },

  renderDifficultySelect () {
    this.setState({ displaySelect: !this.state.displaySelect })
  },

  handleSelection (event) {
    this.props.handleDifficultySelection(event)
    this.setState({ displaySelect: false })
  },

  render () {
    return (
      <div className='new-game-menu'>
        <p>Select Difficulty: <button onClick={this.renderDifficultySelect}>{this.props.selectedDifficulty}</button></p>
        {this.state.displaySelect &&
          <div>
            <button onClick={this.handleSelection}>Beginner (4x4 Map)</button>
            <button onClick={this.handleSelection}>Intermediate (8x8 Map)</button>
            <button onClick={this.handleSelection}>Expert (12x12 Map)</button>
          </div>
        }
      </div>
    )
  }
})
