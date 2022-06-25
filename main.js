Webcam.set({
    width:390,
    height:300,
    image_format:'png',
    png_quality:90
});
camara=document.getElementById("camara");

Webcam.attach('#camara');

function snap (){

    Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    });
}
console.log('ml5 version:',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ovAP-0Vdx/model.json',modelLoaded);

function modelLoaded(){
    console.log ("model loaded");
}

function check(){

    img=document.getElementById("captured_image");
    classifier.classify(img,gotResult);
}
function gotResult(error,results){

    if (error){
        console.log(error);
    }
else{
    console.log(results);
    document.getElementById("obj").innerHTML=results[0].label;
    document.getElementById("acc").innerHTML=(results[0].confidence*100).toFixed(2)+"%";
}
}