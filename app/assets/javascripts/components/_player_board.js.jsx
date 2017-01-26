var PlayerBoard = React.createClass({
  handleClick (event) {
    console.log('PLAYER: ' + event.target.id)
  },

  render () {
    var cells = this.props.generateCells(this)
    return (
      <div>
        <center>
          <h3>Player Board Size: {this.props.boardSize}</h3>
          <table>
            <tbody>
              {cells}
            </tbody>
          </table>
        </center>
      </div>
    )
  }
})
