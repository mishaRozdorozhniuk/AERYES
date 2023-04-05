import React from 'react';

const FaceDetector = ({boundingBox}) => {
    return (
        <>
            {boundingBox.map((box, index) => (
                <div
                    key={`${index + 1}`}
                    style={{
                        border: '5px solid yellow',
                        borderRadius: '10px',
                        opacity: '0.8',
                        position: 'absolute',
                        top: `${box.yCenter * 100}%`,
                        left: `${box.xCenter * 100}%`,
                        width: `${box.width * 100}%`,
                        height: `${box.height * 100}%`,
                        zIndex: 1,
                    }}
                />
            ))}
        </>
    );
};

export default FaceDetector;