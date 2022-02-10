/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable prettier/prettier */
/* eslint-disable max-len */
import { tw } from 'twind';
// import Check from '@/constants/svg/check.svg';
import Carousel from 'react-elastic-carousel';

type Feature = {
  id: number;
  title: string;
  note: string;
  detail: string;
}

const items: any[] = [
  { id: 1, title: `Design pattern in UI/UX`,
  note:`By Tarabol`,
  detail:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
  ea commodo consequat.` },
  { id: 2, title: `Design pattern in UI/UX`,
  note:`By Tarabol`,
  detail:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
  ea commodo consequat.` },
  { id: 3, title: `Design pattern in UI/UX`,
  note:`By Tarabol`,
  detail:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
  ea commodo consequat.` },
  { id: 4, title: `Design pattern in UI/UX`,
  note:`By Tarabol`,
  detail:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
  ea commodo consequat.` },
  { id: 5, title: `Design pattern in UI/UX`,
  note:`By Tarabol`,
  detail:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
  ea commodo consequat.` },

];
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 },
];
const FeatureSection = () => (
  <section className={tw(`bg-white pb-6`)}>
    {/* <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8`)}>
      <div className={tw(`container mx-auto px-6 p-6 bg-white`)}>
        <div className={tw(`mb-16 text-center`)}>
          <h4 className={tw(`text-base text-indigo-600 font-semibold tracking-wide uppercase`)}>Features</h4>
          <p className={tw(`mt-2 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>
            How we change the oursourcing game
          </p>
        </div>
        <div className={tw(`flex flex-wrap my-12`)}>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>High quality developers</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              We always put our customer at first, so developers will be our DNA. The high qualified developers, the more happiness customers.
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Smart IT solution</div>
            </div>
            <p className={tw(`leading-loose text-gray-500 `)}>
              We have great experts who can approach with world class knowledge. That will help us in providing and solving complex IT problems.
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8`)}>
            <div className="flex items-center mb-6">
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Company culture</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              There are less of company has their own culture. For us, the culture will shape us and lead us in the right way.
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Up to date technologies</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              We always up to date knowledge for making sure that we will always provide the best services, best technologies for customer.
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Easy in colloboration</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              "THE CUSTOMER IS ALWAYS RIGHT" is our sologan. Just contact with us, the rest will be handled by us professionally.
            </p>
          </div>
          <div className={tw(`w-full md:w-1/2 lg:w-1/3 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Changing to adapt</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              Our vision is to become the best oursourcing company around the world. So, we always want to change and re-new to find the best version of us.
            </p>
          </div>
        </div>
      </div>
    </div> */}
    <div className={tw(`max-w-8xl mx-auto p-4 `)}>
      <div className={tw(`container mx-auto p-6 bg-white`)}>
        <div className={tw(` text-center`)}>
          <h4 className={tw(` text-indigo-600 font-extrabold tracking-wide text-4xl mb-8`)}>Features Posts</h4>
          <Carousel isRTL={false} breakPoints={breakPoints}>
            {items.map((item: Feature) => (
              <div key={item.id} className={tw(`pb-28 rounded-lg shadow-xl shadow-black mb-16 text-left`)} style={{width : `345px`}}>
              <img src="/images/scenery.png" alt="scenery" width={345} height={215} className={tw(`w`)} />
              <div className={tw(`px-2`)}>
              <h3 className={tw(`text-2xl font-bold mt-4`)}>{item.title}</h3>
              <p className={tw(`text-sm font-bold mt-2`)}>{item.note}</p>
              <p className={tw(`text-md mt-4 `)}>
                {item.detail}
              </p>
              </div>
            </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  </section>
);

export default FeatureSection;
