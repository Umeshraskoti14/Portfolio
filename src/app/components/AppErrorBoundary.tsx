import type { ContextType, ErrorInfo, ReactNode } from 'react';
import { Component } from 'react';
import { siteText } from '../content/siteText';
import { UiPreferencesContext } from '../context/UiPreferencesContext';

type AppErrorBoundaryProps = {
  children: ReactNode;
};

type AppErrorBoundaryState = {
  hasError: boolean;
  message?: string;
};

export class AppErrorBoundary extends Component<AppErrorBoundaryProps, AppErrorBoundaryState> {
  static contextType = UiPreferencesContext;
  declare context: ContextType<typeof UiPreferencesContext>;

  state: AppErrorBoundaryState = {
    hasError: false,
    message: undefined,
  };

  static getDerivedStateFromError(error: Error): AppErrorBoundaryState {
    return {
      hasError: true,
      message: error.message,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('AppErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    const language = this.context?.language ?? 'en';
    const text = siteText[language].errorBoundary;

    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-50 px-4 py-16 text-slate-900">
          <div className="mx-auto max-w-2xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg">
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-red-600">{text.eyebrow}</div>
            <h1 className="mt-4 text-3xl font-semibold text-slate-950">{text.title}</h1>
            <p className="mt-4 leading-8 text-slate-600">
              {text.description}
            </p>
            {this.state.message && (
              <pre className="mt-6 overflow-x-auto rounded-2xl bg-slate-100 p-4 text-sm text-slate-700">
                {this.state.message}
              </pre>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
