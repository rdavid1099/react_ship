var Body = React.createClass({

  render () {
    return (
      <div>
        <div className='board'>
          <Board />
        </div>
        <div className='menu'>
          <Menu />
        </div>
        <FleetStatus />
      </div>
    )
  }
})
