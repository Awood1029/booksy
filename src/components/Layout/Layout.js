import React from 'react';

import Content from '../Content/Content';
import Sidebar from '../Sidebar/Sidebar';

function App() {
  return (
    <div className="container">
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;