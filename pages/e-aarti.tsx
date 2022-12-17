import { server } from '../config'
import { data } from '../assets/aarti'

const EAarti = () => {
  return (
    <>
      <div className="p-5">
        <div className="md:columns-2 columns-1 gap-4">
          {data.map((section, index: number) => {
            return (
              <div
                key={index}
                className="break-inside-avoid shadow-md rounded-xl overflow-hidden mb-4"
              >
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
                      <h5 className="text-center font-bold md:text-xl">
                        {hym.title}
                      </h5>
                      <div
                        className="text-center md:text-sm"
                        dangerouslySetInnerHTML={{ __html: hym.hym }}
                      ></div>
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
