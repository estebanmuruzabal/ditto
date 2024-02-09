import React from 'react';
import NavLink from 'components/nav-link/nav-link';
import StoreNavWrapper, { StoreNavLinks } from './store-nav.style';

type StoreNavProps = {
  className?: string;
  items?: any[];
};

const StoreNav: React.FunctionComponent<StoreNavProps> = ({
  className,
  items = [],
}) => {
  return (
    <StoreNavWrapper className={className}>
      <StoreNavLinks>
        {items.map((item, index) => (
          <NavLink
            className="store-nav-link"
            href={item.banner}
            label={item.name}
            // intlId={item.id}
            // dynamic={item.dynamic}
            // key={index}
          />
        ))}
      </StoreNavLinks>
    </StoreNavWrapper>
  );
};

export default StoreNav;


// banner
// : 
// "images/grocery-default-image.png"
// children
// : 
// []
// icon
// : 
// "FruitsVegetable"
// id
// : 
// "65a358c8cc5db3c66b2512f4"
// name
// : 
// "Fruits"
// parent_id
// : 
// "6598d37092897810deee6725"
// slug
// : 
// "fruits"