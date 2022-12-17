import { Youtube } from "react-feather";
import { server } from "../../config";

const YoutubePlaylist = (props: any) => {
    const { youtube_playlists } = JSON.parse(props.videos);
    return (
      <>
        <div className="md:px-10 px-5 py-5 text-slate-800">
          <h2 className="text-[20px] flex items-center font-bold capitalize bg-slate-100 py-0 border px-5 rounded text-slate-800">
            <img src={"https://cdn-icons-png.flaticon.com/512/400/400425.png"} className="h-14 mr-2" alt="Youtube" /> playlist..
          </h2>
          {youtube_playlists.map((playlist: any, index: number) => {
            return (
              <a
                key={index}
                href={playlist.playlistLink}
                target='_blank'
                className="flex my-5 md:h-48 md:pb-0 pb-2 flex-col items-center bg-white rounded-lg border shadow-md md:flex-row hover:bg-gray-100"
              >
                <img
                  className="rounded-t-lg md:h-full md:w-80 w-full md:rounded-none md:rounded-l-lg"
                  src={'../images/youtube-playlist-thumnail/'+playlist.bannerImg}
                  alt={playlist.title}
                  width={300}
                />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="text-2xl font-bold tracking-tight mb-0">
                    {playlist.title}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {playlist.description}
                  </p>
                  <p>
                    <strong>Total Videos</strong> - {playlist.totalVideos}
                  </p>
                </div>
              </a>
            )
          })}
          
         
        </div>
      </>
    )
}

export async function getStaticProps(context: any) {
    const res = await fetch(`${server}/images`, {
      method: 'POST',
      body: JSON.stringify({ requestType: 'youtubeVideos' }),
    })
    const videos = await res.json()
  
    return {
      props: {
        videos
      },
    }
  }
  

export default YoutubePlaylist;