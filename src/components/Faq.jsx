import { useState } from "react";

const accordionItems = [
  {
    id: "accordion1",
    question: "Questions 1 ?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eum quae. Harum officiis reprehenderit ex quia ducimus minima id provident molestias optio nam vel, quidem iure voluptatem, repellat et ipsa.",
  },
  {
    id: "accordion2",
    question: "Questions 2 ?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eum quae. Harum officiis reprehenderit ex quia ducimus minima id provident molestias optio nam vel, quidem iure voluptatem, repellat et ipsa.",
  },
  {
    id: "accordion3",
    question: "Questions 3 ?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eum quae. Harum officiis reprehenderit ex quia ducimus minima id provident molestias optio nam vel, quidem iure voluptatem, repellat et ipsa.",
  },
  {
    id: "accordion4",
    question: "Questions 4 ?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eum quae. Harum officiis reprehenderit ex quia ducimus minima id provident molestias optio nam vel, quidem iure voluptatem, repellat et ipsa.",
  },

];

export default function Faq() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <section className="bg-gray-50">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold  lg:text-3xl">
          FAQ's
        </h1>

        <hr className="my-6 border-gray-200 dark:border-gray-700" />

        <div>
          {accordionItems.map((item, index) => (
            <div key={item.id} className="cursor-pointer group">
              <button
                className="flex items-center focus:outline-none w-full p-4"
                onClick={() => toggleAccordion(item.id)}
              >
                {activeAccordion === item.id ? (
                 <svg
                 className="flex-shrink-0 w-6 h-6 text-blue-500"
                 fill="none"
                 stroke="currentColor"
                 viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg"
               >
                 <path
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   strokeWidth="5"
                   d="M20 12H4"
                 ></path>
               </svg>
                ) : (
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 w-6 h-6 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="5"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  
                )}

                <h1 className="mx-4 text-xl select-none group-hover:underline">
                {item.question}
                </h1>
              </button>

              {activeAccordion === item.id && (
                <div className="flex mt-8 md:mx-10">
                  <span className="border border-blue-500"></span>

                  <p className="max-w-3xl px-4 text-gray-500 ">
                    {item.answer}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni, eum quae. Harum officiis reprehenderit ex quia
                    ducimus minima id provident molestias optio nam vel, quidem
                    iure voluptatem, repellat et ipsa.
                  </p>
                </div>
              )}
              
              {index != accordionItems.length- 1 && <hr className="my-4 border-gray-200 dark:border-gray-700" />}
            </div>
            
          ))}

          
{/* 
            <div>
                <button className="flex items-center focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" d="M12 4v16m8-8H4" />
                    </svg>

                    <h1 className="mx-4 text-xl">What can I expect at my first consultation ?</h1>
                </button>
            </div>

            <hr className="my-8 border-gray-200 dark:border-gray-700" />

            <div>
                <button className="flex items-center focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" d="M12 4v16m8-8H4" />
                    </svg>

                    <h1 className="mx-4 text-xl">What are your opening hours ?</h1>
                </button>
            </div>

            <hr className="my-8 border-gray-200 dark:border-gray-700" />

            <div>
                <button className="flex items-center focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" d="M12 4v16m8-8H4" />
                    </svg>

                    <h1 className="mx-4 text-xl">Do I need a referral ?</h1>
                </button>
            </div>

            <hr className="my-8 border-gray-200 dark:border-gray-700" />

            <div>
                <button className="flex items-center focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" d="M12 4v16m8-8H4" />
                    </svg>

                    <h1 className="mx-4 text-xl">Is the cost of the appointment covered by private health insurance ?</h1>
                </button>
            </div> */}
        </div>
      </div>
    </section>
  );
}
