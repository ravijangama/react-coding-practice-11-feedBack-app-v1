// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isDisplayFB: false}

  onClickHappy = () => {
    this.setState({isDisplayFB: true})
  }

  feedBackQuestion = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="feedback-Q-container">
        <h1 className="heading">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emoji-container">
          {emojis.map(eachEmoji => (
            <li className="each-emoji-list" key={eachEmoji.id}>
              <button
                type="button"
                className="emoji-btn"
                onClick={this.onClickHappy}
              >
                <img
                  src={eachEmoji.imageUrl}
                  alt={eachEmoji.name}
                  className="emoji-img"
                />
                <br />
                <span className="description">{eachEmoji.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  thankYouFB = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="thank-you-container">
        <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
        <h1 className="thank-you">Thank You!</h1>
        <p className="thank-desc">
          We will use your feedback to improve our customer support performance
        </p>
      </div>
    )
  }

  render() {
    const {isDisplayFB} = this.state

    const jsxElement = (
      <div className="feedback-bg-container">
        <div className="emojis-bg-container">
          {isDisplayFB ? this.thankYouFB() : this.feedBackQuestion()}
        </div>
      </div>
    )
    return jsxElement
  }
}
export default Feedback
