import { server } from "../config"

const data = [
  {
    image: 'GauraAarti.jpeg',
    title: 'Gaura Aarti',
    other: 'In Evening',
    hyms: [
      {
        title: 'Hindi Version',
        hym: `जय जय गोराचाँदेर आरतिक शोभा। 
                जाह्नवी तट वने जगमन लोभा
                
                दक्षिणे निताईचाँद बामे गदाधर। 
                निकटे अद्वैत श्रीवास छत्रधर
                
                बसियाछे गौराचाँदेर रत्न-सिंहासने। 
                आरति करेन ब्रह्मा-आदि देवगणे
                
                नरहरि आदि कोरि चामर ढुलाय। 
                सञ्जय मुकुंद वासुघोष आदि गाय
                
                शंख बाजे घण्टा बाजे, बाजे करताल। 
                मधुर मृदंग बाजे परम रसाल
                
                (शंख बाजे घंटा बाजे, मधुर मधुर मधुर बाजे। 
                निताई गौर हरिबोल हरिबोल हरिबोल हरिबोल॥) 
                
                बहु कोटि चन्द्र जिनि वदन उज्जवल। 
                गलदेशे वनमाला करे झलमल
                
                शिव-शुक नारद प्रेमे गद्‌गद्। 
                भकति-विनोद देखे गौरार सम्पद`,
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
        hym: `श्रीमद्‌गुरोरष्टकमेतदुच्चे-ब्राह्मे मुहूर्त्ते पठति प्रयत्नात। यस्तेन वृन्दावन नाथ साक्षात्‌ सवैव लभ्या जनुषोऽन्त एव॥ 
              “जो वयक्तिब्रह्ममुहूर्त के शुभसमय में श्रीगुरु के प्रति गुणगान युक्त इस प्रार्थना का उच्चस्वर से एवं सावधानीपूर्वक गान करता है, 
              उसे मृत्यु के समय वृन्दावननाथ-कृष्ण की प्रत्यक्ष सेवा का अधिकार प्राप्त होता है। 
              संसार-दावानल-लीढ-लोक
              त्राणाय कारुण्य-घनाघनत्वम्।
              प्राप्तस्य कल्याण-गुणार्णवस्य
              वन्दे गुरोःश्रीचरणारविन्दम्॥1॥

              
              महाप्रभोः कीर्तन-नृत्यगीत
              वादित्रमाद्यन्‌-मनसो-रसेन।
              रोमाञ्च-कम्पाश्रु-तरंग-भाजो
              वन्दे गुरोः श्रीचरणारविन्दम्॥2॥
              
              
              
              श्रीविग्रहाराधन-नित्य-नाना।
              श्रृंगार-तन्‌-मन्दिर-मार्जनादौ।
              युक्तस्य भक्तांश्च नियुञ्जतोऽपि
              वन्दे गुरोः श्रीचरणारविन्दम्॥3॥
              
              चतुर्विधा-श्री भगवत्‌-प्रसाद-
              स्वाद्वन्न-तृप्तान्‌ हरि-भक्त-संङ्घान्।
              कृत्वैव तृप्तिं भजतः सदैव
              वन्दे गुरोः श्रीचरणारविन्दम्॥4॥
              
              
              
              श्रीराधिका-माधवयोर्‌अपार-
              माधुर्य-लीला-गुण-रूप-नाम्नाम्।
              प्रतिक्षणाऽऽस्वादन-लोलुपस्य
              वन्दे गुरोः श्रीचरणारविन्दम्॥5॥
              
              
              
              निकुञ्ज-युनो रति-केलि-सिद्धयै
              या यालिभिर्‌ युक्तिर्‌ अपेक्षणीया।
              तत्राति-दक्ष्याद्‌ अतिवल्लभस्य
              वन्दे गुरोः श्रीचरणारविन्दम्॥6॥
              
              साक्षाद्‌-धरित्वेन समस्त शास्त्रैः
              उक्तस्तथा भावयत एव सद्भिः।
              किन्तु प्रभोर्यः प्रिय एव तस्य
              वन्दे गुरोः श्रीचरणारविन्दम्॥7॥
              
              यस्यप्रसादाद्‌ भगवदप्रसादो
              यस्याऽप्रसादन्न्‌ न गति कुतोऽपि।
              ध्यायंस्तुवंस्तस्य यशस्त्रि-सन्ध्यं
              वन्दे गुरोः श्रीचरणारविन्दम्॥8॥`,
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
        hym: `नमस्ते नृसिंहाय लिरिक्स आरती
            प्रह्लादह्लाद दायिने।
            हिरण्यकशिपोर्वक्षः
            शिलाटंक नखालये॥1॥
            
            इतो नृसिंहः परतो नृसिंहो
            यतो यतो यामि ततो नृसिंहः।
            बहिर्नृसिंहो हृदये नृसिंहो
            नृसिंहमादि शरणं प्रपद्ये॥2॥

            तव कर-कमल-वरे नखम्‌ अद्‌भुत-श्रृंङ्गम्‌
            दलित-हिरण्यकशिपु-तनु-भृंङ्गम्‌
            केशव धृत-नरहरिरूप जय जगदीश हरे॥3॥
        `,
      },
      {
        title: 'English Version',
        hym: `namaste narasimhaya
            prahladahlada-dayine
            hiranyakasipor vakshahsila-
            tanka-nakhalaye ||
            
            ito nrisimhah parato nrisimho
            yato yato yami tato nrisimhah
            bahir nrisimho hridaye nrisimho
            nrisimham adim saranam prapadye 

            tava kara-kamala-vare nakham adbhuta-sringam
            dalita-hiranyakasipu-tanu-bhringam
            kesava dhrita-narahari-rupa jaya jagadisa hare ||
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
    console.log(data)
    return (
      <>
        <div className="p-5">
          <div className="grid md:grid-cols-2 grid-cols-1">
            {data.map((section, index: number) => {
              return <div key={index}>
              <section>
               <img src={"/images/e-aarti/"+section.image} className="w-full"  alt={section.title}/>
               </section>
              <section>
                  {section.hyms.map((hym, ind) => (
                    <section key={ind}>
                      <h5>{hym.title}</h5>
                      <h5>{hym.hym}</h5>
                    </section>
                  ))}
              </section>
              </>
            })}
          </div>
        </div>
      </>
    )
}

export default EAarti