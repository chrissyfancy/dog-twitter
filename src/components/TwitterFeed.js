import React from 'react';
import Tweet from './Tweet'

class TwitterFeed extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedTweetId: ''
    }
    this.handleSelectedTweet = this.handleSelectedTweet.bind(this);
  }

  handleSelectedTweet(tweetId){
    this.setState({ selectedTweetId: tweetId })
  }

  render() {
    let tweets = this.props.data.map(tweet => {
      let className = "";
      if(tweet.id_str === this.state.selectedTweetId) {
        className = "selected";
      }

      let handleClick = () => {
        this.handleSelectedTweet(tweet.id_str)
      }

      return(
        <Tweet
          key={tweet.id_str}
          id={tweet.id_str}
          text={tweet.text}
          name={tweet.user.name}
          userPhoto={tweet.user.profile_image_url}
          handleClick={handleClick}
          className={className}
        />
      )
    })
    return(
      <div>
        <h1>Dog Twitter</h1>
        {tweets}
      </div>
    )
  }
};

export default TwitterFeed;
