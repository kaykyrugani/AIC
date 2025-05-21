import { useState } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import Hero from './sections/Hero/Hero';
import SobAgencia from './sections/SobAgencia/SobAgencia';
import Equipe from './sections/Equipe/Equipe';
import Servicos from './sections/Servicos/Servicos';
import SobServicos from './sections/SobServicos/SobServicos';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Layout
      seoProps={{
        title: 'Início',
        description: 'Consultoria estratégica em propriedade intelectual, concorrência e consumo. Especialistas em direito empresarial e propriedade intelectual.',
        path: '/',
      }}
    >
      <Hero />
      <SobAgencia id="sobre" />
      <Equipe id="equipe" />
      <Servicos id="servicos" />
      <SobServicos />
    </Layout>
  );
}

export default App;
