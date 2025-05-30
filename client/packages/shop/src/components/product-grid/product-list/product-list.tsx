import React from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { openModal, closeModal } from '@redq/reuse-modal';
import {
  ProductsRow,
  ProductsCol,
  ButtonWrapper,
  LoaderWrapper,
  LoaderItem,
  ProductCardWrapper,
} from './product-list.style';
import { CURRENCY } from 'utils/constant';
import { useQuery } from '@apollo/react-hooks';
import { NetworkStatus } from 'apollo-client';
import Placeholder from 'components/placeholder/placeholder';
import Fade from 'react-reveal/Fade';
import NoResultFound from 'components/no-result/no-result';
import { FormattedMessage } from 'react-intl';
import { Button } from 'components/button/button';
import { GET_PRODUCTS } from 'graphql/query/products.query';
import { SHOP_IMAGE_HOST } from 'utils/images-path';
import { useMedia } from 'utils/use-media';
const ErrorMessage = dynamic(() =>
  import('components/error-message/error-message')
);
const QuickView = dynamic(() => import('features/quick-view/quick-view'));
const GeneralCard = dynamic(
  import('components/product-card/product-card-one/product-card-one')
);
const OneLineCard = dynamic(
  import('components/product-card/product-card-six/product-card-six')
);
const BookCard = dynamic(
  import('components/product-card/product-card-two/product-card-two')
);
// const FurnitureCard = dynamic(
//   import('components/product-card/product-card-three/product-card-three')
// );
// const MedicineCard = dynamic(
//   import('components/product-card/product-card-five/product-card-five')
// );

type ProductsProps = {
  deviceType?: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
  fetchLimit?: number;
  category?: string;
  loadMore?: boolean;
  type?: string;
};
export const Products: React.FC<ProductsProps> = ({
  deviceType,
  fetchLimit = 20,
  category = 'frutas-y-verduras',
  loadMore = true,
  type,
}) => {
  const router = useRouter();
  const isMobile = useMedia('(max-width: 580px)');
  const { data, error, loading, fetchMore, networkStatus } = useQuery(
    GET_PRODUCTS,
    {
      variables: {
        type: router.query.type,
        category: 'frutas-y-verduras',
        text: router.query.text,
        offset: 0,
        limit: fetchLimit,
      },
      notifyOnNetworkStatusChange: true,
    }
  );
  const loadingMore = networkStatus === NetworkStatus.fetchMore;

  // Quick View Modal
  const handleModalClose = () => {
    const { pathname, query, asPath } = router;
    const as = asPath;
    router.push(
      {
        pathname,
        query,
      },
      as,
      {
        shallow: true,
      }
    );
    closeModal();
  };

  const handleQuickViewModal = (
    modalProps: any,
    deviceType: any,
    onModalClose: any
  ) => {
    const { pathname, query } = router;
    const as = `/product/${modalProps.slug}`;
    if (pathname === '/product/[slug]') {
      router.push(pathname, as);
      return;
    }
    openModal({
      show: true,
      overlayClassName: 'quick-view-overlay',
      closeOnClickOutside: false,
      component: QuickView,
      componentProps: { modalProps, deviceType, onModalClose },
      closeComponent: 'div',
      config: {
        enableResizing: false,
        disableDragging: true,
        className: 'quick-view-modal',
        width: 900,
        y: 30,
        height: 'auto',
        transition: {
          mass: 1,
          tension: 0,
          friction: 0,
        },
      },
    });
    router.push(
      {
        pathname,
        query,
      },
      {
        pathname: as,
      },
      {
        shallow: true,
      }
    );
  };
  if (error) return <ErrorMessage message={error.message} />;
  if (loading && !loadingMore) {
    return (
      <LoaderWrapper>
        <LoaderItem>
          <Placeholder uniqueKey="1" />
        </LoaderItem>
        <LoaderItem>
          <Placeholder uniqueKey="2" />
        </LoaderItem>
        <LoaderItem>
          <Placeholder uniqueKey="3" />
        </LoaderItem>
      </LoaderWrapper>
    );
  }

  if (!data || !data.products || data.products.items.length === 0) {
    return <NoResultFound />;
  }
  const handleLoadMore = () => {
    fetchMore({
      variables: {
        offset: Number(data.products.items.length),
        limit: fetchLimit,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return previousResult;
        }
        return {
          products: {
            __typename: previousResult.products.__typename,
            items: [
              ...previousResult.products.items,
              ...fetchMoreResult.products.items,
            ],
            hasMore: fetchMoreResult.products.hasMore,
          },
        };
      },
    });
  };

  const renderCard = (productType, props) => {
    switch (productType) {
      // case 'book':
      //   return (
      //     <BookCard
      //       title={props.title}
      //       image={props.image}
      //       name={props?.author?.name}
      //       data={props}
      //       deviceType={deviceType}
      //       onClick={() =>
      //         router.push('/product/[slug]', `/product/${props.slug}`)
      //       }
      //     />
      //   );
      // case 'medicine':
      //   return (
      //     <MedicineCard
      //       title={props.name}
      //       currency={CURRENCY}
      //       image={SHOP_IMAGE_HOST+props.images[0]}
      //       price={props.price}
      //       weight={props.unit}
      //       data={props}
      //     />
      //   );
      // case 'furniture':
      //   return (
      //     <FurnitureCard
      //       title={props.name}
      //       image={SHOP_IMAGE_HOST+props.images[0]}
      //       discountInPercent={props.discount_in_percent}
      //       onClick={() =>
      //         handleQuickViewModal(props, deviceType, handleModalClose)
      //       }
      //     />
      //   );
      default:
        return (
          <GeneralCard
            title={props.name}
            description={props.description}
            image={SHOP_IMAGE_HOST+props.images[0]}
            weight={props.unit}
            currency={CURRENCY}
            price={props.price}
            salePrice={props.sale_price}
            discountInPercent={props.discount_in_percent}
            data={props}
            deviceType={deviceType}
            onClick={() =>
              router.push('/product/[slug]', `/product/${props.slug}`)
            }
          />
        );
    }
  };

  const onlineProducts = data.products.items?.filter((product) => product?.is_online === true)

  return (
    <>
      <ProductsRow style={{ display: isMobile ? 'block' : 'flex' }}>
        {onlineProducts?.sort((a, b) => a.name.localeCompare(b.name)).map((item: any, index: number) => (
          <ProductsCol
            key={index}
            style={isMobile ? { maxWidth: '100%', paddingRight: 1 } : {}}
          >
            <ProductCardWrapper style={isMobile ? { display: 'flex' } : {}}>
              <Fade
                duration={800}
                delay={index * 10}
                style={{ height: '100%' }}
              >
                {renderCard(type, item)}
              </Fade>
            </ProductCardWrapper>
          </ProductsCol>
        ))}
      </ProductsRow>
      {loadMore && data.products.hasMore && (
        <ButtonWrapper>
          <Button
            onClick={handleLoadMore}
            loading={loadingMore}
            variant="secondary"
            style={{
              fontSize: 14,
            }}
            border="1px solid #f1f1f1"
          >
            <FormattedMessage id="loadMoreButton" defaultMessage="Load More" />
          </Button>
        </ButtonWrapper>
      )}
    </>
  );
};
export default Products;
