var Radar = React.createClass({
  handleClick () {
    console.log('RADAR')
  },

  render () {
    var cells = this.props.generateCells(this)
    return (
      <div>
        <h3>Radar Board Size: {this.props.boardSize}</h3>
        {cells}
      </div>
    )
  }
})
