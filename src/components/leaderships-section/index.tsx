/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable prettier/prettier */
/* eslint-disable max-len */
import { tw } from 'twind';
import Check from '@/constants/svg/check.svg';
import Carousel from 'react-elastic-carousel';

const persons = [
  { id: 1, name: `DANG TRUNG ANH`,
  note:`Co - Founder`,
  detail:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
  ea commodo consequat.` },
  { id: 2, name: `DANG TRUNG ANH`,
  note:`Co - Founder`,
  detail:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
  ea commodo consequat.` },
  { id: 3, name: `DANG TRUNG ANH`,
  note:`Co - Founder`,
  detail:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
  ea commodo consequat.` },
  { id: 4, name: `DANG TRUNG ANH`,
  note:`Co - Founder`,
  detail:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
  ea commodo consequat.` },
  { id: 5, name: `DANG TRUNG ANH`,
  note:`Co - Founder`,
  detail:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
  ea commodo consequat.` },

];
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 2 },
];
const Leadership = () => (
  <section className={tw(`bg-gray-200 `)}>
    <div className={tw(`max-w-7xl mx-auto p-4 `)}>
      <div className={tw(`container mx-auto  `)}>
        <div className={tw(`text-center`)}>
          <h4 className={tw(` text-indigo-600 font-extrabold tracking-wide text-4xl mb-12 mt-8 `)}>Meet our leaderships</h4>
          <Carousel isRTL={false} breakPoints={breakPoints}>
            {persons.map((person) => (
              <div key={person.id} className={tw(`pb-28 rounded-lg shadow-xl shadow-black mb-16 bg-white`)} style={{width : `486px`}}>
              <img src="/images/founder_trunganh.png" alt="scenery" width={486} height={486} className={tw(`w`)} />
              <div className={tw(`px-2`)}>
              <h3 className={tw(`text-2xl font-bold mt-4`)}>{person.name}</h3>
              <p className={tw(`text-xl font-bold `)}>{person.note}</p>
              <p className={tw(`text-md mt-4 `)}>
                {person.detail}
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

export default Leadership ;
