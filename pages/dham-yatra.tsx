import React, { ChangeEvent, FormEvent } from 'react'
import classNames from 'classnames'
import { type } from 'os'
import { server } from '../config'

type State = {
  name: string
  email: string
  phone: number
  yatra: string
  options: Array<string>
  oldYatra: Array<{ image: string; location: string }>
}

type Props = {
  images: string
}

class DhamYatra extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      phone: 0,
      yatra: '',
      options: ['Mayapur', 'Jagannath Puri', 'Vrindavan'],
      oldYatra: JSON.parse(props.images).old_yatra,
    } as State

    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.onSelectHandler = this.onSelectHandler.bind(this)
  }

  public onSubmit(e: FormEvent) {
    e.preventDefault()
    console.log(this.state)
  }

  private onChangeHandler(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.value.length > 0) {
      this.setState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    } else {
      this.setState((prev) => ({ ...prev, [e.target.name]: null }))
    }
  }

  private requiredComponent() {
    return <span className="text-red-600 font-bold">*</span>
  }

  private onSelectHandler(e: ChangeEvent<HTMLSelectElement>) {
    this.setState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  render() {
    return (
      <>
        <div className="relative overflow-y-auto">
          <img
            src="./images/dham-yatra/Banner.webp"
            alt="Banner"
            className="md:absolute z-0 brightness-[0.8] "
          />

          <div className="flex items-center flex-col p-4">
            <p className="text-lg text-center text-white md:block hidden z-[2] w-full pb-4">
              <code>
                HARE KRISHNA HARE KRISHNA, KRISHNA KRISHNA HARE HARE | HARE RAM
                HARE RAM RAM RAM HARE HARE ||
              </code>
            </p>
            <form
              className="md:p-3 p-2 z-[1] bg-white/80 rounded border shadow-md"
              onSubmit={this.onSubmit}
              style={{ minWidth: 300, maxWidth: 400, width: '100%' }}
            >
              <div className="text-center md:border-0 border py-2 mb-1 rounded">
                <p
                  className="text-lg text-purple-700 font-bold"
                  style={{ lineHeight: 1 }}
                >
                  Registration
                </p>
                <span>New Dham Yatra</span>
              </div>
              <div className="mb-2">
                <label
                  className={classNames({
                    'text-red-600': this.state.name === null,
                  })}
                >
                  Name{this.requiredComponent()}
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  className={classNames(
                    { 'border border-red-600': this.state.name === null },
                    'form-control'
                  )}
                  required
                  onChange={this.onChangeHandler}
                />
                <small className="text-purple-600">
                  Full name is required.
                </small>
              </div>
              <div className="mb-2">
                <label
                  className={classNames({
                    'text-red-600': this.state.email === null,
                  })}
                >
                  Email{this.requiredComponent()}
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className={classNames(
                    { 'border border-red-600': this.state.email === null },
                    'form-control'
                  )}
                  name="email"
                  required
                  onChange={this.onChangeHandler}
                />
                <small className="text-purple-600">
                  Email address is required.
                </small>
              </div>
              <div className="mb-2">
                <label
                  className={classNames({
                    'text-red-600': this.state.phone === null,
                  })}
                >
                  Mobile{this.requiredComponent()}
                </label>
                <input
                  type={'number'}
                  placeholder="Your Phone"
                  className={classNames(
                    { 'border border-red-600': this.state.phone === null },
                    'form-control'
                  )}
                  name="phone"
                  required
                  onChange={this.onChangeHandler}
                />
                <small className="text-purple-600">
                  Phone number must have 10 digits only.
                </small>
              </div>
              <div className="mb-3">
                <label>Select Yatra{this.requiredComponent()}</label>
                <select
                  id="countries"
                  className="form-control "
                  name="yatra"
                  onChange={this.onSelectHandler}
                >
                  <option>Select yatra locations...</option>
                  {this.state.options.map((val: string, index: number) => (
                    <option value={val} key={index}>
                      {' '}
                      {val}
                    </option>
                  ))}
                </select>
                <small className="text-purple-600">
                  Select at least one yatra location.
                </small>
              </div>
              <div className="mb-2">
                <button
                  type="submit"
                  className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded text-sm px-5 py-2 text-center"
                >
                  Register
                </button>
              </div>
            </form>
            <div className="z-[3] bg-white w-full p-2 md:mt-14 mt-7 rounded border shadow-lg">
              <h1 className='text-[20px] font-bold p-4 text-purple-900 text-center'> OLD YATRA HIGHTLIGHTS </h1>
            {this.state.oldYatra.map(({ image, location }, index) => {
              return (
                <div key={index} className="p-2 border rounded mb-4" style={{ boxShadow: '0 0 8px rgb(0 0 0 / 0.04)' }}>
                  <p className='text-[14px] text-teal-600 font-bold text-center py-2'> <u>{location}</u> </p>
                  <img
                    src={'./images/dham-yatra/old_yatra/' + image}
                    className="w-full h-full rounded"
                    alt={location + index}
                  />
                </div>
              )
            })}
            </div>
          </div>
        </div>
      </>
    )
  }
}

export async function getStaticProps(context: any) {
  // fetch the blog posts from the mock API
  const res = await fetch(`${server}/images`, {
    method: 'POST',
    body: JSON.stringify({ requestType: 'oldYatra' }),
  })
  const images = await res.json()

  return {
    props: {
      images,
    },
  }
}

export default DhamYatra
