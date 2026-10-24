// import Section from './components/Section';  //! без стилізації
import Section from './components/SectionBuiltInStyles'; //! вбудовані стилі
// import Section from './components/SectionVanillaCSS'; //! ванільний CSS

// import PlanesList from './components/PlanesList';  //! без стилізації
import PlanesList from './components/PlanesListBuiltInStyles'; //! вбудовані стилі 
// import PlanesList from './components/PlanesListVanillaCSS'; //! ванільний CSS


import planes from './json/planes.json'


console.log("planes:", planes)

export default function App() {

  return (
    <Section title="Колекція літаків">
      <PlanesList items={planes} />
    </Section>
  )
}