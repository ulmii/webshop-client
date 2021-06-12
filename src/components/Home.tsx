import MenuAppBar from './AppBar';
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hero from './Hero';
import Album from './Album';

export default function Home() {
  return (
    <React.Fragment>
      <CssBaseline />
      <MenuAppBar />
      <main>
        <Hero />
        <Album />
      </main>
    </React.Fragment>
  );
}
