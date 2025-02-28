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
      <Image backgroundimage={`url(${imageUrl})`} />
      <Content>
        <Title>
          <FormattedMessage
            id="spanishOnlyTitle"
            defaultMessage={intlTitleId}
            // values={{ minute: 90 }}
          />
        </Title>
        <Description>
          <FormattedMessage
             id="spanishOnlyDescription"
            defaultMessage={intlDescriptionId}
          />
        </Description>
        <Waypoint
          onEnter={removeSticky}
          onLeave={setSticky}
          onPositionChange={onWaypointPositionChange}
        />
        {/* <iframe src={`https://www.youtube.com/embed/i_5pt4FbzTk`}></iframe> */}
      </Content>
    </Box>
  );
};
