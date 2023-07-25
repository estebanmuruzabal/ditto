import { NextPage } from 'next';
import { useQuery } from '@apollo/react-hooks';
import { Modal } from '@redq/reuse-modal';
import { GET_LOGGED_IN_USER } from 'graphql/query/customer.query';
import { ProfileProvider } from 'contexts/profile/profile.provider';
import SettingsContent from 'features/user-profile/settings/settings';

import Sidebar from 'features/user-profile/sidebar/sidebar';
import { SEO } from 'components/seo';
import ErrorMessage from 'components/error-message/error-message';
import { ContentBox, PlantsPageWrapper, SidebarSection } from 'features/your-plants/your-plants.style';
import Market from 'features/market/market';

type Props = {
  deviceType?: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
};
const MarketPage: NextPage<Props> = ({ deviceType }) => {
  const { loading, error, data = {}, refetch: userRefetch } = useQuery(GET_LOGGED_IN_USER, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "no-cache",
  });
  if (!data || loading) {
    return <div>loading...</div>;
  }
  if (error) return <ErrorMessage message={error.message} />;
  return (
    <>
      <SEO title="Plants controller - Ditto" description="Your plants" />
      <ProfileProvider initData={data.getUser}>
        <Modal>
          <PlantsPageWrapper>
            <SidebarSection>
              <Sidebar />
            </SidebarSection>
            <ContentBox>
              <Market userRefetch={userRefetch} deviceType={deviceType} />
            </ContentBox>
          </PlantsPageWrapper>
        </Modal>
      </ProfileProvider>
    </>
  );
};

export default MarketPage;
