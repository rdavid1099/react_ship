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
          <td key={'cell-' + y + '-' + x} id={y + ',' + x} className='cell' onClick={controller.handleClick}>Cell</td>
        ))
        x += 1
      }
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
    var divStyle = {
      display: 'block'
    }
    return (
      <div className='row'>
        <div className='col-md-6' id='player-board'>
          <PlayerBoard generateCells={this.generateCells} boardSize={this.props.boardSize} />
        </div>
        <div className='col-md-6' id='radar'>
          <div id='cover' style={divStyle}></div>
          <Radar generateCells={this.generateCells} boardSize={this.props.boardSize} />
        </div>
      </div>
    )
  }
})
