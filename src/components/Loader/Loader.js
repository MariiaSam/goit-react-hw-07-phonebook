import ThreeDots from 'react-spinners/DotLoader';
import { LoaderWrapper } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderWrapper>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#4fa94d"
        aria-label="three-dots-loading"
      />
    </LoaderWrapper>
  );
};