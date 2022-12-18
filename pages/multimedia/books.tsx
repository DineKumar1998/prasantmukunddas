import Link from 'next/link'
import { DownloadCloud } from 'react-feather'
import { server } from '../../config'

type Props = {
  books: {
    bannerImg: string
  }
}

const Book = ({ books }: Props) => {

  return (
    <div className="book-container relative">
      <div className="download-button">
        <div className="button md:text-[50px] text-xs">
          <DownloadCloud className="mr-3" />
          <Link href={'https://www.google.co.in'} target="_parent"> Download </Link>
        </div>
      </div>
      <img src={`/images/${books.bannerImg}`} alt="images" className='book-banner' />
    </div>
  )
}

export async function getServerSideProps(context: any) {
  // fetch the blog posts from the mock API
  const res = await fetch(`${server}/images`, {
    method: "POST",
    body: JSON.stringify({ requestType: 'multimedia' }),
  });

  const multimedia = await res.json();

  return {
    props: {
      books: JSON.parse(multimedia).books,
    },
  }
}

export default Book
