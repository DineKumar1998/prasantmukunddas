import React, { Fragment } from 'react'

class MyCustom404 extends React.Component {
  render(): React.ReactNode {
    return (
      <Fragment>
        <section className="flex items-center h-full p-16 ">
          <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
            <div className="max-w-md text-center">
              <h2 className="mb-8 font-extrabold text-9xl dark:text-slate-600">
                <span className="sr-only">Error</span>404
              </h2>
              <p className="text-2xl font-semibold md:text-3xl">
                Sorry, we couldn't find this page.
              </p>
              <p className="mt-4 mb-8 dark:text-slate-400">
                But dont worry, you can find plenty of other things on our
                homepage.
              </p>
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-6 py-2 font-semibold rounded hover:text-purple-400 dark:text-slate-900"
              >
                Back to homepage
              </a>
            </div>
          </div>
        </section>
      </Fragment>
    )
  }
}

export default MyCustom404
