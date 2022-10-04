import React, {useContext, useEffect} from 'react';
import {NextPage, GetStaticProps} from 'next';
import Router, { useRouter } from 'next/router';
import {useQuery} from '@apollo/react-hooks';
import {Modal} from '@redq/reuse-modal';
import { openModal } from '@redq/reuse-modal';
import {SEO} from 'components/seo';
import Checkout from 'features/checkouts/checkout-two/checkout-two';
import {GET_LOGGED_IN_USER} from 'graphql/query/customer.query';
import {DELIVERY_METHOD} from 'graphql/query/delivery';
import {PAYMENT_OPTION} from 'graphql/query/paymentoption';
import {ProfileProvider} from 'contexts/profile/profile.provider';
import ErrorMessage from 'components/error-message/error-message';
import ErrorMessageTwo from 'components/error-message/error-message-two';
import {AuthContext} from "../contexts/auth/auth.context";
import { FormattedMessage, useIntl } from 'react-intl';
import {Button} from "../components/button/button";
import styled from "styled-components";
import AuthenticationForm from "../features/authentication-form";
import { render } from 'react-dom';
import { LinkButton, Offer } from 'features/authentication-form/authentication-form.style';

type Props = {
    deviceType: {
        mobile: boolean;
        tablet: boolean;
        desktop: boolean;
    };
};

const LoginMessageDiv = styled.aside({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '15vh',
    padding: '0 1.5rem 1.5rem',
    fontSize: '22px',
    backgroundColor: '#fff',
});

const CheckoutPage: NextPage<Props> = ({deviceType}) => {
    const {data: deliverData, error: deliveryError, loading: deliveryLoading, refetch: deliveryRefetch} = useQuery(DELIVERY_METHOD)
    const {data: paymentData, error: paymentError, loading: paymentLoading, refetch: paymentRefetch} = useQuery(PAYMENT_OPTION);
    const {data, error, loading, refetch: userRefetch} = useQuery(GET_LOGGED_IN_USER);
    const intl = useIntl();
    const router = useRouter();

    // React.useEffect(() => {
    //     if (router.query.shouldRefresh) {
    //         userRefetch();
    //     }
    //   }, []);

    const {authDispatch} = useContext<any>(AuthContext);

    const toggleSignUpForm = () => {
        authDispatch({
            type: 'SIGNUP',
        });

        openModal({
            show: true,
            overlayClassName: 'quick-view-overlay',
            closeOnClickOutside: true,
            component: AuthenticationForm,
            closeComponent: '',
            config:{
                enableResizing: false,
                disableDragging: true,
                className: 'quick-view-modal',
                width: 458,
                height: 'auto',
            },
        });
    };

    const toggleSignInForm = () => {
        authDispatch({
            type: 'SIGNIN',
        });

        openModal({
            show: true,
            overlayClassName: 'quick-view-overlay',
            closeOnClickOutside: true,
            component: AuthenticationForm,
            closeComponent: '',
            config:{
                enableResizing: false,
                disableDragging: true,
                className: 'quick-view-modal',
                width: 458,
                height: 'auto',
            },
        });
    };

    if (router.query.shouldRefresh) {
        userRefetch();
    }
    if (loading || deliveryLoading || paymentLoading) {
        return <ErrorMessage message={'Cargando...'}/>
    }

    if (error?.toString()?.includes('no token sent')) {
        // @ts-ignore
        return (
            <>
                <ErrorMessageTwo message={intl.formatMessage({ id: 'notAuth', defaultMessage: 'notAuth' })}/>
                <LoginMessageDiv>
                    <Modal>
                    <Button
                        type='button'
                        onClick={toggleSignInForm}
                        size='big'
                        style={{width: '200px'}}
                    >
                        {intl.formatMessage({ id: 'loginBtnText', defaultMessage: 'loginBtnText' })}
                    </Button>
                    <Offer style={{ padding: '20px 20px' }}>
                        <FormattedMessage
                            id='dontHaveAccount'
                            defaultMessage="Don't have any account?"
                        />{' '}
                        <LinkButton onClick={toggleSignUpForm}>
                            <FormattedMessage id='signUpBtnText' defaultMessage='Sign Up' />
                        </LinkButton>
                    </Offer>
                    </Modal>
                </LoginMessageDiv>
            </>
        )
    } else if (error || deliveryError || paymentError) {
        // @ts-ignore
        const err = error || deliveryError || paymentError;
        return (
            <>
                <ErrorMessageTwo message={intl.formatMessage({ id: 'somethingWentWrongAuth', defaultMessage: err.toString() })}/>
                <LoginMessageDiv>
                    <Modal>
                    <Button
                        type='button'
                        onClick={toggleSignInForm}
                        size='big'
                        style={{width: '200px'}}
                    >
                        {intl.formatMessage({ id: 'loginBtnText', defaultMessage: 'loginBtnText' })}
                    </Button>
                    <Offer style={{ padding: '20px 20px' }}>
                        <FormattedMessage
                            id='dontHaveAccount'
                            defaultMessage="Don't have any account?"
                        />{' '}
                        <LinkButton onClick={toggleSignUpForm}>
                            <FormattedMessage id='signUpBtnText' defaultMessage='Sign Up' />
                        </LinkButton>
                    </Offer>
                    </Modal>
                </LoginMessageDiv>
            </>
        )
    }

    const token = 'true';

    deliveryRefetch();
    paymentRefetch();

    console.dir(deliverData.deliveryMethods)
    console.dir(paymentData.paymentOptions)

    const checkoutData = {
        ...data.getUser,
        deliveryMethods: [],
        paymentMethods: [],
    }


    console.dir(deliverData)
    console.dir(paymentData)

    if (checkoutData.deliveryMethods.length == 0 && (deliverData || deliverData.deliveryMethods)) {
        checkoutData.deliveryMethods = [...deliverData.deliveryMethods.items];
    }

    if (checkoutData.paymentMethods.length == 0 && (paymentData || paymentData.paymentOptions)) {
        checkoutData.paymentMethods = [...paymentData.paymentOptions.items];
    }


    return (
        <>
            <SEO title="Checkout - Ditto" description="Checkout Details"/>
            <ProfileProvider initData={checkoutData}>
                <Modal>
                    <Checkout token={token} deviceType={deviceType}/>
                </Modal>
            </ProfileProvider>
        </>
    );
};

export default CheckoutPage;
