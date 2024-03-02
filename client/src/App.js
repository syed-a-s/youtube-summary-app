import { useState } from 'react';

import TitleBar from './components/TitleBar/TitleBar';
import UrlInput from './components/UrlInput/UrlInput';
import SubHeader from './components/SubHeader/SubHeader';
import TextBox from './components/TextBox/TextBox';
// import SummaryComponent from './components/CustomComponents/SummaryComponent/SummaryComponent'; 
// import TranscriptComponent from './components/CustomComponents/TranscriptComponent/TranscriptComponent'; 

import './App.css';

function App() {
  const [transcriptData, setTranscriptData] = useState([]);

  const transcript = (transcriptData.transcript || []).map(item => item.text ?? '').join(' ');

  console.log(transcript);

  return (
    <div className='App'>
      <div className='container'>
        <TitleBar />
        <UrlInput transcriptDataCallback={setTranscriptData} />
        <div className='pane-wrapper'>
          <div className='left-pane'>
            <SubHeader title='Transcript Summary' customComponent={<TextBox/>} paneType='left' />
          </div>
          <div className='right-pane'>
            <SubHeader title='The Actual Transcript' customComponent={<TextBox text={transcript}/>} paneType='right' />
            <SubHeader title='Ask Questions about the Video' paneType='right'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
