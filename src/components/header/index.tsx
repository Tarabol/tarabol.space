import { tw, css } from 'twind/css';
import Button from '@/components/button';
import Atlassian from '@/constants/svg/atlassian.svg';
import Github from '@/constants/svg/github.svg';
import Figma from '@/constants/svg/figma.svg';
import Microsft from '@/constants/svg/microsoft.svg';

const headerStyle = css`
  background-color: #ffffff;
  min-height: calc(100vh - 6rem);
`;

const Header = () => (
  <header className={tw(headerStyle)}>
    <div className={tw(`max-w-4xl mx-auto py-16 px-14 sm:px-6 lg:px-8`)}>
      <h1 className={tw(`font-sans font-bold text-4xl md:text-5xl lg:text-8xl text-center leading-snug text-gray-800`)}>
        Your success, our hapiness
      </h1>
      <div className={tw(`max-w-xl mx-auto`)}>
        <p className={tw(`mt-10 text-gray-500 text-center text-xl lg:text-3xl`)}>
          Providing the best IT services for your company
        </p>
      </div>
      <div className={tw(`mt-10 flex justify-center items-center w-full mx-auto`)}>
        <Button>Contact us</Button>
      </div>
    </div>
    <div className={tw(`flex justify-center w-full`)}>
      <div className={tw(`mt-4 w-full`)}>
        <p className={tw(`font-mono uppercase text-center font-medium text-sm text-gray-600`)}>Which platform are we using</p>
        <div className={tw(`flex items-center justify-center mx-auto flex-wrap`)}>
          <Microsft className={tw(`m-16 mb-8`)} width={120} height={120} />
          <Atlassian className={tw(`m-16`)} width={100} height={100} />
          <Github className={tw(`m-16`)} width={100} height={100} />
          <Figma className={tw(`m-16`)} width={120} height={120} />
        </div>
      </div>
    </div>
  </header>
);

export default Header;
