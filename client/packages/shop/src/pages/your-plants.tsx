import React from 'react';
import { SEO } from 'components/seo';
import YourPlants from 'features/your-plants/your-plants';

const YourPlantsPage = () => {
  return (
    <>
      <SEO title="Invoice - Ditto" description="Your plants" />
      <YourPlants />
    </>
  );
};

export default YourPlantsPage;
