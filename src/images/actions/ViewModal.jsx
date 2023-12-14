import React, { useRef } from "react";
import styled from "styled-components";
import useOutsideAlerter from "../../common/hooks/useClickOutside";

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

const ModalFooter = styled.div`
    display: flex;
    position: relative;
    justify-content: space-between;
`;

const ViewImage = ({ image, setSelectedToView }) => {
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, () => setSelectedToView(null));

    return (
        <Modal>
            <ModalContent ref={wrapperRef}>
                <img src={`${process.env.REACT_APP_BASE_API_URL}/${image?.fileName}`} alt={image?.originalName} />
            <ModalFooter>
                <span>{image?.originalName}</span>
                <button onClick={() => setSelectedToView(null)}>Close</button>
            </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default ViewImage;