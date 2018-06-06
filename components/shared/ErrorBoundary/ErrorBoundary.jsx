import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: false,
      errorInfo: ''
    }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo
    })
  }

  render() {
    if (this.state.error) {
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      )
    }

    return this.props.children
  }
}

ErrorBoundary.propTypes = { children: PropTypes.node }
ErrorBoundary.defaultProps = { children: null }

export default ErrorBoundary
