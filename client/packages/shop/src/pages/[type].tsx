import React, { useEffect, useState } from 'react';
import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { Modal } from '@redq/reuse-modal';
import { useQuery } from '@apollo/react-hooks';
import StoreNav from 'components/store-nav/store-nav';
import HomeCardsCarousel from 'components/carousel/homecards-carousel';
import { Banner } from 'components/banner/banner';
import {
  MainContentArea,
  SidebarSection,
  ContentSection,
  OfferSection,
  MobileCarouselDropdown,
} from 'assets/styles/pages.style';
// Static Data Import Here
import { siteOffers } from 'site-settings/site-offers';
import { sitePages } from 'site-settings/site-pages';
import { SEO } from 'components/seo';
import { useRefScroll } from 'utils/use-ref-scroll';
import { initializeApollo } from 'utils/apollo';
import { GET_PRODUCTS } from 'graphql/query/products.query';
import { GET_CATEGORIES } from 'graphql/query/category.query';
import { GET_TYPE } from 'graphql/query/type.query';
import { GET_TYPE_HOMECARDS } from 'graphql/query/type.homecards.query';
import { CATEGORY_MENU_ITEMS } from 'site-settings/site-navigation';
import ErrorMessage from 'components/error-message/error-message';
import { OPEN_CAGE_KEY, SHOP_IMAGE_HOST } from 'utils/images-path';
import { useIntl } from 'react-intl';
import { useLocale } from 'contexts/language/language.provider';
import { Locales } from 'utils/constant';
import { useMedia } from 'utils/use-media';
const Sidebar = dynamic(() => import('layouts/sidebar/sidebar'));
const Topbar = dynamic(() => import('layouts/topbar/topbar'));
const Products = dynamic(() =>
  import('components/product-grid/product-list/product-list')
);
const CartPopUp = dynamic(() => import('features/carts/cart-popup'), {
  ssr: false,
});

const CategoryPage: React.FC<any> = ({ deviceType }) => {
  const { query } = useRouter();
  const router = useRouter();
  const { locale, changeLanguage } = useLocale();
  const intl = useIntl();
  const PAGE_TYPE: any = query.type;
  const page = sitePages[PAGE_TYPE];
  const isMobile = useMedia('(max-width: 580px)');
  
  const { data: categoriesData, loading: categoriesLoading } = useQuery(GET_CATEGORIES, {
    variables: { 
     type: router.query.type
     },
  });

  const { elRef: targetRef, scroll } = useRefScroll({
    percentOfElement: 0,
    percentOfContainer: 0,
    offsetPX: isMobile ? -200 : -110,
  });

  React.useEffect(() => {
    if (query.text || query.category) {
      scroll();
    }
  }, [query.text, query.category]);

  const { data: homeCardsData, loading: homeCardsLoading, error: homeCardsError } = useQuery(GET_TYPE_HOMECARDS, {
    variables: { 
      type: PAGE_TYPE
     },
  });

  const { data, loading, error } = useQuery(GET_TYPE, {
    variables: {
      searchText: PAGE_TYPE
     },
  });


  if (loading || homeCardsLoading) {
    return <ErrorMessage message={intl.formatMessage({ id: 'loading', defaultMessage: 'Cargando...' })} />
  };

  if (error || homeCardsError) {
    return (
      error ? (
          <ErrorMessage message={error.message} />
      ) : (
          <ErrorMessage message={homeCardsError.message} />
      )
    );
  };

  const { home_title, home_subtitle, image } = data.types.items.find((item) => item.slug === router.query.type);

  return (
    <>
      <SEO title={home_title} description={home_subtitle} />

      <Modal>
        <Banner
          intlTitleId={home_title}
          intlDescriptionId={home_subtitle}
          imageUrl={SHOP_IMAGE_HOST+image}
        />
        <MobileCarouselDropdown>
          {/* if wanna show categories, fix the component to display them */}
          {/* <StoreNav items={categoriesData.categories.items} />  */}
          <Topbar type={PAGE_TYPE} deviceType={deviceType} />
        </MobileCarouselDropdown>
        {/* {homeCardsData.getHomeCards.length > 0 ? (<OfferSection>
          <div style={{margin: '0 -10px'}}>
            <HomeCardsCarousel deviceType={deviceType} data={homeCardsData.getHomeCards}/>
          </div>
        </OfferSection>) : (<div></div>)
        } */}
        <MainContentArea>
          <SidebarSection>
            <Sidebar type={PAGE_TYPE} deviceType={deviceType} />
          </SidebarSection>
          <ContentSection>
            <div ref={targetRef}>
              <Products
                type={PAGE_TYPE}
                deviceType={deviceType}
                fetchLimit={46}
              />
            </div>
          </ContentSection>
        </MainContentArea>
        <CartPopUp deviceType={deviceType} />
      </Modal>
    </>
  );
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_PRODUCTS,
    variables: {
      type: params.type,
      offset: 0,
      limit: 20
    },
  });

  await apolloClient.query({
    query: GET_CATEGORIES,
    variables: {
      type: params.type,
    },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    unstable_revalidate: 1,
  };
};

export async function getStaticPaths() {

  const apolloClient = initializeApollo();
  const res = await apolloClient.query({
    query: GET_TYPE,
    variables: {
      searchText: ''
    }
  });
  const paths = res.data.types.items.map((item) => {
    return({
      params: { type: item.slug },
    })
  })

  return {
    paths,
    fallback: false,
  };
}

export default CategoryPage;
