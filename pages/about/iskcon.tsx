import { NextPage } from 'next'
import { server } from '../../config'

const ISKCON: NextPage = (props: any) => {
  const { ISKCON } = JSON.parse(props.images),
  { image, title } = ISKCON;

  return (
    <section className='md:p-12 p-5'>
      <div className="flex justify-center">
        <img
          src={`/images/about/${image}`}
          className="p-2 border mb-4 md:w-[500px] shadow md:h-[300px]"          
        />
      </div>
      <div>
        <h4 className="text-[25px] text-purple-700 font-semibold border-b-[1.5px] mb-5">
          {title}
        </h4>
        <div className="md:text-base">
          <p className="text-justify">
            The International Society for Krishna Consciousness (ISKCON), also
            known as the Hare Krishna movement, is a Gaudiya Vaishnava religious
            organization. This society has been founded in{' '}
            <b className="text-purple-700">1966</b> in New York City by His
            Divine Grace A.C. Bhaktivedanta Swami Srila Prabhupada. This
            movement of mercy has spread to all continents of the world. Within{' '}
            <b className="text-purple-700">40</b> years it has established
            centers in most countries and important cities. The objective of
            this educational non-profit organisation is to make Lord Sri
            Chaitanya Mahaprabhu’s sankirtan movement available to every town
            and village.
          </p>
          <p className="text-justify">
            <b className="text-purple-700">Mission :</b>
          </p>
          <p className="text-justify">
            Srila Prabhupada gave a clear mission statement for ISKCON which is
            outlined in the following seven points.
          </p>
          <p className="text-justify">
            <b className="text-purple-700">The Seven Purposes of ISKCON :</b>
          </p>
          <p className="text-justify">
            To systematically propagate spiritual knowledge to society at large
            and to educate all people in the techniques of spiritual life in
            order to check the imbalance of values in life and to achieve real
            unity and peace in the world.
          </p>
          <p className="text-justify">
            To propagate a consciousness of Krishna (God), as it is revealed in
            the great scriptures of India, Bhagavad-gita and Srimad-Bhagavatam.
          </p>
          <p className="text-justify">
            To bring the members of the Society together with each other and
            nearer to Krishna, the prime entity, thus developing the idea within
            the members, and humanity at large, that each soul is part and
            parcel of the quality of Godhead (Krishna).
          </p>
          <p className="text-justify">
            To teach and encourage the sankirtana movement, congregational
            chanting of the holy name of God, as revealed in the teachings of
            Lord Sri Caitanya Mahaprabhu.
          </p>
          <p className="text-justify">
            To erect for the members and for society at large a holy place of
            transcendental pastimes dedicated to the personality of Krishna.
          </p>
          <p className="text-justify">
            To bring the members closer together for the purpose of teaching a
            simpler, more natural way of life.
          </p>
          <p className="text-justify">
            With a view towards achieving the aforementioned purposes, to
            publish and distribute periodicals, magazines, books and other
            writings.
          </p>
          <p className="text-justify">
            <b className="text-purple-700">Philosophy :</b>
          </p>
          <p className="text-justify">
            The Vedic scriptures state that spiritual life begins when one
            inquires into the nature of the absolute truth, the Supreme Godhead.
            Gaudiya Vaisnavas are monotheists and know the personality of
            Godhead as Krishna, the All-attractive. But it is also recognised
            that the Supreme has unlimited names such as Rama, Buddha, Vishnu,
            Jehovah, Allah, etc. The ultimate goal of Gaudiya Vaisnavism is to
            develop a loving relationship with the Supreme Godhead.
          </p>
          <p className="text-justify">
            To understand knowledge of self-realisation one must approach a
            genuine spiritual masterThe Vedas also tell us that the
            understanding of the self, as being non-material or spiritual by
            nature, is the preliminary stage of realisation of the absolute
            truth. To understand knowledge of self-realisation one must approach
            a genuine spiritual master, just as one learns the essence of any
            subject from a perfected practitioner.
          </p>
          <p className="text-justify">
            The congregational chanting of the maha-mantra,{' '}
            <b>
              Hare Krishna, Hare Krishna, Krishna Krishna, Hare Hare, Hare Rama,
              Hare Rama, Rama Rama, Hare Hare,
            </b>{' '}
            as promoted by Sri Caitanya, is accepted by the Vedas as the most
            effective means of self-purification in this age. The Vedas describe
            the mantra as a prayer to the Lord,{' '}
            <b>“Please Lord, engage me in Your service”.</b>
          </p>
          <p className="text-justify">
            Devotees may accept formal initiation into the chanting of the Holy
            Name vowing to abstain from intoxication, gambling, illicit sexual
            connections and the eating of meat, fish or eggs. ISKCON members
            believe indulgence in the aforementioned activities disrupts
            physical, mental and spiritual well-being, and increases anxiety and
            conflict in society. At the time of initiation devotees also agree
            to chant a prescribed number of mantras each day.
          </p>
          <p className="text-justify">
            <b className="text-purple-700">Communities :</b>
          </p>
          <p className="text-justify">
            Most ISKCON members practise Krishna consciousness in their homes
            and live and work in the general community. They also congregate in
            temples for worship.
          </p>
          <p className="text-justify">
            Most temple-based members are in training, or serve as clergy
            engaged in ministerial and missionary work. Some members also help
            maintain ISKCON rural communities throughout the world.
          </p>
          <p className="text-justify">
            <strong className="text-purple-700">
              Governing Body Commission (GBC) :
            </strong>
          </p>
          <p className="text-justify">
            In <b className="text-purple-700">1970</b> Srila Prabhupada formed a
            Governing Body Commission (GBC) to help manage an expanding ISKCON.
            Before Srila Prabhupada passed away in{' '}
            <b className="text-purple-700">1977,</b> he requested that executive
            authority for ISKCON be passed to this Commission. The GBC decides
            ISKCON’s major strategies and guidelines by democratic voting and in
            consultation with Temple Presidents and other leaders.
          </p>
          <p className="text-justify">
            <b className="text-purple-700">Bhaktivedanta Book Trust (BBT)</b>
          </p>
          <p className="text-justify">
            Working tirelessy over <b className="text-purple-700">12</b> years,
            Srila Prabhupada managed to write over{' '}
            <b className="text-purple-700">70</b> volumes of books –
            translations of Vedic scriptures into English and extensive
            commentaries on them.
          </p>
          <p className="text-justify">
            Established in <b className="text-purple-700">1972</b> for
            publishing Srila Prabhupada’s works, The Bhaktivedanta Book Trust
            (BBT) has become the world’s largest publisher and distributor of
            books on Indian philosophy and religion.
          </p>
          <p className="text-justify">
            To date, the BBT has published over{' '}
            <b className="text-purple-700">500</b> million books and magazines
            in more than <b className="text-purple-700">60</b> languages.
          </p>
          <p className="text-justify">
            <b className="text-purple-700">History :</b>
          </p>
          <p className="text-justify">
            The International Society for Krishna Consciousness was founded by
            His Divine Grace A.C. Bhaktivedanta Swami Prabhupada in{' '}
            <b className="text-purple-700">1966.</b> It belongs to the Gaudiya
            Vaisnava tradition, a devotional tradition based on the teachings of
            Bhagavad-gita and Srimad-Bhagavatam.
          </p>
          <p className="text-justify">
            The precepts and practices of ISKCON were taught and codified by the{' '}
            <b className="text-purple-700">15th</b> century saint and religious
            reformer Sri Caitanya Mahaprabhu and his principle associates, the
            Six Goswamis of Vrindavana.
          </p>
        </div>
      </div>
    </section>
  )
}

export async function getStaticProps(context: any) {
  const res = await fetch(`${server}/images`, {
    method: 'POST',
    body: JSON.stringify({ requestType: 'about' }),
  })
  const images = await res.json()

  return {
    props: {
      images,
    },
  }
}
export default ISKCON
