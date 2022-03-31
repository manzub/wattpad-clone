import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  dissmissComponent() {
    window.location.reload();
  }

  render() {
    if(this.state.hasError) {
      return (<h3 onClick={this.dissmissComponent}>
        Error,
        Something went wrong!.
      </h3>)
    }

    return this.props.children;
  }
}