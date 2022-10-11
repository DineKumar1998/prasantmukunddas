import { NextPage } from 'next'
import { server } from '../../config'

const GuruMaharaj: NextPage = (props: any) => {
  const { HGPMD } = JSON.parse(props.images),
  { image, title } = HGPMD;

  return (
    <section className='md:p-12 p-5'>
      <div className="flex justify-center">
        <img
          src={`/images/about/${image}`}
          className="p-2 border my-4 md:w-[300px] shadow md:h-[300px]"
        />
      </div>
      <div>
        <h4 className="text-[25px] text-purple-700 font-semibold border-b-[1.5px]">
          {title}
        </h4>
        <div className="md:text-base">
          <p className="py-2">
            Spiritual Guide and Senior Councillor for ISKCON.
          </p>
          <p className="py-2 text-purple-600"> His Profesional Education :</p>
          <p className="py-2">
            B.Sc (Industrial Chemistry) Delhi University, MBA ( Symbiosis
            institute) DPS from london college of management.
          </p>
          <p className="py-2">
            He has worked with big multi national companies like Novartis, WNS,
            Millward Brown.
          </p>
          <p className="py-2">He is associated with ISKCON last 15 years.</p>
          <p className="py-2">
            He is Vedic Bhakti Shastri from ISKCON (MIHE - Mayapur Institute of
            Higher Education)
          </p>
          <p className="py-2">
            He is Involved into Councelling as spiritual Guide to many families
            @ India, Florida, Phillidelphia, Dubai, Muscut, Oman, Denver,
            Pakistan, Myanmar, malaysia, New Jersey, Germany, London,
            Bangladesh. He is famous vedic scripture speaker can be seen on
            YouTube and Hare Krishna TV Channel.
          </p>

          <p className="py-2">
            He has done more than 100 seminars on DYPH, Life Management, Stress
            Management , Time Management in corporates, schools, societies,
            management colleges. Like Apeejay College of Management, Delhi.
            Indian navy school, Visakhapatnam. Paras Hospital, Gurgaon. Akash
            College , Ajmer. PHD chamber of commerce , Delhi. AIims Hospital
            Delhi.
          </p>

          <p className="py-2">
            He is known for his Dham Yatra Katha done at Rameshvaram, Jagannath
            Puri, Dwarka, Vrindavan, Mayapur, Tirupati, Guruvayur, uddippi, Sri
            Rangam, Haridwar, Suktaal, Yamunotri, Simhachalam, Ahobilam.
          </p>
          <p className="py-2">
            He is regular guest speaker of srimad Bhagwatam in different iskcon
            temples globaly...
          </p>
        </div>
      </div>
    </section>
  )
}

export async function getServerSideProps(context: any) {
  const res = await fetch(`${server}/images`, {
    method: 'POST',
    body: 'about',
  })
  const images = await res.json()

  return {
    props: {
      images,
    },
  }
}

export default GuruMaharaj
