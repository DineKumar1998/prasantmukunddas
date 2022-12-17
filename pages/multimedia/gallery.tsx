import { server } from '../../config'
import Dropdown from '../../components/DropdownComponent'
import { useState } from 'react'
import { ArrowLeft, ArrowRight, X } from 'react-feather'

const Gallery = (props: any) => {
  const { multimedia } = JSON.parse(props.images)
  const [state, setState] = useState({
    index: 0,
    label: ''
  });

  const prevImage = (index: number, label: string) => {
    index === 1
      ? setState((prev) => ({
          index: multimedia.gallery_images.length,
          label: label,
        }))
      : setState((prev) => ({ index: index - 1, label }))
  }

  const nextImage = (index: number, label: string) => {
    index === multimedia.gallery_images.length ? setState(() => ({ index: 1, label })) : setState(() => ({ index: index + 1, label}))
  }

  const closeImageView = () => setState(() => ({ index: 0, label: ''}))

  return (
    <div className='p-5'>
      {/* Overlay image */}
      {state.index > 0 ? (
        <div className="overlay_container text-white">
          <ArrowLeft
            size={30}
            className="rounded-full cursor-pointer bg-gray-300 p-1 text-slate-800 hover:text-purple-500"
            strokeWidth={4}
            onClick={e => prevImage(state.index, multimedia.gallery_images[state.index - 1].title)}
          />
          <div className="w-10/12 h-full flex justify-center items-center flex-col">
            <img
              src={`/images/gallery/${
                multimedia.gallery_images[state.index - 1].imageName
              }`}
              className="overlay_image md:w-9/12 md:h-2/3"
            />
          </div>
          <ArrowRight
            size={30}
            className="rounded-full cursor-pointer bg-gray-300 p-1 hover:text-purple-500 text-slate-800"
            strokeWidth={4}
            onClick={e => nextImage(state.index, multimedia.gallery_images[state.index - 1].title)}
          />
          <X
            size={30}
            strokeWidth={4}
            className="bg-gray-300 self-start absolute md:top-20 top-1/3 right-10 rounded-full text-slate-800 p-1 cursor-pointer hover:text-red-500"
            onClick={closeImageView}
          />
        </div>
      ) : null}
      <h2 className="text-[20px] font-bold capitalize bg-slate-100 py-2 px-5  border rounded text-slate-800">
        Gallery
      </h2>
      <div className="flex justify-center md:m-10 m-5 gallery__images">
        <div className="gallery__images-container md:columns-3 columns-1">
          {multimedia.gallery_images.map((image: any, index: number) => {
            return (
              <section
                key={index}
                className="img__container mb-4 break-inside-avoid rounded border overflow-hidden"
              >
                <img
                  className="w-full"
                  src={`/images/gallery/${image.imageName}`}
                  onClick={(e) => setState(prev => ({ index: index + 1, label: image.title }))}
                />
                <p className="text-sm p-2">{image.title}</p>
              </section>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps(context: any) {
  // fetch the blog posts from the mock API
  const res = await fetch(`${server}/images`)
  const images = await res.json()

  return {
    props: {
      images,
    },
  }
}

export default Gallery
