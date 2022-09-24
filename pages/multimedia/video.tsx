import { server } from '../../config'

const Videos = (props: any) => {
  const { youtube } = JSON.parse(props.videos)
  return (
    <>
      <div>
        <div className="aspect-w-16 aspect-h-9 m-10">
          <iframe
            src="https://www.youtube.com/embed/r9jwGansp1E"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Videos list */}
        <div className="youtube__video-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-10">
          {youtube.map((video: any, index: number) => {
            return (
              <section
                key={index}
                className="youtube__video overflow-hidden max-w-sm bg-white border rounded-lg border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 relative cursor-pointer"
              >
                <section className="youtube__img absolute top-1/3 left-1/3 hidden ">
                <img src="https://img.icons8.com/external-others-inmotus-design/67/000000/external-YouTube-browser-others-inmotus-design-2.png"/>
                </section>
                <img
                  src={`/images/youtube-video-banner/${video.bannerImg}`}
                  className="md:h-[220px] "
                  height={200}
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
        <div className="hover:text-orange-500"></div>
      </div>
    </>
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
