import React from 'react';
import { usePrevious, useMeasure } from 'utils/hooks';
import { useSpring, animated } from 'react-spring';
import { Frame, Title, Content, Header, IconWrapper } from './horizontal-menu.style';

import * as Icons from 'assets/icons/category-icons';
import { useMedia } from 'utils/use-media';
import Checkbox from 'components/checkbox/checkbox';

const Tree = React.memo(
  ({
    children,
    name,
    icon,
    isOpen,
    onClick,
    depth,
    defaultOpen = false,
  }: any) => {
    const previous = usePrevious(isOpen);
    const [bind, { height: viewHeight }] = useMeasure();
    const isMobile = useMedia('(max-width: 580px)');
    const { height, opacity, transform } = useSpring<any>({
      from: { height: 0, opacity: 0, transform: 'translate3d(20px,0,0)' },
      to: {
        height: isOpen ? viewHeight : 0,
        opacity: isOpen ? 1 : 0,
        transform: `translate3d(${isOpen ? 0 : 20}px,0,0)`,
      },
    });
    const Icon = icon ? Icons[icon] : depth === 'child' ? Icons['Minus'] : null;
    return (
    <Frame depth={depth} isOpen={isOpen}>
         {depth === 'child' && (
            <Checkbox
                keyName={`${name}-id`}
                isChecked={isOpen}
                labelText={`${name}`}
                id={`deliveryMethod-${name}`}
                onChange={e => {
                  // e.stopPropagation();
                  onClick();
                }}
            />
          )}
          <Header open={isOpen} depth={depth} className={depth} isMobile>
            {/* {Icon !== null && (
              <IconWrapper depth={depth}>
                <Icon />
              </IconWrapper>
            )} */}
             {depth !== 'child' && ( <Title isMobile onClick={onClick}>{name}</Title> )}
          </Header>
          <Content
            style={{
              opacity,
              height: isOpen && previous === isOpen ? 'auto' : height,
            }}
          >
            <animated.div style={{ 
              transform,
              display: depth === 'child' ? 'block' : 'flex',
              flexDirection: depth === 'child' ? 'column' : 'column',
            }} {...bind} children={children} />
          </Content>
        </Frame>
    );
  }
);

type Props = {
  className?: any;
  data: any;
  onClick: (slug: string) => void;
  active: string | string[];
};
export const HorizontalMenu: React.FC<Props> = ({
  data,
  className,
  onClick,
  active,
}) => {
  const handler = (children) => {
      return children?.map((subOption) => {
        if (subOption.parent_id) return;
        if (!subOption.children) {
          return (
            <Tree
              key={subOption.name}
              name={subOption.name}
              icon={subOption.icon}
              depth="child"
              onClick={() => onClick(subOption.slug)}
              isOpen={active === subOption.slug}
            />
          );
        }
        return (
          <Tree
            key={subOption.name}
            name={subOption.name}
            icon={subOption.icon}
            depth="parent"
            onClick={() => onClick(subOption.slug)}
            // onClick={() => subOption.children ? null : onClick(subOption.slug)}
            isOpen={
              active === subOption.slug ||
              subOption.children.some((item) => item.slug === active)
            }
          >
            {handler(subOption.children)}
          </Tree>
        );
      });
  };
  return <>{handler(data)}</>;
};
