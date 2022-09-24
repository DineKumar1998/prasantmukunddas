import { useEffect, useState } from 'react'

const Images = ['1.JPG', '2.JPG', '3.JPG', '4.png']

const Carousel = ({ images }: any) => {
  const [index, setIndex] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        if (images.length === index) {
          return 1
        }
        return prevIndex + 1
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [index])

  const prevAndNext = (e: any) => {
    const next = e.target.getAttribute('data-carousel-button-next')
    const prev = e.target.getAttribute('data-carousel-button-prev')

    if (next) {
      setIndex((prevIndex) => {
        if (images.length === prevIndex) {
          return 1
        }
        return prevIndex + 1
      })
    }
    if (prev) {
      setIndex((prevIndex) => {
        if (prevIndex === 1) {
          return images.length
        }
        return prevIndex - 1
      })
    }
  }

  return (
    <div className="carousel" data-carousel>
      <button
        className="carousel-button prev"
        data-carousel-button-prev
        onClick={prevAndNext}
      >
        &#10140;
      </button>
      <button
        className="carousel-button next"
        data-carousel-button-next
        onClick={prevAndNext}
      >
        &#10140;
      </button>

      <ul>
        <li className="slide" data-active key={index}>
          <img
            src={`./images/slider/${images[index - 1]}`}
            className="w-full"
            alt="Wild Landscape"
          />
        </li>
      </ul>

      {/* <ul className="carousel-indicators">
        {images.map((e, ind) => {
          if (ind + 1 === index) {
            return <Circle key={ind} fill="#fff" stroke="#fff" size={16} />
          }
          return <Circle key={ind} stroke="#fff" size={16} className="px-1" />
        })}
      </ul> */}
    </div>
  )
}

export default Carousel
