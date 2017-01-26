var Header = React.createClass({
  render () {
    return (
      <div>
        {this.props.shipPlacement &&
          <div>
            <h3>Place Your {this.props.shipPlacement} On Your Board</h3>
          </div>
        }
        {!this.props.shipPlacement &&
          <div>
            <h3>Header</h3>
          </div>
        }
      </div>
    )
  }
})
