import React from 'react';
import AddPhoto from "../../icons/AddPhoto.svg";
import MakePhoto from "../../icons/MakePhoto.svg";
import Info from "../../icons/Info.svg";
import Upload from "../../icons/Upload.svg";
import './VideoButtons.css'

const VideoButtons = ({photoCounter, handlePhotoCounter, handleShowModal}) => {
    return (
        <section className="buttons-wrapper">
            <div className="add-photo-icon" >
                <img src={AddPhoto} alt="add-photo-img"/>
            </div>
            <div className="make-photo-counter">
                <span className="photos-counter">{photoCounter}/3</span>
                <div onClick={handlePhotoCounter} className="make-photo-icon">
                    <img src={MakePhoto} alt="make-photo-img" />
                </div>
            </div>
            <div className="info-button" onClick={handleShowModal}>
                <img src={Info} alt="info-img" />
            </div>
            <div className="upload-icon">
                <img src={Upload} alt="upload-img" />
            </div>
        </section>
    );
};

export default VideoButtons;