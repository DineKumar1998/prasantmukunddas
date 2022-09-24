import Link from 'next/link'
import { DownloadCloud } from 'react-feather'
import { server } from '../../config'

const Book = (props: any) => {
  const { multimedia } = JSON.parse(props.images);
  return (
    <div className="book-container">
      <div className="download-button">
        <div className="button">
          <DownloadCloud size={40} className="mr-3" />
          <Link href={'https://www.google.co.in'} target="_parent"> Download </Link>
        </div>
      </div>
      <img src={`/images/${multimedia.books_image}`} alt="images" className='book-banner' />
    </div>
  )
}

export async function getServerSideProps(context: any) {
  // fetch the blog posts from the mock API
  const res = await fetch(`${server}/images`)
  const images = await res.json()

  return {
    props: {
      images
    }, 
  }
}

export default Book
