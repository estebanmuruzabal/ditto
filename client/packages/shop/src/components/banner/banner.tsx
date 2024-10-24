import React, { useCallback } from 'react';
import { FormattedMessage } from 'react-intl';
import {
  Box,
  Image,
  Content,
  Title,
  Description
} from './banner.style';

import { Waypoint } from 'react-waypoint';
import { useAppDispatch } from 'contexts/app/app.provider';

interface Props {
  imageUrl: string;
  intlTitleId: string;
  intlDescriptionId: string;
}

export const Banner: React.FC<Props> = ({
  imageUrl,
  intlTitleId,
  intlDescriptionId,
}) => {
  const dispatch = useAppDispatch();
  const setSticky = useCallback(() => dispatch({ type: 'SET_STICKY' }), [
    dispatch,
  ]);
  const removeSticky = useCallback(() => dispatch({ type: 'REMOVE_STICKY' }), [
    dispatch,
  ]);
  const onWaypointPositionChange = ({ currentPosition }) => {
    if (!currentPosition || currentPosition === 'above') {
      setSticky();
    }
  };
  return (
    <Box>
      <Image backgroundImage={`url(${imageUrl})`} />
      <Content>
        <Title>
          <FormattedMessage
            /* istanbul ignore next line */
            id="set your Title through Language File in the Admin UI"
            defaultMessage={intlTitleId}
            values={{ minute: 90 }}
          />
        </Title>
        <Description>
          <FormattedMessage
            /* istanbul ignore next line */
             id="set your description through Language File in the Admin UI"
            defaultMessage={intlDescriptionId}
          />
        </Description>
        <Waypoint
          onEnter={removeSticky}
          onLeave={setSticky}
          onPositionChange={onWaypointPositionChange}
        />
      </Content>
    </Box>
  );
};
