import { Component } from "react";
import { Link, Navigate } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false, redirect: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log("######### componentDidCatch ##########");
    console.error(error, info);
  }

  componentDidUpdate() {
    console.log("######### componentDidUpdate ##########");

    if (this.state.hasError) {
      setTimeout(() => {
        console.log("######### Timeout callback ##########");
        this.setState({ redirect: true, hasError: false });
      }, 5000);
    }
  }

  render() {
    if (this.state.redirect) {
      return <Navigate to="/" />;
    }

    if (this.state.hasError) {
      return (
        <h2>
          There was an error. Oh no. What are we going to do. JK.
          <Link to="/">Click here</Link> to go back to the homepage. Or wait
          five seconds and we will do it for you. Or not. I am not you mom.
        </h2>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
