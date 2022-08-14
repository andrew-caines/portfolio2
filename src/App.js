import React, { useState } from 'react';
import { AppLayout } from '@cloudscape-design/components';
import SideNavigationPanel from './Components/PageLayout/SideNavigationPanel';
import MainContent from './Components/PageLayout/MainContent';
import ToolsContent from './Components/PageLayout/ToolsContent';

function App() {
  const [navigationOpen, setNavigationOpen] = useState(true);
  const [toolsOpen, setToolsOpen] = useState(false);

  const handleMobileNavigationClose = () => {
    setNavigationOpen(false);
  }

  return (
    <AppLayout
      onNavigationChange={e => setNavigationOpen(e.detail.open)}
      navigationOpen={navigationOpen}
      navigation={<SideNavigationPanel handleMobile={handleMobileNavigationClose} />}
      onToolsChange={e => setToolsOpen(e.detail.open)}
      toolsOpen={toolsOpen}
      tools={<ToolsContent />}
      content={<MainContent />} //CONTENT CLOSE
    /> //APPLAYOUTCLOSE
  );
}

export default App;
