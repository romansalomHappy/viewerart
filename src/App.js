import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
    <iframe
      src="https://view.art/"
      style={{ width: '100%', height: '100%', border: 'none' }}
      title="Web Viewer"
    />
  </div>
  );
}

export default App;
