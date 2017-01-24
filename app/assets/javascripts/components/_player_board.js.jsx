var PlayerBoard = React.createClass({
  handleClick () {
    console.log('PLAYER')
  },

  render () {
    var cells = this.props.generateCells(this)
    return (
      <div>
        <h3>Player Board Size: {this.props.boardSize}</h3>
        {cells}
      </div>
    )
  }
})
