import React from 'react';
import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const Charts = ({ ...props }) => {
  return <Chart {...props} />;
};


    

export default Charts;

// import { ClientOnly } from 'components/client-only/client-only';
// import React from 'react';
// import ApexChart from 'react-apexcharts';

// const Charts = ({ ...props }) => {
//   return (
//     <ClientOnly>
//       <ApexChart {...props} />
//     </ClientOnly>
//   )
// };

// export default Charts;
