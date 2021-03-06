import React from 'react';

import { LoadApiDataProvider } from './useLoadApiData';

const AppProvider: React.FC = ({ children }) => {
  return <LoadApiDataProvider>{children}</LoadApiDataProvider>;
};

export default AppProvider;
