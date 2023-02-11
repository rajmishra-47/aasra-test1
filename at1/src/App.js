import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Sectors from './components/sectors';

function App() {
  return (
    <>
     <Navbar></Navbar>
     <p>Our Workplaces</p>
     <div className="sct">
      <Sectors title="Sector 2"></Sectors>
      <Sectors title="jagda"></Sectors>
      <Sectors title="Khalsa"></Sectors>
      <Sectors title="Sector 21"></Sectors>
      <Sectors title="Sector X"></Sectors>
      <Sectors title="Sector X"></Sectors>
      <Sectors title="Sector X"></Sectors>
      <Sectors title="Sector X"></Sectors>
  
     </div>
    </>
  );
}

export default App;
