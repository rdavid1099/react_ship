var DifficultySelect = React.createClass({
  getInitialState () {
    return { selectedDifficulty: 'Intermediate (8x8 Map)',
             displaySelect: false }
  },

  renderDifficultySelect () {
    this.setState({ displaySelect: !this.state.displaySelect })
  },

  handleSelection (event) {
    this.setState({ selectedDifficulty: event.target.innerText,
                    displaySelect: false })
  },

  render () {
    return (
      <div>
        <p>Select Difficulty: <button onClick={this.renderDifficultySelect}>{this.state.selectedDifficulty}</button></p>
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
