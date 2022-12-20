import React from 'react';
import { FaGoogle, FaSignOutAlt } from 'react-icons/fa';
import { MdEvent } from 'react-icons/md';

const googleButtons = [
  {
    text: 'Sign In',
    icon: <FaGoogle />,
  },
  {
    text: 'Show Events',
    icon: <MdEvent />,
  },
  {
    text: 'Sign Out',
    icon: <FaSignOutAlt />,
  },
];

export default googleButtons;
