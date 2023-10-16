
import { useRef, useState } from "react";
import Cropper from "react-easy-crop";

export default function CropImage({ imageSrc }) {
  const [ crop, setCrop ] = useState( { x: 0, y: 0 } );
  const [ zoom, setZoom ] = useState( 0.9 );
  const cropRef = useRef( null );

  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    console.log( croppedArea, croppedAreaPixels );
    // You can do something with the cropped area if needed
  };

  const handleCropChange = (crop) => {
    setCrop( crop );
  };

  const handleZoomChange = (zoom) => {
    setZoom( zoom );
  };

  const handleDownload = async() => {
    const croppedImage = await getCroppedImg( imageSrc, crop, zoom );
    // Do something with the cropped image, e.g., display it or upload it to the server
  };

  return (
    <div className="crop-container">
      <Cropper
        image={ imageSrc }
        crop={ crop }
        zoom={ zoom }
        aspect={ 1 }
        onCropChange={ handleCropChange }
        onCropComplete={ onCropComplete }
        onZoomChange={ handleZoomChange }
        cropShape="round" // Optional: set to "round" for a circular crop
        showGrid={ false } // Optional: set to true to display a grid over the image
        ref={ cropRef }
      />
      {/*<button onClick={handleDownload}>Crop and Download</button>*/ }
    </div>
  );
}