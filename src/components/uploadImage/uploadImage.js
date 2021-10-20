import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from '../../redux/actions/action';
import { Button } from 'react-bootstrap';
import ImageUploading from "react-images-uploading";
function UploadImage(props) {
    const [images, setImages] = useState([])
    // const [images, setImages] = useState([])
    const maxNumber = 69;

    const onChange = (imageList, addUpdateIndex) => {
        // data for submit

        // console.log("imageList", imageList);
        // console.log("addUpdateIndex", addUpdateIndex);
        setImages(imageList);
    };

    function uploadImage() {
        console.log("images", images);
        const path = require('path')
const getColors = require('get-image-colors')


        images.map(image => {
            // פונקציה שמביאה איזה צבעים יש בתמונה
            getColors(path.join(__dirname, image.file.name)).then(colors => {
                // `colors` is an array of color objects
              })
            image.colors = ["#B69974", "red"]
        })
        props.uploadImage({ 'images': images, 'companyId': props.company._id })
    }

    return (
        <>
            <div class=''>
                hello uploadImage
            </div>
            <h1>Hi to {props.company.name}</h1>
            <Button variant="outline-warning"
                onClick={() => uploadImage()}>
                upload image</Button >


            <div className="App">
                <ImageUploading
                    multiple
                    value={images}
                    onChange={onChange}
                    maxNumber={maxNumber}
                    dataURLKey="data_url"
                >
                    {({
                        imageList,
                        onImageUpload,
                        onImageRemoveAll,
                        onImageUpdate,
                        onImageRemove,
                        isDragging,
                        dragProps
                    }) => (
                        // write your building UI
                        <div className="upload__image-wrapper">
                            <button
                                style={isDragging ? { color: "red" } : undefined}
                                onClick={onImageUpload}
                                {...dragProps}
                            >
                                Click or Drop here
                            </button>
                            &nbsp;
                            <button onClick={onImageRemoveAll}>Remove all images</button>
                            {imageList.map((image, index) => (
                                <div key={index} className="image-item">
                                    <img src={image["data_url"]} alt="" width="100" />
                                    <div className="image-item__btn-wrapper">
                                        <button onClick={() => onImageUpdate(index)}>Update</button>
                                        <button onClick={() => onImageRemove(index)}>Remove</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </ImageUploading>
            </div>


        </>
    );

}

const mapStateToProps = (state) => {
    return {
        company: state.company_reduser.company
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        uploadImage: (obj) => dispatch(actions.uploadImage(obj))
        // getProjectsByWorkspaceId: (idWorkspace) => dispatch(actions.getProjectsByWorkspaceId(idWorkspace))
    }


}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UploadImage))
