import { NextPage } from 'next'
import { server } from '../../config';

const LordChaitanya: NextPage = (props: any) => {
  const { Chaitanya } = JSON.parse(props.images),
  { image, title } = Chaitanya;

  return (
    <section className='mt-1'>
      <div className="flex justify-center">
        <img
          src={`/images/about/${image}`}
          className="p-2 border mt-4 md:w-[300px] shadow md:h-[300px]"          
        />
      </div>
      <div className="md:text-base p-12">
      <h4 className="text-[25px] text-purple-700 font-semibold border-b-[1.5px]">
          {title}
        </h4>
        <p>
          Sri Chaitanya Mahaprabhu exhibited the highest level of devotion to
          Supreme Lord Sri Krishna. Read about His life and teachings.
        </p>
        <p>
          Sri Chaitanya Mahaprabhu is none other than Supreme Lord Sri Krishna,
          who appeared in this Kali-yuga to inaugurate the yuga dharma for this
          age – Sankirtana, the congregational chanting of the Holy Names of the
          Lord.
        </p>
        <p>
          <strong className='text-purple-700'>His Appearance</strong>
        </p>
        <p>
          Sri Chaitanya Mahaprabhu appeared at <span className="text-purple-700">Sridhama Mayapura,</span> in the
          city of Navadvipa in Bengal, on the Phalguni Purnima evening in the
          year <span className="text-purple-700">1486</span> AD. His father, <span className="text-purple-700">Sri Jagannatha Mishra,</span> a
          learned brahmana from the district of Sylhet, came to Navadvipa as a
          student. He lived on the banks of the Ganges with his wife{' '}
          <span className="text-purple-700">Srimati Sachidevi,</span> the daughter of{' '}
          <span className="text-purple-700">Srila Nilambara Chakravarty,</span> a great learned scholar of
          Navadvipa. Their youngest son, who was named <span className="text-purple-700">Vishvambhara,</span>{' '}
          later became known as <span className="text-purple-700">Nimai Pandita</span> and then, after accepting
          the renounced order of life, <span className="text-purple-700">Sri Chaitanya Mahaprabhu.</span>
        </p>
        <p>
          <strong className='text-purple-700'>His Pastimes</strong>
        </p>
        <p>
          The wonderful pastimes performed by Sri Chaitanya Mahaprabhu in the
          city of Navadvipa and in Jagannath Puri are recorded by His
          biographers. The early life of the Lord is most fascinatingly
          expressed by the author of Chaitanya-bhagavata (Sri Vrindavana Dasa
          Thakura), and as far as the teachings are concerned, they are more
          vividly explained in the Chaitanya-Charitamrita (by Sri Krishna Dasa
          Kaviraja Gosvami). Now they are available to the English-speaking
          public in our Teachings of Lord Chaitanya.
        </p>
        <ul>
          <li>Childhood Pastimes</li>
          <li>The Debate with Kashmiri Pandita</li>
          <li>Inaugurating the Sankirtana Movement</li>
          <li>Deliverance of Jagai and Madhai</li>
          <li>Accepting Sannyasa Order of Life</li>
        </ul>
        <p>
          <strong className='text-purple-700'>His Teachings</strong>
        </p>
        <p>
          Sri Chaitanya Mahaprabhu preached the Srimad-Bhagavatam and propagated
          the teachings of the Bhagavad-gita&nbsp;in the most practical way.
        </p>
        <p>
          The essence of His teachings is recorded in Chaitanya Manjusha as
          follows:
        </p>
        <ul>
          <li>
            Lord Sri Krishna, who appeared as the son of the King of Vraja
            (Nanda Maharaja), is the Supreme Personality of Godhead and is
            worshipable by all.
          </li>
          <li>
            Vrindavana-dhama is non-different from the Lord and hence is as
            worshipable as the Lord.
          </li>
          <li>
            The highest form of transcendental worship of the Lord was exhibited
            by the damsels of Vrajabhumi.
          </li>
          <li>
            Srimad-Bhagavata Purana is the spotless literature for understanding
            the Lord.
          </li>
          <li>
            The ultimate goal of human life is to attain the stage of prema, or
            love of God.
          </li>
        </ul>
        <p>
          His instructions to <span className="text-purple-700">Srila Rupa Gosvami</span> and{' '}
          <span className="text-purple-700">Srila Sanatana Gosvami,</span> His discussions with Ramananda Raya,
          the debate with the Mayavadi sannyasi Prakashananda Sarasvati and the
          Vedanta Sutra, the discussion between Him and Sarvabhauma Bhattacharya
          are excellent sources through which we understand His teachings in
          detail.
        </p>
        <p>
          The Lord left only eight slokas of His instructions in writing, and
          they are known as the Siksastaka. All other literatures based on His
          teachings were extensively written by the Lord’s principal followers,
          the six Gosvamis of Vrindavana, and their followers.
        </p>
        <p>
          <strong className='text-purple-700'>His Mission – The Universal Religion</strong>
        </p>
        <p>
          His mission was to preach the importance of chanting the holy names of
          the Lord in this age of Kali (quarrel). In this present age quarrels
          take place even over trifles, and therefore the shastras have
          recommended for this age a common platform for realization, namely
          chanting the holy names of the Lord. People can hold meetings to
          glorify the Lord in their respective languages and with melodious
          songs, and if such performances are executed in an offenseless manner,
          it is certain that the participants will gradually attain spiritual
          perfection without having to undergo more rigorous methods. At such
          meetings everyone, the learned and the foolish, the rich and the poor,
          the Hindus and the Muslims, the Englishmen and the Indians, and the
          chandalas and the brahmanas, can all hear the transcendental sounds
          and thus cleanse the dust of material association from the mirror of
          the heart. To confirm the Lord’s mission, all the people of the world
          will accept the holy name of the Lord as the common platform for the
          universal religion of mankind.
        </p>
      </div>
    </section>
  )
}

export async function getStaticProps(context: any) {
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

export default LordChaitanya
