import Link from 'next/link'
import { server } from '../../config'

const Audio = (props: any) => {
  const { multimedia } = JSON.parse(props.images)

  return (
    <div className="grid grid-cols-1 mx-20 my-10">
      <table className="table-auto rounded">
        <thead className=" bg-slate-100 border">
          <tr>
            <th className="p-2">Title</th>
            <th>Speeker</th>
            <th>Posted on</th>
            <th>Lecture link</th>
          </tr>
        </thead>
        <tbody>
          {multimedia.audios.map((audio: any, index: number) => (
            <tr key={index} className="border text-center rounded">
              <td className="w-1/4 p-3">{audio.title}</td>
              <td className="w-1/4 ">{audio.speaker}</td>
              <td className="w-1/4 ">{audio.postOn}</td>
              <td className="w-1/4 ">
                <span className="hover:text-blue-700 rounded hover:border-blue-700 border p-1.5 hover:font-bold">
                  <Link href={audio.link}> Click </Link>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export async function getStaticProps(context: any) {
  // fetch the blog posts from the mock API
  const res = await fetch(`${server}/images`, {
    method: "POST",
    body: { requestType: 'youtubeVideos' } as any,
  })
  const images = await res.json()

  return {
    props: {
      images,
    },
  }
}

export default Audio
