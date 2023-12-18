import './App.css';

import TitleBar from './components/TitleBar/TitleBar';
import SearchField from './components/UrlInput/UrlInput';
import SubHeader from './components/SubHeader/SubHeader';
import TextBox from './components/TextBox/TextBox';

function App() {
  const summaryComponent = <TextBox text='this is a summary this is a summary  this is a summary  this is a summary  this is a summary  this is a summary  this is a summary  this is a summary  this is a summary  this is a summary  this is a summary  this is a summary  this is a summary  this is a summary  this is a summary  this is a summary  this is a summary  this is a summary '/>;
  const transcriptComponent = <TextBox text='this is a transcript  this is a transcript  this is a transcript  this is a transcript  this is a transcript  this is a transcript  this is a transcript  this is a transcript  this is a transcript  this is a transcript  this is a transcript  this is a transcript  this is a transcript  this is a transcript  this is a transcript  this is a transcript  this is a transcript this is a transcript  this is a transcript  this is a transcript  this is a transcript  this is a transcript  this is a transcript  ' />;

  return (
    <div className='App'>
      <TitleBar />
      <div className='container'>
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
