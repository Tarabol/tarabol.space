/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable max-len */
import { tw } from 'twind';

const HiringSection = () => (
  <section className={tw(`bg-white pb-6`)}>
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-6`)}>
      <div className={tw(`container mx-auto`)}>
        <div className={tw(`flex flex-wrap pl-6`)}>
          <div className={tw(`w-full lg:w-1/3`)}>
            <p className={tw(`text-4xl font-bold text-left`)}>Heyyy, curious about us? Let's have a cuppa</p>
            <div className={tw(`flex my-5`)}>
              <img
                className={tw(`object-cover w-20 h-20 mr-2 rounded-full border-2`)}
                src="/images/avatar.jpeg"
                alt="Profile image"
              />
              <p className={tw(`pl-3 text-xl`)}>Please leave your contact information and we will right there</p>
            </div>
          </div>
          <div className={tw(`w-full lg:w-2/3`)}>
            <div className={tw(`flex flex-col lg:ml-10`)}>
              <div className={tw(`flex items-center border-b border-teal-500 py-2`)}>
                <input
                  className={tw(
                    `appearance-none bg-transparent border-null w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none`,
                  )}
                  type="text"
                  placeholder="Your Name"
                  aria-label="Full name"
                />
              </div>
              <div className={tw(`flex items-center border-b border-teal-500 py-2 mt-5`)}>
                <input
                  className={tw(
                    `appearance-none bg-transparent border-null w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none`,
                  )}
                  type="text"
                  placeholder="Your Email"
                  aria-label="Full email"
                />
              </div>
              <div className={tw(`flex items-center border-b border-teal-500 py-2 mt-5`)}>
                <input
                  className={tw(
                    `appearance-none bg-transparent border-null w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none`,
                  )}
                  type="text"
                  placeholder="Your Phone Number"
                  aria-label="Full phone number"
                />
              </div>
            </div>
            <button
              className={tw(`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5 lg:ml-10`)}
            >
              Knock, knock, knock!
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HiringSection;
