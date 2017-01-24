var Body = React.createClass({
  getInitialState () {
    return { boardSize: 8 }
  },

  handleBoardSize (size) {
    this.setState({ boardSize: size })
  },

  render () {
    return (
      <div>
        <div className='board'>
          <Board boardSize={this.state.boardSize} />
        </div>
        <div className='menu'>
          <Menu handleBoardSize={this.handleBoardSize} />
        </div>
        <FleetStatus />
      </div>
    )
  }
})
