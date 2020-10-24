const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// prompt to select media stream, pass to video element, then play

async function selectmediaStream(){
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (err){
        console.log(err)
    }
}

button.addEventListener('click', async () => {
    // disable the button
    button.disabled = true;
    // start picture in picture
    await videoElement.requestPictureInPicture();
    //reset button
    button.disabled = false;
});


// On Load
selectmediaStream();