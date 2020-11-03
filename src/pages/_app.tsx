import { Fragment } from 'react';
import { Provider } from 'react-redux';

import store from '../redux/store';

import Layout from '../containers/Layout';
import { AppProps } from 'next/app';

import { Store } from 'redux';

type Props = { store: Store } & AppProps;

const MyApp = ({ Component, pageProps }: Props) => {
  return (
    <Provider store={store}>
      <Fragment>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Fragment>
    </Provider>
  );
};

export default MyApp;

/**
 * If you don't need this, delete it
 * It opts out of smart auto static rendering
 * https://err.sh/next.js/opt-out-auto-static-optimization
 */
// App.getInitialProps = async () => {
//   // const p = new PrismicClient(req);
//   // const globalData = await p.getSingletonData('global', normalizeGlobalData);
//   const globalData = { foo: 'bar' };
//   return { globalData };
// };
