import { NextPage } from 'next'
import { server } from '../../config';

const SrilaPrabhupada: NextPage = (props: any) => {
  const { Prabhupada } = JSON.parse(props.images),
  { image, title } = Prabhupada;

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
          <p className="text-justify">
            For millennia the teachings and the rich culture of bhakti-yoga, or
            Krishna Consciousness, had been hidden within the borders of India.
            Today, millions around the globe express their gratitude to Srila
            Prabhupada for revealing the timeless wisdom of bhakti to a world.
          </p>
          <p className="text-justify">
            Born as Abhay Charan De on{' '}
            <span className="text-purple-600">September 1, 1896,</span> in
            Calcutta, as a young man he joined Mahatma Gandhi’s civil
            disobedience movement. In{' '}
            <span className="text-purple-600">1922,</span> a meeting with the
            prominent scholar and spiritual leader, Srila Bhaktisiddhanta
            Sarasvati, proved to be most influential on young Abhay’s future
            calling.
          </p>
          <p className="text-justify">
            Srila Bhaktisiddhanta was a leader in the Gaudiya Vaishnava
            community, a monotheistic tradition within the broader Hindu
            culture. At their very first meeting, Srila Bhaktisiddhanta asked
            Abhay to bring the teachings of Lord Krishna to the English-speaking
            world. Deeply moved by his devotion and wisdom, Abhay became a
            disciple of Srila Bhaktisiddhanta in{' '}
            <span className="text-purple-600">1933,</span> and resolved to carry
            out his mentor’s request. Abhay, later known by the honorific A.C.
            Bhaktivedanta Swami Prabhupada, spent the next{' '}
            <span className="text-purple-600">32</span> years preparing for his
            journey west.
          </p>
          <p className="text-justify">
            In <span className="text-purple-600">1965,</span>at the age of
            sixty-nine, Srila Prabhupada begged a free passage and boarded a
            cargo ship, the Jaladhuta, to New York. The journey proved to be
            treacherous and he suffered two heart attacks aboard. After{' '}
            <span className="text-purple-600">35 </span>days at sea, he first
            arrived at a lonely Brooklyn pier with just seven dollars in Indian
            rupees and a crate of his translations of sacred Sanskrit texts.
          </p>
          <p className="text-justify">
            In New York, he faced great hardships and began his mission humbly
            by giving classes on the Bhagavad-gita in lofts on the Bowery and
            leading kirtan (traditional devotional chants) in Tompkins Square
            Park. His message of peace and goodwill resonated with many young
            people, some of whom came forward to become serious students of the
            Krishna-bhakti tradition. With the help of these students,
            Bhaktivedanta Swami rented a small storefront on New York’s Lower
            East Side to use as a temple.
          </p>
          <p className="text-justify">
            In <span className="text-purple-600">July of 1966,</span>{' '}
            Bhaktivedanta Swami established the International Society for
            Krishna Consciousness (ISKCON) for the purpose he stated of
            “checking the imbalance of values in the world and working for real
            unity and peace”.
          </p>
          <p className="text-justify">
            In the eleven years that followed, Srila Prabhupada circled the
            globe <span className="text-purple-600">14 times</span> on lecture
            tours spreading the teachings of Lord Krishna. Men and women from
            all backgrounds and walks of life came forward to accept his
            message. With their help, Srila Prabhupada established temples, farm
            communities, a publishing house, and educational institutions around
            the world. And, he began what has now become the world’s largest
            vegetarian food relief program, Hare Krishna Food for Life.
          </p>
          <p className="text-justify">
            With the desire to nourish the roots of Krishna consciousness in its
            home, Srila Prabhupada returned to India several times, where he
            sparked a revival in the Vaishnava tradition. In India, he opened
            dozens of temples, including large centers in the holy towns of
            Vrindavana and Mayapura.
          </p>
          <p className="text-justify">
            Srila Prabhupada’s most significant contributions, perhaps, are his
            books. He authored over{' '}
            <span className="text-purple-600">70 volumes</span> on the Krishna
            tradition, which are highly respected by scholars for their
            authority, depth, fidelity to the tradition, and clarity. Several of
            his works are used as textbooks in numerous college courses. His
            writings have been translated into{' '}
            <span className="text-purple-600">76 languages.</span> His most
            prominent works include: Bhagavad-gita As It Is, the{' '}
            <span className="text-purple-600">30-volume</span>{' '}
            Srimad-Bhagavatam, and the{' '}
            <span className="text-purple-600">17-volume</span> Sri
            Caitanya-caritamrita.
          </p>
          <p className="text-justify">
            A.C. Bhaktivedanta Swami Srila Prabhupada passed away on{' '}
            <span className="text-purple-600">November 14, 1977,</span> in the
            holy town of Vrindavana, surrounded by his loving disciples who
            carry on his mission today.
          </p>
          <p className="text-justify">
            Srila Prabhupada spend several years in Vrindavan before going to
            America. Through his travels and preaching he revealed the glory of
            Vrindavan-dham to the whole world.
          </p>
          <p>
            <span className="text-purple-600">Srila Prabhupada Chronology</span>
          </p>
          <p>
            <span className="text-purple-600">1954</span> Left family,
            vanaprastha
            <br />
            <span className="text-purple-600">1956</span> Vrindavan residence,
            Vamsi Gopal temple
            <br />
            <span className="text-purple-600">1959 </span>Begins translating
            Srimad Bhagavatam in Delhi
            <br />
            July Moves upstairs Radha-Damodara temple
            <br />
            Sept. 17, Takes sannyasa, renounced order of life
            <br />
            <span className="text-purple-600">1960</span> Fall Publishes first
            book, paperback Easy Journey to Other Planets
            <br />
            <span className="text-purple-600">1962 </span>July Moves into
            downstairs rooms at Radha-Damodara
            <br />
            <span className="text-purple-600">Sept. </span>Publishes Volume one,
            Srimad Bhagavatam in Delhi
            <br />
            <span className="text-purple-600">1963 </span>December Publishes
            volume two Srimad Bhagavatam
            <br />
            <span className="text-purple-600">1964 </span>December Publishes
            volume three Srimad Bhagavatam
            <br />
            <span className="text-purple-600">1965 </span>August 13, Leaves
            Calcutta on Jaladuta bound for America
            <br />
            <span className="text-purple-600">1967</span> Returns to
            Radha-Damodara
            <br />
            <span className="text-purple-600">1971</span> Visits Radha-Damodara
            and Vrindavan with forty disciples
            <br />
            <span className="text-purple-600">1972 </span>Kartik at
            Radha-Damodara, delivers famous Nectar of Devotion lectures
            <br />
            <span className="text-purple-600">1977</span> Enters the eternal
            lila of Radha and Krishna in Goloka Vrindavan
          </p>
          <p>
            <span className="text-purple-600">
              (from: Mahanidhi Swami: Prabhupada in Radha-Damodara, BBT 2003)
            </span>
          </p>
          <p>
            <span className="text-purple-600">Hare Krishna</span>
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

export default SrilaPrabhupada
