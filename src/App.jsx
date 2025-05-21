import { Suspense, lazy, useState } from 'react';
import './App.css';

// Componentes que serão carregados imediatamente (importância crítica)
import Header from './sections/Header/Header';
import Hero from './sections/Hero/Hero';
import Footer from './sections/Footer/Footer';

// Componentes que serão carregados sob demanda
const SobAgencia = lazy(() => import('./sections/SobAgencia/SobAgencia'));
const Equipe = lazy(() => import('./sections/Equipe/Equipe'));
const Servicos = lazy(() => import('./sections/Servicos/Servicos'));
const SobServicos = lazy(() => import('./sections/SobServicos/SobServicos'));

// Componente de carregamento
const LoadingFallback = () => (
  <div className="loading-fallback">
    <div className="spinner"></div>
  </div>
);

function App() {
  const [count] = useState(0);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<LoadingFallback />}>
          <SobAgencia />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <Equipe />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <Servicos />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <SobServicos />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default App;
