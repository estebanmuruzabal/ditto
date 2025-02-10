import React  from 'react';
import { useForm } from 'react-hook-form';
import Uploader from '../../components/Uploader/Uploader';
import Input from '../../components/Input/Input';
import { Textarea } from '../../components/Textarea/Textarea';
import Button from '../../components/Button/Button';
import DrawerBox from '../../components/DrawerBox/DrawerBox';
import { Grid, Row, Col } from '../../components/FlexBox/FlexBox';
import { Form, FieldDetails } from '../DrawerItems/DrawerItems.style';
import { FormFields, FormLabel } from '../../components/FormFields/FormFields';
import {gql} from "apollo-boost";
import {useMutation, useQuery} from "@apollo/react-hooks";
import {getBase64Value} from "../../helpers/convert-image-base64";
import {styled} from "baseui";
import {ADMIN_IMAGE_HOST} from "../../helpers/images-path";
import Checkbox from '../../components/CheckBox/CheckBox';

const GET_SETTING = gql`
  query GetSetting {
    getSiteSetting(key: "site-settings") {
      id
      key
      value
    }
  }
`;


const UPDATE_SITE_SETTING = gql`
  mutation UpdateSiteSetting($key: String!, $value: String!) {
    updateSiteSetting(key: $key, value: $value) {
      id
      key
      value
    }
  }
`
const ThumbsContainer = styled('aside', () => ({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: '16px',
}));

const Thumbcus = styled('div', ({ $theme }) => ({
  ...$theme.borders.borderEA,
  display: 'inline-flex',
  borderRadius: '2px',
  marginBottom: '8px',
  marginRight: '8px',
  width: '150px',
  height: '100px',
  padding: '4px',
  boxSizing: 'border-box',
}));

const Thumbfav = styled('div', ({ $theme }) => ({
  ...$theme.borders.borderEA,
  display: 'inline-flex',
  borderRadius: '2px',
  marginBottom: '8px',
  marginRight: '8px',
  width: '50px',
  height: '50px',
  padding: '4px',
  boxSizing: 'border-box',
}));

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden',
};

const img = {
  display: 'block',
  width: '140px',
  height: '100%',
}

const fav = {
  display: 'block',
  width: '45px',
  height: '100%',
}
const cThumb = (url) => {
  return  <Thumbcus key="site-image">
    <div style={thumbInner}>
      <img src={url} style={img} alt="site-image" />
    </div>
  </Thumbcus>;
};
const FavThumb = (url) => {
  return  <Thumbfav key="site-fav">
    <div style={thumbInner}>
      <img src={url} style={fav} alt="site-fav" />
    </div>
  </Thumbfav>;
};

type Props = {};
type ValueType = {
  favicon: string,
  image: string,
  site_title: string,
  site_keyword: string,
  site_description: string,
};
const SiteSettingsForm: React.FC<Props> = () => {
  const { data, error, refetch } = useQuery(GET_SETTING);
  const [updateSiteSetting] = useMutation(UPDATE_SITE_SETTING);
  const { register, handleSubmit, setValue } = useForm();
  const [image_data, setImageData] = React.useState<any | null>(null);
  const [image, setImage] = React.useState('');
  const [favicon_data, setFaviconData] = React.useState<any | null>(null);
  const [favicon, setFavicon] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [keyword, setKeyword] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [whatsapp_bot_is_on, setWhatsapp_bot_is_on] = React.useState(true);

  const [siteData, setSiteData] = React.useState<ValueType>();
  const [shopIsOnline, setShopIsOnline] = React.useState(false);
  const [address, setAddress] = React.useState<ValueType>();
  const [longitude, setLongitude] = React.useState<ValueType>();
  const [latitude, setLatitude] = React.useState<ValueType>();

  const settingData = (): ValueType => {
    const settingData = JSON.parse(data.getSiteSetting.value);
    setFavicon(settingData.favicon);
    setImage(settingData.image);
    setTitle(settingData.site_title);
    setKeyword(settingData.site_keyword);
    setDescription(settingData.site_description);
    setShopIsOnline(settingData.shopIsOnline);
    setAddress(settingData.address);
    setLongitude(settingData.longitude);
    setLatitude(settingData.latitude);
    setWhatsapp_bot_is_on(settingData.whatsapp_bot_is_on);

    setSiteData(settingData);

    return settingData;
  }

  React.useEffect(() => {
    if (data) {
     settingData();
    }
  }, [data]);

  const handleUploader = (files) => {
    setImageData({name: files[0].name, size: files[0].size, type: files[0].type});
    getBase64Value(files[0], imageBase64Value => {
      setImage(imageBase64Value)
    })
  };
  const handleFaviconUploader = (files) => {
    setFaviconData({name: files[0].name, size: files[0].size, type: files[0].type});
    getBase64Value(files[0], imageBase64Value => {
      setFavicon(imageBase64Value)
    })
  };


  React.useEffect(() => {
    register({ name: 'site_title' });
    register({ name: 'site_keyword' });
    register({ name: 'reactSelect' });
    register({ name: 'reactDropzone' });
  }, [register]);


  const onSubmit = (data) => {

    const settingsValue = {
      image: image,
      image_data: image_data,
      favicon: favicon,
      favicon_data: favicon_data,
      site_title: title,
      site_keyword: keyword,
      site_description: description,
      whatsapp_bot_is_on: whatsapp_bot_is_on,
      shopIsOnline: shopIsOnline,
      address: address,
      longitude: longitude,
      latitude: latitude
    };
    console.log('settingsValue:::', settingsValue)
    updateSiteSetting({
      variables: { key: 'site-settings', value: JSON.stringify(settingsValue) },
    });
  };



  return (
    <Grid fluid={true}>
      <Form onSubmit={handleSubmit(onSubmit)} style={{ paddingBottom: 0 }}>
        <Row>
          <Col md={4}>
            <FieldDetails>Upload your site logo here</FieldDetails>
          </Col>

          <Col md={8}>
            <DrawerBox>
              <Uploader onChange={handleUploader} imageURL={siteData ? ADMIN_IMAGE_HOST+siteData.image : null} />
              <div style={{ display: !image_data ? "block" : "none" }}>
                <p>Site Logo:</p>
                <ThumbsContainer>{cThumb(siteData ? ADMIN_IMAGE_HOST+siteData.image : null)}</ThumbsContainer>
              </div>
            </DrawerBox>
          </Col>
          <Col md={4}>
            <FieldDetails>Upload your site favicon here</FieldDetails>
          </Col>

          <Col md={8}>
            <DrawerBox>
              <Uploader onChange={handleFaviconUploader} imageURL={siteData ? ADMIN_IMAGE_HOST+siteData.favicon : null} />
              <div style={{ display: !favicon_data ? "block" : "none" }}>
                <p>Site Favicon:</p>
                <ThumbsContainer>{FavThumb(siteData ? ADMIN_IMAGE_HOST+siteData.favicon : null)}</ThumbsContainer>
              </div>
            </DrawerBox>
          </Col>
        </Row>

        <Row>
          <Col md={4}>
            <FieldDetails>
              Add your site description and necessary information from here
            </FieldDetails>
          </Col>

          <Col md={8}>
            <DrawerBox>
              <FormFields>
                <FormLabel>Site Title</FormLabel>
                <Input
                  name='site_title'
                  inputRef={register({ required: true, maxLength: 60 })}
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                />
              </FormFields>

              <FormFields>
                <FormLabel>Site Keyword</FormLabel>
                <Input
                  name='site_keyword'
                  inputRef={register({ required: true })}
                  onChange={(e) => setKeyword(e.target.value)}
                  value={keyword}
                />
              </FormFields>

              <FormFields>
                <FormLabel>Site Description</FormLabel>
                <Textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </FormFields>

              { !!shopIsOnline && (
                <>
                  <FormFields>
                    <FormLabel>Business formal address</FormLabel>
                    <Input
                      name='address'
                      inputRef={register({ required: true })}
                      onChange={(e) => setAddress(e.target.value)}
                      value={address}
                    />
                  </FormFields>

                  <FormFields>
                    <FormLabel>Coordinates of business.</FormLabel>
                    <Input
                      name='latitude'
                      inputRef={register({ required: true })}
                      onChange={(e) => setLatitude(e.target.value)}
                      placeholder='latitude'
                      value={latitude}
                    />
                     <Input
                      name='longitude'
                      placeholder='longitude'
                      inputRef={register({ required: true })}
                      onChange={(e) => setLongitude(e.target.value)}
                      value={longitude}
                    />
                  </FormFields>
                </>
              )}

              <FormFields>
                <Checkbox
                    checked={shopIsOnline}
                    onChange={() => setShopIsOnline(!shopIsOnline) }
                    // inputRef={register({ required: true })}
                    name='shopIsOnline'
                    overrides={{
                    Label: {
                        style: ({ $theme }) => ({
                        color: $theme.colors.textNormal,
                        }),
                    },
                    }}
                >
                    {'Shop is online'}
                </Checkbox>
              </FormFields>

              <FormFields>
                {/* <FormLabel>WhatsApp Notifications</FormLabel> */}
                <Checkbox
                    checked={whatsapp_bot_is_on}
                    onChange={() => setWhatsapp_bot_is_on(!whatsapp_bot_is_on) }
                    // inputRef={register({ required: true })}
                    name='whatsapp_bot_is_on'
                    overrides={{
                    Label: {
                        style: ({ $theme }) => ({
                        color: $theme.colors.textNormal,
                        }),
                    },
                    }}
                >
                    {'WhatsApp Notifications'}
                </Checkbox>
              </FormFields>

              <FormFields>
                <Button
                  type='submit'
                  overrides={{
                    BaseButton: {
                      style: ({ $theme }) => ({
                        width: '50%',
                        marginLeft: 'auto',
                        borderTopLeftRadius: '3px',
                        borderTopRightRadius: '3px',
                        borderBottomLeftRadius: '3px',
                        borderBottomRightRadius: '3px',
                      }),
                    },
                  }}
                >
                  Submit
                </Button>
              </FormFields>
            </DrawerBox>
          </Col>
        </Row>
      </Form>
    </Grid>
  );
};

export default SiteSettingsForm;
