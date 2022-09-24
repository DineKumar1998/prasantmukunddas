import Link from 'next/link'
import { Book, BookOpen, Feather, Volume2, Youtube } from 'react-feather'
import Carousel from '../components/HomeSlider'
import CountUp from 'react-countup'
import { server } from '../config'

const Home = (props: any) => {
  const { slider, sections, innerImage, gatewaryImage, videoRecords } =
    JSON.parse(props.images)
  console.log(sections)
  return (
    <section>
      {/** SLider */}

      <Carousel images={slider} />

      {/* <Image /> */}
      <div className="grid md:grid-cols-3">
        <div className="flex items-center p-6 md:flex-row bg-white shadow-lg">
          <Youtube size={70} stroke="#FF0100" />
          <div className="p-6  flex flex-col text-center items-center">
            <h2 className="text-2xl">YOUTUBE LIVE VIDEOS</h2>
            <p className="text-sm">Watch Live Katha On This Channel</p>
          </div>
        </div>
        {/* </div> */}

        <div className="flex items-center p-6 md:flex-row bg-white shadow-lg">
          <BookOpen size={70} stroke="#9333EA" />
          <div className="p-6 flex flex-col text-center items-center">
            <h2 className="text-2xl">UPCOMING KATHA</h2>
            <p className="text-sm"></p>
          </div>
        </div>

        <div className="flex items-center p-6 md:flex-row bg-white shadow-lg">
          <Volume2 size={70} />
          <div className="p-6  flex flex-col text-center items-center">
            <h2 className="text-2xl">KATHA HIGHLIGHT</h2>
            <p className="text-sm">Watch Live Katha On This Channel</p>
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("./images/${innerImage}")`,
          backgroundPosition: 'top center',
          backgroundAttachment: 'fixed',
          backgroundSize: '100%',
        }}
        className="flex justify-center items-center p-4 md:h-[500px] h-[500px]"
      >
        <div className="text-white text-center ">
          <h1 className="text-[20px] md:text-[40px] ">
            WELCOME TO
            <span className="text-[20px] inline-block md:inline-flex md:ml-4 break-all md:break-normal md:text-[45px] font-extrabold mb-10 text-purple-300 outline-dotted p-2">
              PRASHANTMUKUNDADAS.COM
            </span>
          </h1>
          <br />
          <p className="text-sm md:text-base">
            “THIS SERVICE IS SELFLESSLY DONE BY ME FOR SADHANA AND WORSHIP WHICH
            IS KNOWN AS BHAKTI YOGA THROUGH KATHA GLOBALLY FOR THE WELFARE OF
            THE SOCIETY.”
          </p>

          <p className="text-end text-base text-purple-400 font-extrabold my-5 block">
            Prashant Mukunda Das....
          </p>

          <button className="btn p-3">Read More About Me</button>
        </div>
      </div>

      <div className="md:grid grid-cols-3 border-b-8 border-gray-800 border-r-8 other-image-items">
        {sections.map((image: any, index: number) => (
          <div key={index} className="relative image">
            <img
              src={`./images/all-section/${image.url}`}
              alt={'Image' + index}
              className={
                'border-l-8 border-t-8 border-gray-800 shadow other-image-item'
              }
            />
            <h3 className="text-white font-extrabold text-[40px] absolute top-2/4 text-center w-full">
              {image.sectionName}
            </h3>
          </div>
        ))}
      </div>

      <div
        style={{
          background: `url(./images/${gatewaryImage})`,
          backgroundSize: 'cover',
          backgroundAttachment: 'scroll',
          backgroundPosition: 'top center',
        }}
      >
        <div
          style={{
            opacity: '0.8',
            backgroundColor: '#000000',
            // height: '400px',
          }}
        >
          <div className="container mx-auto px-10">
            <div className="pt-28">
              <h1 className="text-white text-5xl font-bold text-center">
                GATEWAY OF SPIRITUAL WORLD
              </h1>
              <p className="text-white text-center pt-8 text-base">
                We are highly recommend below links for your spiritual
                advancement
              </p>
              <div className="columns-2 pt-24 pb-24">
                <div
                  className="flex flex-col align-middle"
                  style={{ alignItems: 'center' }}
                >
                  <div
                    style={{
                      padding: '24px',
                      border: '3px solid #fff',
                      borderRadius: '50px',
                    }}
                  >
                    <Book color="white" size={50} />
                  </div>
                  <h3 className="text-white pt-2 font-bold text-base">
                    PRABHUPADA <span style={{ color: '#9333ea' }}>BOOKS</span>
                  </h3>
                </div>
                <div
                  className="flex flex-col align-middle"
                  style={{ alignItems: 'center' }}
                >
                  <div
                    style={{
                      padding: '24px',
                      border: '3px solid #fff',
                      borderRadius: '50px',
                    }}
                  >
                    <Feather color="white" size={50} />
                  </div>
                  <h3 className="text-white pt-2 font-bold text-base">
                    VEDIC <span style={{ color: '#9333ea' }}>NAMES</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:grid grid-cols-3 video-count-cards ">
        {videoRecords.map((video: any, index: number) => {
          return (
            <div
              key={index}
              className={`flex flex-col m-4 video-count-card-${
                index + 1
              } text-center px-8 py-12 rounded overflow-hidden shadow-lg border`}
            >
              <p className={`totalVideos`}>
                <CountUp end={video.totalVideos} />
              </p>
              <p className="type">{video.type}</p>
              <div key={index} className="slug">
                <span className="slug-1">
                  <Link href={video.linkOne.slug}>{video.linkOne.name}</Link>
                </span>
                &nbsp;|&nbsp;
                <span className="slug-2">
                  <Link href={video.linkTwo.slug}>{video.linkTwo.name}</Link>
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export async function getServerSideProps(context: any) {
  // 
  const res = await fetch(`${server}/images`)
  const images = await res.json()

  return {
    props: {
      images,
    },
  }
}

export default Home
