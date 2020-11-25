import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'

import styled from '@emotion/styled';
import { HeaderTittle, HeaderSubtittle, HeaderTittleBold, SmallElement, Paragraph, ImgLogo, Button } from '../UI/Commons';

import Form from '../commons/Forms/Form';
import InputText from '../commons/Forms/InputText';

import { ShowMessagge } from '../../actions/toastAction';
import { signUp } from '../../actions/userAction';
// CSS --------------------------------------------
const MainContainer  = styled.section`
    height: 100vh !important;
    margin: 0px !important;
    padding: 0px !important;

    &>div {
        height: 100% !important;
        padding: 0px !important;
        margin: 0px !important;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column; 
    }

    & #ms-form-logo-container {
        display: none !important;
    }

    @media only screen and (max-width: 1400px) {
        & #ms-link-login {
            margin-top: 2rem !important;
        }

        & button {
            margin-top: 1rem !important;
        }

        & form {
            width: 75% !important;
        }
    }

    @media only screen and (max-width: 1100px) {
        & #ms-form-logo-container {
            display: flex !important;
        }

        & form {
            width: 80% !important;
        }
    }

    @media only screen and (max-width: 400px) {
        & .ms-form-remove-mobile-container, & #ms-form-logo-container {
            display: none !important;
        }

        & #ms-form-title-container {
            width: 100% !important;
            align-self: center !important;
            justify-content: center !important;
            margin: 0px !important;

            & h1 {
                margin: 0px !important;
                font-size: 4.5rem !important;
            }
        }
    }
`;

const ContainerLogo = styled.div`
    background-image: url('/img/decoration/decoration-line-3.png');
    background-repeat: no-repeat;
    background-position-x: left;
    background-position-y: center;

    @media only screen and (max-width: 1100px) {
        display: none !important;
    }
`;
// -------------------------------------
const formFields = {
    username: {
        default: '',
        isRequired: true,
    },
    email: {
        default: '',
        isRequired: true,
        isEmail: true
    },
    password: {
        default: '',
        isRequired: true,
        minlength: 6,
        equalfield: {
            field: 'confirmpassword',
            alias: 'confirm password'
        }
    },
    confirmpassword: {
        default: '',
        novalidation: true
    }
}
// Sign Up ----------------------------------------
const SignUp = () => {
    const dispatch = useDispatch();
    // -------------------------------------
    const formTryCatch = e => {
        dispatch( ShowMessagge('error', 'There has been a problem with the register!') );
    }
    // -------------------------------------
    return ( 
        <MainContainer className="row">
            <ContainerLogo className="col">
                <div className="center-elements">
                    <ImgLogo src={window.location.origin + '/img/logos/mekarohub-logo-min.png'} />
                    <HeaderTittle>Mekaro Hub</HeaderTittle>
                </div>
                <HeaderSubtittle>A new social network control experience</HeaderSubtittle>
            </ContainerLogo>

            <div className="col bg-white d-flex flex-column justify-content-center align-items-center px-5">

                <div id="ms-form-logo-container" className="center-elements ">
                    <ImgLogo src={window.location.origin + '/img/logos/mekarohub-logo-dark-min.png'} />
                    <HeaderTittle className="text-black">Mekaro Hub</HeaderTittle>
                </div>

                <div id="ms-form-title-container" className="d-flex align-items-end align-self-start">
                    <HeaderTittleBold className="text-dark ml-10 boder-efect">Sign Up</HeaderTittleBold>
                    <HeaderSubtittle  className="text-dark font-weight-normal ml-4 ms-form-remove-mobile-container">unleash your full potential</HeaderSubtittle>
                </div>

                <Paragraph className="w-75 text-dark mt-5 align-self-start ml-10 ms-form-remove-mobile-container">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </Paragraph>

                <Form fields={formFields} trycatch={formTryCatch} action={signUp}>
                    <InputText label="Username" theme="light" type="text" icon="fas fa-user" name="username" />
                    <InputText label="Email" theme="light" type="email" icon="far fa-envelope" name="email" />
                    <InputText label="Password" theme="light" type="password" icon="fas fa-key" name="password" />
                    <InputText label="Confirm Password" theme="light" type="password" icon="fas fa-key" name="confirmpassword" />

                    <Button type="submit" className="btn btn-lg btn-primary ph-5 dark align-self-end mx-0">Register</Button>
                    <SmallElement id="ms-link-login" className="form-text text-muted text-center mt-8">wait a moment! <Link to={'/'} className="text-muted text-uppercase"><strong>I have an account already</strong></Link></SmallElement>
                </Form>
            </div>
        </MainContainer>
     );
}
 
export default SignUp;