import { NextPage } from 'next';
import { useQuery } from '@apollo/react-hooks';
import { Modal } from '@redq/reuse-modal';
import { GET_LOGGED_IN_USER } from 'graphql/query/customer.query';
import { WorkProvider } from 'contexts/work/work.provider';
import WorkContent from 'features/user-profile/work/work';
import {
  PageWrapper,
  SidebarSection,
  ContentBox,
} from 'features/user-profile/user-profile.style';
import Sidebar from 'features/user-profile/sidebar/sidebar';
import { SEO } from 'components/seo';
import ErrorMessage from 'components/error-message/error-message';

type Props = {
  deviceType?: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
};
const WorkPage: NextPage<Props> = ({ deviceType }) => {
  const { data, error, loading } = useQuery(GET_LOGGED_IN_USER);
  console.log('data.getUser:::' , data)
  if (!data || loading) {
    return <div>loading...</div>;
  }
  if (error) return <ErrorMessage message={error.message} />;
  
  return (
    <>
      <SEO title="Work - Ditto" description="Work Details" />
      <WorkProvider initData={data.getUser}>
        <Modal>
          <PageWrapper>
            <SidebarSection>
              <Sidebar />
            </SidebarSection>
            <ContentBox>
              <WorkContent deviceType={deviceType} />
            </ContentBox>
          </PageWrapper>
        </Modal>
      </WorkProvider>
    </>
  );
};

export default WorkPage;
