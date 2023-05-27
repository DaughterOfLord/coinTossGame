// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {count: 0}

  onClickHeads = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="card-heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img
            className="heads-image"
            src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
            alt="toss result"
          />
          <button
            type="button"
            className="toss-coin"
            onClick={this.onClickHeads}
          >
            Toss Coin
          </button>
          <div className="count">
            <p className="in-count">Total: {count}</p>
            <p className="in-count">Heads: {count}</p>
            <p className="in-count">Tails: {count}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
