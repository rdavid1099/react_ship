var ShipPlacement = React.createClass({
  placeShip (event) {
    this.props.handleShipPlacement(event.target.innerText)
  },

  render () {
    return (
      <div className='place-ships'>
        <h4>Place Your Ships</h4>
        {this.props.selectedDifficulty === 'Beginner (4x4 Map)' &&
          <div>
            <button onClick={this.placeShip}>2 Unit Ship</button>
            <p>3 Unit Ship</p>
          </div>
        }
        {this.props.selectedDifficulty === 'Intermediate (8x8 Map)' &&
          <div>
            <p>2 Unit Ship</p>
            <p>3 Unit Ship</p>
            <p>4 Unit Ship</p>
          </div>
        }
        {this.props.selectedDifficulty === 'Expert (12x12 Map)' &&
          <div>
            <p>2 Unit Ship</p>
            <p>3 Unit Ship</p>
            <p>4 Unit Ship</p>
            <p>5 Unit Ship</p>
          </div>
        }
      </div>
    )
  }
})
