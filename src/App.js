import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Video from './Components/Video';

function App() {
  return (
    <div className="bg-discordSec relative pb-10 min-h-screen">
      <Header />

      <Video />

      <Footer />
    </div>
  );
}

export default App;
