import React, { useContext } from 'react';
import { Box, SelectedItem, Flag, MenuItem } from './delivery-method.style';
import Popover from 'components/popover/popover';
import { FormattedMessage } from 'react-intl';
import * as flagIcons from 'assets/icons/flags';
import { useLocale } from 'contexts/language/language.provider';
import { LANGUAGE_MENU } from 'site-settings/site-navigation';
import { Arrow } from '../left-menu/left-menu.style';
import { MenuDown } from 'assets/icons/MenuDown';
import { useMutation } from '@apollo/react-hooks';
import { UPDATE_USER } from 'graphql/mutation/user';
import { ProfileContext } from 'contexts/profile/profile.context';
import { AuthContext } from 'contexts/auth/auth.context';

const FlagIcon = ({ name }) => {
  const TagName = flagIcons[name];
  return !!TagName ? <TagName /> : <p>Invalid icon {name}</p>;
};

const DeliveryOptionsView = ({ onClick }) => {
  return (
    <>
      {LANGUAGE_MENU.map((item) => (
        <MenuItem onClick={onClick} key={item.id} value={item.id}>
          <span>
            <FlagIcon name={item.icon} />
          </span>
          <FormattedMessage id={item.id} defaultMessage={item.defaultMessage} />
        </MenuItem>
      ))}
    </>
  );
};

const DeliveryMenu: React.FC<{}> = () => {
  const { locale, changeLanguage } = useLocale();
  const {
    authState: { user },
    authDispatch,
  } = React.useContext<any>(AuthContext);
  
  const { state, dispatch } = useContext(ProfileContext);
  const [updateUserMutation] = useMutation(UPDATE_USER);
  
  const handleSave = async () => {
    const { name, email, id } = state;
    // await updateUserMutation({
    //   variables: {
    //     id,
    //      name,
    //      email
    //     }
    // });
    // setUserinfoMsg('Update user info successfully');
    // setTimeout(function () {
    //   setUserinfoMsg('');
    // }, 8000)
  };

  const selectedLanguage = LANGUAGE_MENU.find((x) => x.id === locale);
  const languageChangeHandler = (e) => {
    changeLanguage(e.target.value);
  };
  return (
    <Box>
      <Popover
        className="right"
        handler={
          <SelectedItem>
            {/* <Flag>
              <FlagIcon name={selectedLanguage?.icon} />
            </Flag> */}
            <span>
              <FormattedMessage
                id={'asd'}
                defaultMessage={'How do you want your items?'}
              />
            </span>
            <Arrow>
              <MenuDown />
            </Arrow>
          </SelectedItem>
        }
        content={<DeliveryOptionsView onClick={languageChangeHandler} />}
      />
    </Box>
  );
};

export default DeliveryMenu;
