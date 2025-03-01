/* import { useEffect } from 'react';
import Head from 'next/head';
import Router from 'next/router';

// the redirect will only happen on the client-side. This is by design,
const IndexPage: React.FC<{}> = () => {
  useEffect(() => {
    Router.replace('/[type]', '/grocery');
  });
  return (
    <Head>
      <meta name="robots" content="noindex, nofollow" />
    </Head>
  );
};

export default IndexPage;


 */
import { useEffect } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import { useQuery } from '@apollo/react-hooks';
import { GET_TYPE } from 'graphql/query/type.query';
import ErrorMessage from 'components/error-message/error-message';
import { useIntl } from 'react-intl';

// the redirect will only happen on the client-side. This is by design,
const IndexPage: React.FC<{}> = () => {
  let selectedMenu = null;
  let defaultMenu = null;
  const intl = useIntl();
  const { data, error, loading } = useQuery(
    GET_TYPE,
    {
      variables: {
        searchText: ''
      }
    }
  );
  if (loading) {
    return <ErrorMessage message={intl.formatMessage({ id: 'loading', defaultMessage: 'Cargando...' })} />
  };

  if (error) {
    return (
      <ErrorMessage message={'Error occured for only domain routing'} />
    );
  };

  const typeMenu = data.types.items.map((item) => {
    return({
      id: item.id,
      href: `/${item.slug}`
    })
  })
  // if error here, is because you have to add at least one type from admin
  defaultMenu = typeMenu[0].href;
  if(localStorage.getItem('myMenu')){
    selectedMenu = JSON.parse(localStorage.getItem('myMenu'));
    selectedMenu = selectedMenu.href;
  }

  try {
    useEffect(() => {
      Router.replace('/[type]', selectedMenu !== null ? selectedMenu : defaultMenu);
    });
  } catch (exceptionVar) {
    console.log('catch', exceptionVar)
  } finally {
    // BUGGG
    Router.replace('/home');
  }

  return (
    <Head>
      <meta name="robots" content="noindex, nofollow" />
    </Head>
  );
};

export default IndexPage;
