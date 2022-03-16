import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from '../../redux/actions/action';
import { Button } from 'react-bootstrap';
import ImageUploading from "react-images-uploading";
import { ColorExtractor } from "react-color-extractor";
import SelectCategory from '../selectCategory/selectCategory';


function UploadImage(props) {


    const [category, setCategory] = useState()
    const [images, setImages] = useState([])
    const maxNumber = 69;
    const [colorsImage, setColorsImage] = useState([])
    const renderSwatches = (index) => {
        if (images[index].colors) {
            return images[index].colors.map((color, id) => {
                return (
                    <div
                        key={id}
                        style={{
                            backgroundColor: color,
                            width: 20,
                            height: 20
                        }}
                    />
                );
            });
        }
        else
            return colorsImage.map((color, id) => {
                return (
                    <div
                        key={id}
                        style={{
                            backgroundColor: color,
                            width: 20,
                            height: 20
                        }}
                    />
                );
            });
    };
    const onChange = (imageList, addUpdateIndex) => {
        setImages(imageList);
    };

    function uploadImage() {
        if (category)
            props.uploadImage({ 'images': images, 'companyId': props.company._id, categoryId: category })
        else
            alert("Choose category")
    }
    function setMyColors(colors, index) {
        setColorsImage(colors)
        images[index].colors = colors
    }
    return (
        <>
            <h1>Hi to {props.company.name}</h1>
            <div class=''>
                <h4>Here you can select a category of the products you want to upload</h4>
                <h4> Select an image and then we will find all the colors that are in the image</h4>
                <h4> Then click Save </h4>
            </div>

            <label>Select category</label>
            <SelectCategory category={(c) => setCategory(c)} />

            <Button variant="outline-warning"
                onClick={() => uploadImage()}>
                Save</Button >

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
                            <Button
                                style={isDragging ? { color: "red" } : undefined}
                                onClick={onImageUpload}
                                {...dragProps}
                            >
                                Choose image
                            </Button>
                            &nbsp;
                            <Button onClick={onImageRemoveAll}>Remove all images</Button>
                            {imageList.map((image, index) => (
                                <div key={index} className="image-item">

                                    <ColorExtractor getColors={colors => setMyColors(colors, index)} >
                                        <img src={image["data_url"]} alt="" width="100" />
                                    </ColorExtractor>
                                    <div
                                        style={{
                                            marginTop: 20,
                                            display: 'flex',
                                            justifyContent: 'center',

                                        }}
                                    >
                                        {renderSwatches(index)}
                                    </div>
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
        company: state.company_reduser.company,
        categories: state.product_reduser.categories
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        uploadImage: (obj) => dispatch(actions.uploadImage(obj)),
        getCategories: () => dispatch(actions.getCategories()),

        // getProjectsByWorkspaceId: (idWorkspace) => dispatch(actions.getProjectsByWorkspaceId(idWorkspace))
    }


}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UploadImage))
