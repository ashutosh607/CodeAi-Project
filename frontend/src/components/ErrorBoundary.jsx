import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Ultraa Albums Runtime Error Caught:', error, errorInfo);
    this.setState({ error, errorInfo });
  }

  handleReload = () => {
    window.location.reload();
  };

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#FAF9F5] text-[#141310] flex flex-col items-center justify-center p-6 text-center font-sans">
          <div className="max-w-md bg-white border border-[#EAE6DF] p-8 shadow-[0_12px_36px_-8px_rgba(41,39,36,0.08)]">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#635E52] font-semibold block mb-3">
              Ultraa Albums • Atelier Notice
            </span>
            <h2 className="font-serif text-2xl mb-3 font-normal text-[#141310]">
              Experience Temporarily Interrupted
            </h2>
            <p className="text-xs text-[#4A463F] leading-relaxed mb-6 font-normal">
              An unexpected display exception occurred while loading the visual atelier. Please refresh to restore the session.
            </p>
            <div className="flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={this.handleReload}
                className="px-6 py-2.5 bg-[#141310] text-[#FAF9F5] text-xs uppercase tracking-[0.18em] font-semibold hover:bg-[#292724] transition-colors border-none cursor-pointer"
              >
                Reload Website
              </button>
              <button
                type="button"
                onClick={this.handleReset}
                className="px-5 py-2.5 bg-transparent text-[#635E52] text-xs uppercase tracking-[0.18em] font-semibold border border-[#EAE6DF] hover:border-[#141310] transition-colors cursor-pointer"
              >
                Try Again
              </button>
            </div>
            {process.env.NODE_ENV !== 'production' && this.state.error && (
              <details className="mt-6 text-left text-[11px] text-red-700 bg-red-50 p-3 overflow-auto max-h-40 border border-red-200">
                <summary className="cursor-pointer font-mono font-bold mb-1">
                  {this.state.error.toString()}
                </summary>
                <pre className="whitespace-pre-wrap font-mono text-[10px]">
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

