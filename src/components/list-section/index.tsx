/* eslint-disable react/button-has-type */
/* eslint-disable max-len */
import { tw } from 'twind';
import FeatureSvg from '@/constants/svg/features.svg';

const listInput = [
  {
    placeholder: `IT consultantacy`,
    description: `With our experts who has over 10 years experienced in software develop and designing complex IT system. We ensure that we will provide the best IT solution for your company, and step by step make your company grow up in digital era.`,
  },
  {
    title: `Supplying developers`,
    description: `We have about 50 qualified enthusiastic, experienced developers.`,
  },
  {
    title: `Software development`,
    description: `We can provide developers in various of fields includes mobile application, web application, aritificial intelligence ...`,
  },
];

const ListSection = () => (
  <section className={tw(` overflow-hidden`)}>
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white`)}>
      <div className={tw(`mb-16 text-center`)}>
        <p className={tw(`mt-2 pb-4 text-4xl lg:text-6xl font-bold tracking-tight text-purple-700`)}>Contact us</p>
      </div>
      <div className={tw(`flex flex-wrap -mx-8 items-center`)}>
        <div className={tw(`w-full lg:w-1/2 px-8`)}>
          <div>
            <input
              placeholder="Your name *"
              autoComplete="off"
              className={tw(`w-4/6 h-10 border-1 border-gray-500 bg-gray-100 mb-4 pl-2 rounded outline-none`)}
            />
          </div>
          <div>
            <input
              placeholder="Your email *"
              className={tw(`w-4/6 h-10 border-1 border-gray-500 bg-gray-100 mb-4 pl-2 rounded outline-none`)}
            />
          </div>
          <div>
            <input
              placeholder="Phone *"
              className={tw(`w-4/6 h-10 border-1 border-gray-500 bg-gray-100 mb-4 pl-2 rounded outline-none`)}
            />
          </div>
          <div>
            <textarea
              placeholder="Key in your message *"
              autoComplete="off"
              className={tw(`w-4/6 h-24 border-1 border-gray-500 bg-gray-100 mb-4 pl-2 rounded outline-none`)}
            />
          </div>
          <div className={tw(`w-4/6 flex justify-center`)}>
            <button className={tw(`bg-purple-800 text-white py-2 px-10 rounded ml-`)}>Submit </button>
          </div>
        </div>
        <div className={tw(`w-full lg:w-1/2 px-8`)}>
          <div className={tw(`lg:mb-12 lg:mb-0 pb-12 lg:pb-0 mt-16 lg:mt-0 mx-6 lg:mx-0`)}>
            <FeatureSvg width="100%" height="100%" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ListSection;
