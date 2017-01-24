var Board = React.createClass({
  generateCells (controller) {
    var boardSize = this.props.boardSize
    var x = 0
    var y = 0
    var board = []
    var row = []
    while (y < boardSize) {
      while (x < boardSize) {
        row.push((
          <td key={'cell-' + y + '-' + x} className='cell' onClick={controller.handleClick}>Cell</td>
          // <span className='cell' onClick={controller.handleClick}>Cell</span>
        ))
        x += 1
      }
      // row.push((<br />))
      board.push((
        <tr key={'row-' + y}>
          {row}
        </tr>
      ))
      row = []
      x = 0
      y += 1
    }
    return board
  },

  render () {
    return (
      <div>
        <Radar generateCells={this.generateCells} boardSize={this.props.boardSize} />
        <PlayerBoard generateCells={this.generateCells} boardSize={this.props.boardSize} />
      </div>
    )
  }
})
