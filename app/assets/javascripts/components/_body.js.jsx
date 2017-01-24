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
        <Board boardSize={this.state.boardSize} />
        <div className='menu'>
          <Menu handleBoardSize={this.handleBoardSize} />
        </div>
        <FleetStatus />
      </div>
    )
  }
})
