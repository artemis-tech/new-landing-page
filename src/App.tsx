import React from 'react';
import './App.css';
import { Grommet, Main } from 'grommet';
import Footer from './components/Footer';
import Header from './components/Header';
import Announce from './sections/Announce';

import { deepMerge } from 'grommet/utils';
import Benefits from './sections/Benefits';
import Contact from './sections/Contact';
import consts from './consts';

const theme = deepMerge({
  global: {
    focus: {
      border: {
        color: 'brand',
      },
    },
    colors: {
      brand: consts.BRAND_COLOR,
    },
    font: {
      family: 'Rubik',
    },
    breakpoints: {
      small: {
        value: 568,
        edgeSize: {
          none: '0px',
          small: '6px',
          medium: '12px',
          large: '24px',
        },
      },
      medium: {
        value: 768,
        edgeSize: {
          none: '0px',
          small: '12px',
          medium: '24px',
          large: '48px',
        },
      },
      large: {
        value: 1024,
        edgeSize: {
          none: '0px',
          small: '12px',
          medium: '24px',
          large: '48px',
        },
      },
      xlarge: {
        value: 1366,
        edgeSize: {
          none: '0px',
          small: '12px',
          medium: '24px',
          large: '48px',
        },
      },
    },
  },
});

function App() {
  return (
    <Grommet theme={theme}>
      <Header />
      <Main>
        <Announce />
        <Benefits />
        <Contact />
      </Main>
      <Footer />
    </Grommet>
  );
}

export default App;
