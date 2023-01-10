import { NextUIProvider } from '@nextui-org/react';
import { darkTheme } from '../themes';
import '../styles/globals.css';

const App = ({ Component, pageProps }) => {
  return (
    <NextUIProvider theme={darkTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
};

export default App;
