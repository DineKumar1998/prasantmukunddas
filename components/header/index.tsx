import Link from 'next/link'
import React, { Fragment } from 'react'
import navigation from './navigation'

class Header extends React.Component {
  dropdownMenu(
    children: {
      id: string
      title: string
      icon: JSX.Element
      navLink: string
    }[]
  ) {
    return (
      <ul className="child-items">
        {children.map((child) => {
          return (
            <Link href={child.navLink} key={child.id}>
              <li className={'p-2 hover:bg-slate-100'}>
                &#9900; {child.title}
              </li>
            </Link>
          )
        })}
      </ul>
    )
  }

  render(): React.ReactNode {
    return (
      <Fragment>
        <header>
          <div className="w-full text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800 border-b">
            <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
              <div className="p-3 flex flex-row items-center justify-between">
                <a
                  href="#"
                  className="text-lg tracking-widest text-gray-900 rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
                >
                  Mukund
                  <span className="text-purple-700 font-extrabold">DAS</span>
                </a>
                <button className="md:hidden rounded-lg focus:outline-none focus:shadow-outline">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    ></path>
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <nav className="flex-col flex-grow pb-4 md:pb-0 hidden md:flex md:justify-end md:flex-row">
                {navigation.map((route) => {
                  return (
                    <li className="nav-item" key={route.id}>
                      <Link href={route.navLink || ''}>{route.title}</Link>
                      {route.children && (
                        <svg
                          className="text-gray-400 h-5 group-hover:text-gray-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                      {route.children && this.dropdownMenu(route.children)}
                    </li>
                  )
                })}
              </nav>
            </div>
          </div>
        </header>
      </Fragment>
    )
  }
}

export default Header
