import './App.css';

import TitleBar from './components/TitleBar/TitleBar';
import SearchField from './components/UrlInput/UrlInput';
import SubHeader from './components/SubHeader/SubHeader';
import TextBox from './components/TextBox/TextBox';

function App() {
  const summaryComponent = 'this is a summary i am writing a summary';
  const transcriptComponent = 'this is a transcription i am returning a transcription';

  return (
    <div className='App'>
      <div className='container'>
        <TitleBar />
        <SearchField />
        <div className='pane-wrapper'>
          <div className='left-pane'>
            <SubHeader title='Transcript Summary' customComponent={summaryComponent}/>
          </div>
          <div className='right-pane'>
            <SubHeader title='The Actual Transcript' customComponent={transcriptComponent}/>
            <SubHeader title='Ask Questions about the Video'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
