import React from 'react';

import { IErrorBoundaryProps, IErrorBoundaryState } from '@src/types';

class ErrorBoundary extends React.Component<IErrorBoundaryProps, IErrorBoundaryState> {
  constructor(props: IErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return (
        <div>
          <h1>Oops, something went wrong :o</h1>
        </div>
      );
    }
    return children;
  }
}

export default ErrorBoundary;
