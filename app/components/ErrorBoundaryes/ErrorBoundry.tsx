import { Component } from 'react';

interface ErrorState {
  isError: boolean
  errorMessage: string
}

class ErrorBoundary extends Component<{}, ErrorState> {
  constructor(props: ErrorState) {
    super(props)

    this.state = {
      isError: false,
      errorMessage: ''
    }
  }

  static getDerivedStateFromError(error: any) {

  }

  componentDidCatch(error: Error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
    // You can also log error messages to an error reporting service here
  }

  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default ErrorBoundary;