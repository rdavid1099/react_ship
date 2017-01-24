var Menu = React.createClass({
  render () {
    return (
      <div>
        <h3>Game Menu</h3>
        <DifficultySelect />
        <button>Play New Game</button><br />
        <button>Instructions</button><br />
        <button>Quit</button>
      </div>
    )
  }
})
