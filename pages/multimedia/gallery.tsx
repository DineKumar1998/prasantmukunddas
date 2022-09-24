import { server } from '../../config'
import Dropdown from '../../components/DropdownComponent'

const Gallery = (props: any) => {
  const { multimedia } = JSON.parse(props.images)

  return (
    <div className="flex justify-center m-6">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4 md:grid-cols-2">
        {multimedia.gallery_images.map((image: any, index: number) => {
          return (
            <section
              key={index}
              className="img__container overflow-hidden rounded border"
            >
              <span className="img__dots hidden">
                <Dropdown />
              </span>
              <img
                height={500}
                width={500}
                src={`/images/gallery/${image.imageName}`}
              />
              <span className="img__title font-semibold px-2">
                {image.title}
              </span>
            </section>
          )
        })}
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
