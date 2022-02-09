/* eslint-disable max-len */
import { tw, css } from 'twind/css';
import Atlassian from '@/constants/svg/atlassian.svg';
import Figma from '@/constants/svg/figma.svg';
import Microsft from '@/constants/svg/microsoft.svg';

const headerStyle = css`
  background-color: #ffffff;
  min-height: calc(100vh - 6rem);
`;

const Header = () => (
  <header className={tw(headerStyle)}>
    <div className={tw(`max-w-4xl mx-auto py-16 px-12 sm:px-6 lg:px-8`)}>
      <h1
        className={tw(
          `font-sans font-black uppercase text-2xl md:text-4xl lg:text-5xl text-center leading-snug text-purple-700`,
        )}
      >
        Your success, our hapiness
      </h1>
      <div className={tw(`max-w-lg mx-auto`)}>
        <p className={tw(`mt-6 font-bold text-gray-500 text-center text-xl lg:text-3xl px-9`)}>
          We provide the best software development service
        </p>
        <p className={tw(`font-bold text-gray-500 text-center text-xl lg:text-3xl px-9`)}>in Viet Nam</p>
      </div>
      {/* <div className={tw(`mt-10 flex justify-center items-center w-full mx-auto`)}> */}
      {/* <Button primary>Get started</Button>
        <span className={tw(`mx-2`)}>or</span> */}
      {/* <Button primary>Contact us</Button> */}
      {/* </div> */}
    </div>
    <div className={tw(`flex justify-center w-full`)}>
      <div className={tw(`mt-4 w-full`)}>
        {/* <div className={tw(`mb-16 text-center`)}>
          <h4 className={tw(`text-base text-indigo-600 font-semibold tracking-wide uppercase`)}>Platforms, Technologies</h4>
          <p className={tw(`mt-2 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>
          Which platform are we using
          </p>
        </div> */}
        <p className={tw(`text-center font-medium text-xl text-gray-600`)}>We are using these platforms</p>
        <div className={tw(`flex items-center justify-center mx-auto flex-wrap`)}>
          <Microsft className={tw(`m-16`)} width={128} height={128} />
          <Figma className={tw(`m-16`)} width={168} height={128} />
          <Atlassian className={tw(`m-16`)} width={114} height={128} />
        </div>
      </div>
    </div>
  </header>
);

export default Header;
