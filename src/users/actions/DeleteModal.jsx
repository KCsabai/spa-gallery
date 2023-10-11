import React from "react";
import styled from "styled-components";

const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 100%;
    background-color: rgba(150,150,150,0.8);
`;

const ModalContent = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 3px solid #fff;
    background-color: #cbc0c0;
`;

const ModalTitle = styled.h1`
`;

const ButtonContainer = styled.div`
    margin-bottom: 10px;
`;

const YesButton = styled.button`
    background-color: #e60000;
    margin-right: 10px;
    width: 70px;
    text-color: #fff;
    font-weight: bold;
`;

const NoButton = styled.button`
    background-color: #07bc0c;
    margin-right: 10px;
    width: 70px;
    text-color: #fff;
    font-weight: bold;
`;

const DeleteUser = ({ user, setSelectedToDelete, userDelete }) => {
    const onYes = () => {
        userDelete(user);
        setSelectedToDelete(null);
    }

    return (
        <Modal>
            <ModalContent>
                <ModalTitle>Are you sure you want to delete {user?.fullname}?</ModalTitle>
                <ButtonContainer>
                    <YesButton onClick={onYes}>Yes</YesButton>
                    <NoButton onClick={() => setSelectedToDelete(null)}>No</NoButton>
                </ButtonContainer>
            </ModalContent>
        </Modal>
    );
};

export default DeleteUser;