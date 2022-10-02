import Link from 'next/link'
import React, { Fragment } from 'react'
import navigation from './navigation'

interface State {
  show: boolean
}
class Header extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      show: false
    }
    this.toggleMenu = this.toggleMenu.bind(this)
  }
  dropdownMenu(
    children: {
      id: string
      title: string
      icon: JSX.Element
      navLink: string
    }[]
  ) {
    return (
      <ul className="child-items z-[21] shadow-md" onBlur={this.toggleMenu}>
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

  toggleMenu(e: any) {
    e.preventDefault();
    this.setState(prev => ({show: !prev.show}))
  }

  render(): React.ReactNode {
    return (
      <Fragment>
        <header >
          <div className="w-full text-gray-700 shadow-md bg-white border-b">
            <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
              <div className="p-3 flex flex-row items-center justify-between">
                <a
                  href="#"
                  className="text-lg tracking-widest text-gray-900 rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
                >
                  PrasantMukund
                  <span className="text-purple-700 font-extrabold">DAS</span>
                </a>
                <button onClick={this.toggleMenu} className="md:hidden rounded-lg focus:outline-none focus:shadow-outline">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                      clipRule="evenodd"
                      
                      className={this.state.show ? 'hidden' : ``}
                    ></path>
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                      className={this.state.show ? '' : `hidden`}
                    ></path>
                  </svg>
                </button>
              </div>
              <nav hidden={!this.state.show} className={`w-full bg-white left-0 top-[55px] border shadow-lg md:shadow-none md:border-none md:top-0 absolute md:relative z-[20] pb-4 md:pb-0 md:flex md:justify-end md:flex-row`}>
                {navigation.map((route) => {
                  return (
                    <Link href={route.navLink || ''} key={route.id}>
                      <li className="nav-item bg-white" >
                        {route.title}
                        {route.children && (
                          <svg
                            className="text-gray-400 h-5 ml-1 group-hover:text-gray-500"
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
                    </Link>
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
