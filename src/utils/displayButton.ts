import { IButtonWrapper } from '@src/types';

const displayButton = ({ text, isLoggedIn }: IButtonWrapper) => {
  if (text === 'Sign Out') {
    if (isLoggedIn) {
      return 'block';
    }
    return 'none';
  }
  if (text === 'Sign In') {
    if (!isLoggedIn) {
      return 'block';
    }
    return 'none';
  }
  return 'block';
};

export default displayButton;
