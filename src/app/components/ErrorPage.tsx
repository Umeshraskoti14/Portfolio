import { Link, useRouteError } from 'react-router';

export function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-xl text-center bg-white rounded-3xl p-10 shadow-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-600">Oops!</p>
        <h1 className="mt-6 text-5xl font-bold text-gray-900">404 Not Found</h1>
        <p className="mt-4 text-gray-600">The page you are looking for doesn’t exist. Use the menu to return to the homepage.</p>
        <pre className="mt-6 text-left text-sm text-gray-500 bg-gray-100 p-4 rounded-xl overflow-x-auto">
          {JSON.stringify(error, null, 2)}
        </pre>
        <Link
          to="/"
          className="inline-flex items-center justify-center mt-8 px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
