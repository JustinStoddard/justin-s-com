const ArObject = {
  box: 
  `<div style='margin: 0px;'>
    <a-scene embedded arjs='sourceType: webcam; debugUIEnabled: false;'>

    <a-marker preset='hiro'>
        <a-box position='0 0.5 0' color="yellow"></a-box>
    </a-marker>

    <a-entity camera></a-entity>
    </a-scene>
  </div>`
}

export default ArObject;
