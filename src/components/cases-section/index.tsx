import { tw } from 'twind';
import Particles from 'react-particles-js';
import Arrow from '@/constants/svg/arrow.svg';

const ParticleBg = () => (
  <Particles
    params={{
      particles: {
        number: {
          value: 500,
          density: {
            enable: false,
          },
        },
        size: {
          value: 2,
          random: true,
          anim: {
            speed: 0.5,
            size_min: 0.5,
          },
        },
        line_linked: {
          enable: false,
        },
        move: {
          random: true,
          speed: 0.5,
          direction: `bottom`,
          out_mode: `out`,
        },
      },
      interactivity: {
        events: {
          onhover: {
            enable: true,
            mode: `bubbles`,
          },
          onclick: {
            enable: true,
            mode: `repulse`,
          },
        },
        modes: {
          bubble: {
            distance: 250,
            duration: 3,
            size: 0,
            opacity: 0,
          },
          repulse: {
            distance: 400,
            duration: 4,
          },
        },
      },
    }}
  />
);

const articles = [
  {
    title: `Velit reprehenderit culpa Lorem reprehenderit excepteur ipsum esse.`,
    image: `/images/viettel.jpeg`,
    alt: `Proident pariatur est.`,
  },
  {
    title: `Velit reprehenderit culpa Lorem reprehenderit ipsum esse.`,
    image: `/images/tesla.jpeg`,
    alt: `Proident pariatur est.`,
  },
  {
    title: `Velit reprehenderit culpa Lorem reprehenderit excepteur esse.`,
    image: `/images/amazon.png`,
    alt: `Proident pariatur est.`,
  },
];

const CasesSection = () => (
  <section>
    <div className={tw(`w-full min-h-screen bg-gray-900 relative`)}>
      <div className={tw(`absolute left-0 top-0 h-screen w-full overflow-hidden`)}>
        <ParticleBg />
      </div>
      <div className={tw(`max-w-7xl mx-4 lg:mx-auto pt-20 lg:pt-40`)}>
        <h1 className={tw(`text-white text-4xl lg:text-7xl font-bold text-center`)}>How customers talk to us?</h1>
        <p className={tw(`text-white text-gray-400 text-center text-xl mt-12`)}>
          Don’t just take our word for it — see what leaders in digital are saying
        </p>
        <div className={tw(`mx-auto pt-24`)}>
          <div className={tw(`w-full flex flex-wrap justify-around`)}>
            {articles.map((article) => (
              <div
                key={article.title}
                className={tw(
                  `xl:w-1/3 sm:w-5/12 sm:max-w-xs relative mb-32 lg:mb-20
                      xl:max-w-sm lg:w-1/2 w-11/12 mx-auto sm:mx-0 cursor-pointer hover:scale-105`,
                )}
              >
                <div className={tw(`h-64 z-20`)}>
                  <img
                    src={article.image}
                    alt={article.alt}
                    className={tw(`h-full w-full object-cover overflow-hidden rounded object-fill`)}
                    width={400}
                    height={300}
                  />
                </div>
                <div className={tw(`p-4 shadow-lg w-full mx-auto -mt-8 bg-white rounded-b z-30 relative`)}>
                  <p className={tw(`uppercase text-sm text-gray-700 text-center pb-1`)}>Case study</p>
                  <p className={tw(`text-gray-500 text-center pb-1 text-sm`)}>{article.title}</p>
                </div>
              </div>
            ))}
            <span
              className={tw(
                `-mt-8 pb-12 lg:mt-4 flex items-center text-xl
                text-indigo-400 cursor-pointer z-30 hover:text-indigo-600`,
              )}
            >
              See all case studies
              <Arrow className={tw(`h-6 w-6 fill-current ml-2`)} />
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CasesSection;
