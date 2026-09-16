import React from 'react';
import { Studio } from 'sanity';
import config from '../../studio/sanity.config';

const StudioPage: React.FC = () => {
  return (
    <div style={{ height: '100vh', width: '100vw', margin: 0, padding: 0, position: 'fixed', inset: 0, zIndex: 9999 }}>
      <Studio config={config} />
    </div>
  );
};

export default StudioPage;
