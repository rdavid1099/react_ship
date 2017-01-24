var PlayerBoard = React.createClass({
  generateCells () {
    var boardSize = this.props.boardSize
    var x = 0
    var y = 0
    var board = []
    var row = []
    while (y < boardSize) {
      while (x < boardSize) {
        row.push((
          <span className='cell'>Cell</span>
        ))
        x += 1
      }
      row.push((<br />))
      board.push(row)
      row = []
      x = 0
      y += 1
    }
    return board
  },

  render () {
    var cells = this.generateCells()
    return (
      <div>
        <h3>Player Board Size: {this.props.boardSize}</h3>
        {cells}
      </div>
    )
  }
})
