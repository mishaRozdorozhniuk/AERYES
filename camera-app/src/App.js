import {useState} from 'react'
import Webcam from 'react-webcam';
import { CameraOptions, useFaceDetection } from 'react-use-face-detection';
import FaceDetection from '@mediapipe/face_detection';
import { Camera } from '@mediapipe/camera_utils';
import Backdrop from "./components/Backdrop/Backdrop";
import VideoButtons from "./components/VideoButtons/VideoButtons";
import Modal from "./components/Modal/Modal";
import FaceDetector from "./components/FaceDetector/FaceDetector";

const App = () => {
    const [showModal, setShowModal] = useState(false)
    const [photoCounter, setPhotoCounter] = useState(0)

    const { webcamRef, boundingBox, detected } = useFaceDetection({
        faceDetectionOptions: {
            model: 'short',
        },
        faceDetection: new FaceDetection.FaceDetection({
            locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/face_detection/${file}`,
        }),
        camera: ({ mediaSrc, onFrame }: CameraOptions) =>
            new Camera(mediaSrc, {
                onFrame,
                width: 300,
                height: 400,
            }),
    });

    const handleShowModal = () => {
        setShowModal(!showModal)
    }

    const handlePhotoCounter = () => {
        setPhotoCounter(prev => prev + 1)
        if(photoCounter === 3) {
            setPhotoCounter(0)
        }
    }

    return (
        <main className="wrapper">
            <div style={{ width: 376, height: 500, position: 'relative' }}>
                <FaceDetector boundingBox={boundingBox} />
                <Backdrop show={showModal} />
                <Webcam
                    ref={webcamRef}
                    forceScreenshotSourceSize
                    style={{
                        height: 500,
                        width: 376,
                        position: 'absolute',
                    }}
                />
                {detected && !showModal && <p className="video-text">"Who is this cutest kitty?"</p>}
                {showModal && <Modal handleShowModal={handleShowModal} />}
            </div>
           <VideoButtons
               photoCounter={photoCounter}
               handlePhotoCounter={handlePhotoCounter}
               handleShowModal={handleShowModal} />
        </main>
    );
};

export default App;