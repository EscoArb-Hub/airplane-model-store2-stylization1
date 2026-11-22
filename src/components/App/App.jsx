// import Section from './components/Section';  //! без стилізації
// import Section from './components/SectionBuiltInStyles'; //! вбудовані стилі
// import Section from './components/SectionVanillaCSS'; //! ванільний CSS
// import { Section } from '../Section/Section.jsx';
import { Section } from '@/components/Section/Section.jsx';

// import PlanesList from './components/PlanesList';  //! без стилізації
// import PlanesList from './components/PlanesListBuiltInStyles'; //! вбудовані стилі 
// import PlanesList from './components/PlanesListVanillaCSS'; //! ванільний CSS
// import { PlanesList } from '../PlanesList/PlanesList.jsx'; 
import { PlanesList } from '@/components/PlanesList/PlanesList.jsx'; 


// import planes from '../../json/planes.json'
import planes from '@/json/planes.json'
console.log("planes:", planes)

// import './App.css'; //! Ванільний CSS (Vanilla CSS)'

// import css from "./App.module.css"; //! CSS-модулі


// export default function App() {
export function App() {

  return (
    <Section title="Колекція літаків">
      <PlanesList items={planes} />
    </Section>
  )
}