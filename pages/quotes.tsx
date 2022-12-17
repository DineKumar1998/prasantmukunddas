import { MessageCircle } from "react-feather";
import { server } from "../config"

const Quotes = (props: any) => {
    const { quotes } = JSON.parse(props.quotes);

    return (
      <div className="p-5">
        <h2 className="text-[20px] font-bold capitalize bg-slate-100 py-2 px-5 mb-5  border rounded text-slate-800">
          General quotes
        </h2>
        <div className="md:columns-3 columns-1 gap-6 md:mx-5">
          {quotes.map((quote: any, index: any) => {
            return (
              <div
                key={index}
                className="p-6 break-inside-avoid mb-6 bg-white text-white text-base rounded-lg border border-gray-200 shadow-md"
              >
                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                  <span className="font-bold text-lg">&#8220;</span>
                  {quote.quote}
                  <span className="font-bold text-lg">&#8221;</span>
                </p>
                <p className="md:grid grid-cols-3 flex flex-col items-end">
                  <span className="font-bold text-slate-400 md:pb-0 pb-2">{quote.date}</span>
                  <span className="border col-span-2 bg-slate-100 px-2 rounded-md font-bold flex items-center text-purple-700">
                    {quote.author} <MessageCircle size={20} className="ml-2" />
                  </span>
                </p>
              </div>
            )
          })}
        </div>
      </div>
    )
}

export async function getServerSideProps(context: any) {
    const res = await fetch(`${server}/quotes`, {
      method: 'GET',
    })
    const quotes = await res.json()
  
    return {
      props: {
        quotes,
      },
    }
  }

export default Quotes;