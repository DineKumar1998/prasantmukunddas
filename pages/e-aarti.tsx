import { server } from "../config"

const data = [
  {
    image: 'GauraAarti.jpeg',
    title: 'Gaura Aarti',
    other: 'In Evening',
    hyms: [
      {
        title: 'Hindi Version',
        hym: `  
                <p>जय जय गोराचाँदेर आरतिक शोभा। </p>
                <p>जाह्नवी तट वने जगमन लोभा</p>
                
                <p>दक्षिणे निताईचाँद बामे गदाधर। </p>
                <p>निकटे अद्वैत श्रीवास छत्रधर</p>
                
                <p>बसियाछे गौराचाँदेर रत्न-सिंहासने। </p>
                <p>आरति करेन ब्रह्मा-आदि देवगणे</p>
                
                <p>नरहरि आदि कोरि चामर ढुलाय। </p>
                <p>सञ्जय मुकुंद वासुघोष आदि गाय</p>
                
                <p>शंख बाजे घण्टा बाजे, बाजे करताल। </p>
                <p>मधुर मृदंग बाजे परम रसाल</p>
                
                <p>(शंख बाजे घंटा बाजे, मधुर मधुर मधुर बाजे। </p>
                <p>निताई गौर हरिबोल हरिबोल हरिबोल हरिबोल॥) </p>
                
                <p>बहु कोटि चन्द्र जिनि वदन उज्जवल।</p>
                <p>गलदेशे वनमाला करे झलमल</p>
                
                <p>शिव-शुक नारद प्रेमे गद्‌गद्। </p>
                <p>भकति-विनोद देखे गौरार सम्पद</p>`,
      },
      {
        title: 'English Version',
        hym: 'NA',
      },
    ],
  },
  {
    image: 'GuruAshatak.jpeg',
    title: 'Guru Ashatak',
    other: 'In Morning',
    hyms: [
      {
        title: 'Hindi Version',
        hym: `<p>श्रीमद्‌गुरोरष्टकमेतदुच्चे-ब्राह्मे मुहूर्त्ते पठति प्रयत्नात। यस्तेन वृन्दावन नाथ साक्षात्‌ सवैव लभ्या जनुषोऽन्त एव॥ 
              “जो वयक्तिब्रह्ममुहूर्त के शुभसमय में श्रीगुरु के प्रति गुणगान युक्त इस प्रार्थना का उच्चस्वर से एवं सावधानीपूर्वक गान करता है, 
              उसे मृत्यु के समय वृन्दावननाथ-कृष्ण की प्रत्यक्ष सेवा का अधिकार प्राप्त होता है। </p>
              <div class="md:grid grid-cols-2">
              <p>संसार-दावानल-लीढ-लोक</p>
              <p>त्राणाय कारुण्य-घनाघनत्वम्।</p>
              <p>प्राप्तस्य कल्याण-गुणार्णवस्य</p>
              <p>वन्दे गुरोःश्रीचरणारविन्दम्॥1॥</p>

              <p>महाप्रभोः कीर्तन-नृत्यगीत</p>
              <p>वादित्रमाद्यन्‌-मनसो-रसेन।</p>
              <p>रोमाञ्च-कम्पाश्रु-तरंग-भाजो</p>
              <p>वन्दे गुरोः श्रीचरणारविन्दम्॥2॥</p>
              
              <p>श्रीविग्रहाराधन-नित्य-नाना।</p>
              <p>श्रृंगार-तन्‌-मन्दिर-मार्जनादौ।</p>
              <p>युक्तस्य भक्तांश्च नियुञ्जतोऽपि</p>
              <p>वन्दे गुरोः श्रीचरणारविन्दम्॥3॥</p>
              
              <p>चतुर्विधा-श्री भगवत्‌-प्रसाद-</p>
              <p>स्वाद्वन्न-तृप्तान्‌ हरि-भक्त-संङ्घान्।</p>
              <p>कृत्वैव तृप्तिं भजतः सदैव</p>
              <p>वन्दे गुरोः श्रीचरणारविन्दम्॥4॥</p>

              <p>श्रीराधिका-माधवयोर्‌अपार-</p>
              <p>माधुर्य-लीला-गुण-रूप-नाम्नाम्।</p>
              <p>प्रतिक्षणाऽऽस्वादन-लोलुपस्य</p>
              <p>वन्दे गुरोः श्रीचरणारविन्दम्॥5॥</p>
            
              <p>निकुञ्ज-युनो रति-केलि-सिद्धयै</p>
              <p>या यालिभिर्‌ युक्तिर्‌ अपेक्षणीया।</p>
              <p>तत्राति-दक्ष्याद्‌ अतिवल्लभस्य</p>
              <p>वन्दे गुरोः श्रीचरणारविन्दम्॥6॥</p>
              
              <p>साक्षाद्‌-धरित्वेन समस्त शास्त्रैः</p>
              <p>उक्तस्तथा भावयत एव सद्भिः।</p>
              <p>किन्तु प्रभोर्यः प्रिय एव तस्य</p>
              <p>वन्दे गुरोः श्रीचरणारविन्दम्॥7॥</p>
              
              <p>यस्यप्रसादाद्‌ भगवदप्रसादो</p>
              <p>यस्याऽप्रसादन्न्‌ न गति कुतोऽपि।</p>
              <p>ध्यायंस्तुवंस्तस्य यशस्त्रि-सन्ध्यं</p>
              <p>वन्दे गुरोः श्रीचरणारविन्दम्॥8॥</p>
              </div>
              
              
              
              
              `,
      },
      {
        title: 'English Version',
        hym: 'NA',
      },
    ],
  },
  {
    image: 'NarSingh.jpeg',
    title: 'Nar singh aarti',
    other: 'In morning after guru ashtak',
    hyms: [
      {
        title: 'Hindi Version',
        hym: `<p>नमस्ते नृसिंहाय लिरिक्स आरती</p>
            <p>प्रह्लादह्लाद दायिने।</p>
            <p>हिरण्यकशिपोर्वक्षः</p>
            <p>शिलाटंक नखालये॥1॥</p>
            
            <p>इतो नृसिंहः परतो नृसिंहो</p>
            <p>यतो यतो यामि ततो नृसिंहः।</p>
            <p>बहिर्नृसिंहो हृदये नृसिंहो</p>
            <p>नृसिंहमादि शरणं प्रपद्ये॥2॥</p>

            <p>तव कर-कमल-वरे नखम्‌ अद्‌भुत-श्रृंङ्गम्‌</p>
            <p>दलित-हिरण्यकशिपु-तनु-भृंङ्गम्‌</p>
            <p>केशव धृत-नरहरिरूप जय जगदीश हरे॥3॥</p>
        `,
      },
      {
        title: 'English Version',
        hym: `<p>namaste narasimhaya</p>
            <p>prahladahlada-dayine</p>
            <p>hiranyakasipor vakshahsila-</p>
            <p>tanka-nakhalaye ||</p>
            
            <p>ito nrisimhah parato nrisimho</p>
            <p>yato yato yami tato nrisimhah</p>
            <p>bahir nrisimho hridaye nrisimho</p>
            <p>nrisimham adim saranam prapadye </p>

            <p>tava kara-kamala-vare nakham adbhuta-sringam</p>
            <p>dalita-hiranyakasipu-tanu-bhringam</p>
            <p>kesava dhrita-narahari-rupa jaya jagadisa hare ||</p>
            `,
      },
    ],
  },
  {
    image: 'TulsiAarti.jpeg',
    title: 'Tulsi Aarti aarti',
    other: 'In morning after Nar singh aarti',
    hyms: [
      {
        title: 'Hindi Version',
        hym: 'NA',
      },
      {
        title: 'English Version',
        hym: 'NA',
      },
    ],
  },
]
const EAarti = () => {
    return (
      <>
        <div className="p-5">
          <div className="md:columns-2 columns-1 gap-4">
            {data.map((section, index: number) => {
              return (
                <div key={index} className="break-inside-avoid shadow-md rounded-xl overflow-hidden mb-4">
                  <section>
                    <img
                      src={'/images/e-aarti/' + section.image}
                      className="w-full h-full"
                      alt={section.title}
                    />
                  </section>
                  <section className="p-4 border">
                    {section.hyms.map((hym, ind) => (
                      <section key={ind} className="pb-4">
                        <h5 className="text-center font-bold md:text-xl">{hym.title}</h5>
                        <div className="text-center md:text-sm" dangerouslySetInnerHTML={{ __html: hym.hym }}></div>
                      </section>
                    ))}
                  </section>
                </div>
              )
            })}
          </div>
        </div>
      </>
    )
}

export default EAarti