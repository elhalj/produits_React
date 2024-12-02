
import './App.css';
import Description from './components/description';
import Image from './components/image';
import Nom from './components/nom';
import Prix from './components/prix';

function App() {
  const nom = prompt(" Entrer votre nom: ");
  if(nom === ""){
    alert("Veuillez entrer votre nom");
  }else{
    alert(`Bonjour ${nom}`);
  }
  return (
    <div className="App">
      <Nom />
      <Prix />
      <Description />
      <Image />
      <p>Bonjour {nom}</p>
    </div>
  );
}

export default App;
