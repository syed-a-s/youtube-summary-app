import './App.css';

import TitleBar from './components/TitleBar/TitleBar';
import SearchField from './components/UrlInput/UrlInput';
import SubHeader from './components/SubHeader/SubHeader';
import TextBox from './components/TextBox/TextBox';
import SummaryComponent from './components/CustomComponents/SummaryComponent/SummaryComponent'; 
import TranscriptComponent from './components/CustomComponents/TranscriptComponent/TranscriptComponent'; 

import useFetch from './hook/useFetch.js';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <TitleBar />
        <SearchField />
        <div className='pane-wrapper'>
          <div className='left-pane'>
            <SubHeader title='Transcript Summary' customComponent={<SummaryComponent />}/>
          </div>
          <div className='right-pane'>
            <SubHeader title='The Actual Transcript' customComponent={<TranscriptComponent />}/>
            <SubHeader title='Ask Questions about the Video'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
