import { useState } from 'react';

import SynthNavTabs from './Tabs/SynthNavTabs';
import TracksContainer from './Tracks/TracksContainer';
import PlaybackContainer from './Playback/PlaybackContainer';
import MainTab from './Tabs/Main/MainTab';
import ModTab from './Tabs/Mod/ModTab';
import SeqTab from './Tabs/Seq/SeqTab';
import SequencerContainer from './Sequencer/SequencerContainer';
import { SynthTabs } from '../../types/synthTabs';

const SynthContainer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<SynthTabs>('main');

  function updateActiveTab(tabName: SynthTabs) {
    setActiveTab(tabName);
  }

  return (
    <div className="mt-auto grid h-[600px] w-[1064px] grid-cols-[154px_154px_154px_154px_2fr] grid-rows-[36px_154px_1fr_68px] gap-[20px] rounded-xl border border-slate-700 p-[20px]">
      <TracksContainer />
      <SynthNavTabs activeTab={activeTab} onTabChange={updateActiveTab} />
      <SequencerContainer activeTab={activeTab} />
      <PlaybackContainer />
      {activeTab === 'main' && <MainTab />}
      {activeTab === 'seq' && <SeqTab />}
      {activeTab === 'mod' && <ModTab />}
    </div>
  );
};

export default SynthContainer;
