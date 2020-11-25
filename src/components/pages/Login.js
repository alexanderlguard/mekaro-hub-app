import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'

import styled from '@emotion/styled';
import { HeaderTittle, HeaderSubtittle, Paragraph, SmallElement, ImgLogo, Button } from '../UI/Commons';

import Form from '../commons/Forms/Form';
import InputGroup from '../commons/Forms/InputGroup';
import InputText from '../commons/Forms/InputText';
import CheckBox from '../commons/Forms/CheckBox';

import LoadingHideContainer from '../UI/LoadingHideContainer';

import { ShowMessagge } from '../../actions/toastAction';
import { login } from '../../actions/userAction';

// CSS Code -------------------------------------------------
const MainContainer  = styled.section`
    height: 100vh !important;
    margin: 0px !important;
    padding: 0px 5% !important;

    &>div {
        height: 100% !important;
        padding: 0px !important;
        margin: 0px !important;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column; 
    }

    @media only screen and (max-width: 1100px) {
        flex-direction: column !important;

        &>div {
            width: 100%;
            max-width: 100% !important;
            height: fit-content !important;
            flex: none !important;
            padding-top: 5rem !important;
        }

        &>div:nth-of-type(2) {
            flex: 1 !important;
            padding-top: 0px !important;
            padding-bottom: 0px !important;
        }
    }
`;

const ContainerLogo = styled.div`
    background-image: url('/img/decoration/decoration-line.png');
    background-repeat: repeat-y;

    @media only screen and (max-width: 1100px) {
        display: none !important;
    }
`;

const ContainerForm = styled.div`
    background-image: url('/img/decoration/decoration-line-2.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: center;

    & img {
        display: none !important;
    }

    @media only screen and (min-width: 1100px) and (max-width: 1400px) {
        & form {
            width: 75% !important;
        }
    }

    @media only screen and (max-width: 1100px) {

        & form {
            width: 75% !important;
        }

        & img {
            display: block !important;
        }
    }

    @media only screen and (max-width: 400px) {

        & form {
            width: 85% !important;
        }

        & #ms-container-form-options {
            flex-direction: column !important;
            align-items: flex-end !important;
            padding-top: 2rem !important;
        }

        & #ms-container-form-options>div {
            margin-bottom: 0px !important;
        }

        & #ms-container-form-options small {
            padding-right: 0px !important;
        }
    }
`;
// ------------------------------------------------------------------------------
const formFields = {
    username: {
        default: '',
        isRequired: true,
    },
    password: {
        default: '',
        isRequired: true,
        minlength: 6
    },
    remember: {
        default: true,
        novalidation: true
    }
}
// HTML Code --------------------------------------------------
const Login = () => {
    const dispatch = useDispatch();
    // ------------------------------------------------------------------------------
    const formTrycatch = e => {
        dispatch( ShowMessagge('error', 'There has been a problem with the register!') );
        console.log(e);
    }
    const formSuccess = result => {
        console.log(result);
    }
    // ------------------------------------------------------------------------------
    return (
        <LoadingHideContainer>
            <MainContainer className="row">
                <ContainerLogo className="col-lg-5 align-items-start">
                    <div className="center-elements">
                        <ImgLogo src={window.location.origin + '/img/logos/mekarohub-logo-min.png'} />
                        <HeaderTittle>Mekaro Hub</HeaderTittle>
                    </div>
                    <HeaderSubtittle>A new social network control experience </HeaderSubtittle>

                    <Paragraph className="w-80">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    </Paragraph>
                </ContainerLogo>
                <ContainerForm className="col-lg-7">
                    <ImgLogo src={window.location.origin + '/img/logos/mekarohub-logo-min.png'} />
                    <HeaderTittle className="mb-1">Welcome</HeaderTittle>

                    <Form fields={formFields} trycatch={formTrycatch} success={formSuccess} action={login}>
                        <InputText label="Username" type="text" icon="fas fa-user" name="username" theme="dark" />
                        <InputText label="Password" type="password" icon="fas fa-key" name="password" theme="dark" />

                        <InputGroup id="ms-container-form-options" className="d-flex justify-content-between align-items-center">
                            <CheckBox id="chk-remember-me" label="Remember Me" name="remember" />
                            <SmallElement className="form-text text-muted text-right mt-2 pr-5 text-white">I've forgotten my password</SmallElement>
                        </InputGroup>

                        <InputGroup className="d-flex flex-column justify-content-center">
                            <Button type="submit" className="btn btn-lg btn-primary mx-auto ph-5 light">Login</Button>
                            <SmallElement className="form-text text-muted text-center mt-2">I want to <Link to={'/signup'} className="text-muted text-uppercase"><strong>register me</strong></Link></SmallElement>
                        </InputGroup>
                    </Form>
                </ContainerForm>
            </MainContainer>
        </LoadingHideContainer>
    );
}
 
export default Login;