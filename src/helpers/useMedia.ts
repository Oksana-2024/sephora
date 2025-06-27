import { useMediaQuery } from 'react-responsive';

function useMedia() {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1440px)' });
  return { isBigScreen };
}

export default useMedia;
