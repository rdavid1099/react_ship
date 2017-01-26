var Main = React.createClass({
  getInitialState () {
    return {}
  },

  displayShipPlacement (size) {
    this.setState({ shipPlacement: size })
  },

  render () {
    return (
      <div>
        <div className='header'>
          <Header
            shipPlacement={this.state.shipPlacement} />
        </div>
        <Body
          displayShipPlacement={this.displayShipPlacement} />
      </div>
    )
  }
})
