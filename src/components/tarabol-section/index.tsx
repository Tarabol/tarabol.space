import { tw } from 'twind';
import Tarabol from '@/constants/svg/tarabol.svg';


const TarabolSection = () => (
    <section className={tw(`bg-gray-100 pb-6`)}>
        <div className={tw(`max-w-4xl mx-auto py-1 px-14 sm:px-6 lg:px-8`)}>
            <div className={tw(`flex items-center justify-center mx-auto flex-wrap`)}>
                <Tarabol className={tw(`m-16 mb-8`)} width={120} height={120} />
            </div>
            <h1 className={tw(`font-sans font-normal text-1xl md:text-1xl lg:text-1xl text-center leading-snug text-gray-800`)}>
            Mars is there, waiting to be reached
            </h1>
        </div>


    </section>
);

export default TarabolSection;
