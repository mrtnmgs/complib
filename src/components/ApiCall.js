import React from "react"
import PropTypes from "prop-types"

class ApiCall extends React.Component {
  state = {}

  static propTypes = {
    symbol: PropTypes.string.isRequired
  }

  componentDidMount() {
    fetch(`https://api.iextrading.com/1.0/stock/${this.props.symbol}/price`)
    .then(response => {
      return response.json()
    })
    .then(myJson => {
      this.setState({ price: JSON.stringify(myJson)})
    })
    .catch(err => {
      console.log(err.message);
    })
  }
  
  render() {
    return this.state.price ?
    <div> Apple: ${this.state.price}</div> :
    <div>An error occurred. Please try again later.</div>
  }
}

export default ApiCall