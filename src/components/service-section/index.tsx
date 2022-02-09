/* eslint-disable prettier/prettier */
/* eslint-disable max-len */
import { tw } from 'twind';

const services = [
    `Outsourcing service`,`Offshore service`,`Consultant service`,`Mobile development`,`Web development`,`Software development`
]
type Service = string ;

const ServiceSection = () => (
  <section className={tw(`bg-gray-200  overflow-hidden`)}>
    <div className={tw(`max-w-7xl mx-auto py-16 px-12 sm:px-6 lg:px-8`)}>
      <p
        className={tw(`font-sans font-black text-2xl md:text-4xl lg:text-5xl text-center leading-snug text-purple-700`)}
      >
        We are Tarabol !
      </p>
      <p className={tw(`font-sans font-bold text-center mt-2 text-xl`)}>You can hire us on </p>
      <div className={tw(`grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12`)}>
          {services.map((service : Service) =>(
              <div className={tw(`bg-white h-60 pt-6 pl-3 rounded-lg shadow-lg shadow-black font-bold text-xl `)}>{service}</div>
          )) }
      </div>
    </div>
  </section>
);

export default ServiceSection;
