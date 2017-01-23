var Main = React.createClass({
  render () {
    return (
      <div>
        <div className='header'>
          <Header />
        </div>
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
