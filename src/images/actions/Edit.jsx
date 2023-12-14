import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

const EditContainer = styled.div`
    margin: auto;
    margin-top: 20px;
    width: 50%;
    padding: 10px;
    border: 1px solid #ccc;
`;

const EditHeader = styled.h1``;

const EditForm = styled.form`
    display: inline-block;
`;

const ImageUploadContainer = styled.div`
  margin: auto;
`;

const SubmitButton = styled.button`
    border-radius: 5px;
    border-color: green;
    background-color: green;
`;

const Edit = ({ image, fetchImage, updateSelected, imageUpdate, updatedSuccessfully }) => {
    const [file, setFile] = useState(null);
    const { id: imageId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetchImage(imageId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (!image && updatedSuccessfully) {
            navigate('/images');
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [updatedSuccessfully]);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };
    
    const handleUpload = (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append(`image`, file, file.name);

        imageUpdate(imageId, data);
    };
    
    return (
        <EditContainer>
            <EditHeader>Edit</EditHeader>
            {
                image && (
                    <EditForm onSubmit={handleUpload}>
                        <ImageUploadContainer>
                            <input type="file" onChange={handleFileChange} multiple/>
                        </ImageUploadContainer>
                        <SubmitButton type="submit">Edit</SubmitButton>
                    </EditForm>
                )
            }
        </EditContainer>
    );
}

export default Edit;