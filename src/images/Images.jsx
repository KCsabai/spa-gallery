import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types'
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import DeleteImage from "./actions/DeleteModal";
import ViewImage from "./actions/ViewModal";

const ImagesContainer = styled.table`
  margin: auto;
  width: 80%;
  margin-top: 60px;
  border-collapse: collapse; 
`;

const ImageTableHead = styled.thead`
  background-color: #ddd5d5;
`;

const ImageTableBody = styled.tbody`
  tr:nth-child(even) {
    background-color: #ddd5d5;
  }
`;

const ImageTableHeaderCell = styled.th`
`;

const ImageRow = styled.tr`
`;

const ImageCell = styled.td`
  display: table-cell;
`;

const ImageEditButton = styled.button`
  margin-right: 10px;
  background-color: #bebec1;
`;

const ImageViewButton = styled.button`
  margin-right: 10px;
  background-color: #bebec1;
`;

const ImageDeleteButton = styled.button`
  margin-right: 10px;
  background-color: #e60000;
`;

const ImageUploadContainer = styled.div`
  margin: auto;
  margin-top: 60px;
  width: 80%;
  padding: 20px;
  border: 1px solid #ddd5d5;
`;

const Images = ({ images, fetchImages, imageDelete, imagesUpload }) => {
  const [fileList, setFileList] = useState(null);
  const [selectedToDelete, setSelectedToDelete] = useState(null);
  const [selectToView, setSelectedToView] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchImages();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onEdit = (image) => {
    navigate(`/images/${image.id}`);
  }

  const handleFileChange = (e) => {
    setFileList(e.target.files);
  };

  const handleUpload = (e) => {
    e.preventDefault();

    const files = fileList ? [...fileList] : [];
    const data = new FormData();
    files.forEach((file, i) => {
      data.append(`images[]`, file, file.name);
    });

    imagesUpload(data);
  };

  return (
    <>
      {
        selectedToDelete && <DeleteImage image={selectedToDelete} setSelectedToDelete={setSelectedToDelete} imageDelete={imageDelete} />
      }
      {
        selectToView && <ViewImage image={selectToView} setSelectedToView={setSelectedToView} />
      }

      <ImageUploadContainer>
        <input type="file" onChange={handleFileChange} multiple/>
        <button onClick={handleUpload}>Upload</button>
      </ImageUploadContainer>
      <ImagesContainer>
        <ImageTableHead>
          <ImageRow>
            <ImageTableHeaderCell>ID</ImageTableHeaderCell>
            <ImageTableHeaderCell>File name</ImageTableHeaderCell>
            <ImageTableHeaderCell>Uploaded</ImageTableHeaderCell>
            <ImageTableHeaderCell>Actions</ImageTableHeaderCell>
          </ImageRow>
        </ImageTableHead>
        <ImageTableBody>
          {
            images.map(image => (
              <ImageRow key={image.id}>
                <ImageCell>{image.id}</ImageCell>
                <ImageCell>{image.originalName}</ImageCell>
                <ImageCell>{image.createdDate}</ImageCell>
                <ImageCell>
                  <ImageEditButton onClick={() => onEdit(image)}>Edit</ImageEditButton>
                  <ImageDeleteButton onClick={() => setSelectedToDelete(image)}>Delete</ImageDeleteButton>
                  <ImageViewButton onClick={() => setSelectedToView(image)}>View</ImageViewButton>
                </ImageCell>
              </ImageRow>
            ))
          }
        </ImageTableBody>
      </ImagesContainer>
    </>
  );
};

Images.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    originalName: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  fetchImages: PropTypes.func.isRequired
}

export default Images;
