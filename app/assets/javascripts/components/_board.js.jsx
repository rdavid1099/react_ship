var Board = React.createClass({
  render () {
    return (
      <div>
        <Radar boardSize={this.props.boardSize} />
        <PlayerBoard boardSize={this.props.boardSize} />
      </div>
    )
  }
})
