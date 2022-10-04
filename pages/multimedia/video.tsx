import { useState } from 'react'
import { server } from '../../config'

const Videos = (props: any) => {
  const { youtube } = JSON.parse(props.videos)

  const [state, setState] = useState({
    src: youtube[0].src,
    title: youtube[0].title
  })

  return (
    <div className='p-5'>
      <h2 className="text-[20px] font-bold capitalize bg-slate-100 py-2 px-5  border rounded text-slate-800">{state.title}</h2>

      <div className="aspect-w-16 aspect-h-9 m-5 md:m-10">
        <iframe
          width="560"
          height="315"
          src={state.src}
          title={state.title}
          frameBorder={4}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Videos list */}
      <div className="youtube__video-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-5 md:mx-10 mb-10">
        {youtube.map((video: any, index: number) => {
          return (
            <section
              key={index}
              className="youtube__video overflow-hidden max-w-sm bg-white border rounded-lg border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 relative cursor-pointer"
            >
              <section className="youtube__img absolute top-1/3 left-1/3 hidden ">
                <img src="https://img.icons8.com/external-others-inmotus-design/67/000000/external-YouTube-browser-others-inmotus-design-2.png" />
              </section>
              <img
                src={`/images/youtube-video-banner/${video.bannerImg}`}
                className="md:h-[180px] w-full "
                height={180}
              />
              <section className="px-2 py-2">
                <p className="text-lg">
                  {' '}
                  🔴
                  <strong className="px-2">
                    {video.language ? video.language : 'Hindi'}
                  </strong>{' '}
                </p>
                <span>
                  {video.title} |<strong> Duration: </strong> {video.duration}
                </span>
              </section>
            </section>
          )
        })}
      </div>
    </div>
  )
}
export async function getServerSideProps(context: any) {
  const res = await fetch(`${server}/images`, {
    method: 'POST',
    body: 'youtubeVideos',
  })
  const videos = await res.json()

  return {
    props: {
      videos,
    },
  }
}

export default Videos
