import { React, useState, useRef } from "react";
import { Alert } from "reactstrap";
import { Form, Button, CloseButton } from 'react-bootstrap'
import ReactCrop, {
       centerCrop,
       convertToPixelCrop,
       makeAspectCrop } from "react-image-crop";
import setPfpPreview from './setCanvasPreview.js'
import './PfpCropper.css'
         
const ASPECT_RATIO = 1;
const MIN_DIMENSION = 150;

const PfpCropper = ({ toggleModal, updatePFP }) => {
    const imgRef = useRef(null);
    const previewCanvasRef = useRef(null);
    const [imgSrc, setImgSrc] = useState('');
    const [crop, setCrop] = useState();
    const [error, setError] = useState('');

    const onSelectFile = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
    
        const reader = new FileReader();
        reader.addEventListener('load', () => {
            const imageElement = new Image();
            const imageUrl = reader.result?.toString() || '';
            imageElement.src = imageUrl;

            imageElement.addEventListener('load', (e) => {
                if (error) setError('');
                const { naturalWidth, naturalHeight } = e.currentTarget;
                if (naturalWidth < MIN_DIMENSION || naturalHeight < MIN_DIMENSION) {
                    setError('Image must be at least 150 x 150 pixels.');
                    return setImgSrc('');
                }
            });
            setImgSrc(imageUrl);
        });
        reader.readAsDataURL(file);
    };



    const onImageLoad = (e) => {
        const { width, height } = e.currentTarget;
        const cropWidthInPercent = (MIN_DIMENSION / width) * 100;
    
        const crop = makeAspectCrop(
            {
                unit: "%",
                width: cropWidthInPercent,
            },
            ASPECT_RATIO,
            width,
            height
        );
        const centeredCrop = centerCrop(crop, width, height);
        setCrop(centeredCrop);
    };

    return (
        <>
            {imgSrc === '' ? (
                <>
                    <Form className='col-11 pe-0'>
                        <Form.Control 
                            type='file' 
                            name='pfp-input'
                            accept='image/*'
                            onChange={ onSelectFile }
                        />
                    </Form>
                    <CloseButton className='col-1 m-auto' onClick={ toggleModal } />
                </>
            ) : (
                <>
                    <div className='crop-container d-flex justify-content-center'>
                        <ReactCrop
                            className='react-crop'
                            crop={ crop }
                            onChange={( pixelCrop, percentCrop ) => setCrop(percentCrop)}
                            circularCrop
                            keepSelection
                            aspect={ ASPECT_RATIO }
                            minWidth={ MIN_DIMENSION }
                            >
                            <img
                                className='img-crop'
                                ref={ imgRef }
                                src={ imgSrc }
                                alt='Upload'
                                style={{ maxHeight: '70vh' }}
                                onLoad={ onImageLoad }
                            />
                        </ReactCrop>
                    </div>
                    <div className='col-12 mt-2 text-center'>
                        <Button
                            id='crop-btn'
                            className='col-3 mx-auto border-0'
                            size='sm'
                            onClick={() => {
                                setPfpPreview(
                                    imgRef.current,
                                    previewCanvasRef.current,
                                    convertToPixelCrop(
                                        crop,
                                        imgRef.current.width,
                                        imgRef.current.height
                                    )
                                );
                                const dataUrl = previewCanvasRef.current.toDataURL();
                                updatePFP(dataUrl);
                                toggleModal();
                            }}
                        >Crop Image</Button>
                        <Button
                            id='new-btn'
                            className='col-3 mx-3 border-0'
                            size='sm'
                            onClick={ () => setImgSrc('') }
                        >New Image</Button>
                        <Button
                            id='cancel-btn'
                            className='col-3 mx-auto border-0'
                            size='sm'
                            onClick={ toggleModal }
                        >Cancel</Button>
                    </div>
                </>
            )}

            {error && (
                <div className='flex-shrink mt-3'>
                    <Alert color="danger" className='text-center m-0 p-1'>
                        { error }
                    </Alert>
                </div>
            )}

            {crop && (
                <canvas
                    ref={ previewCanvasRef }
                    className='canvas'
                    style={{
                        display: 'none',
                        border: '1px solid black',
                        objectFit: 'contain',
                        width: 150,
                        height: 150,
                    }}
                />
            )}
        </>
    )

};
  
export default PfpCropper