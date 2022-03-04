objectDetector="";
img="";
objects=[];
Status="";
function preload(){
    img=loadImage('bedroom.jfif');
    }
    function setup() {
        canvas=createCanvas(380,380);
        canvas.center();
        objectDetector=ml5.objectDetector('cocossd', modelLoaded)
        document.getElementById("Status").innerHTML="Status : Detecting Objects";
    }
    function modelLoaded(){
        console.log("Model Loaded!")
        Status=true;
        objectDetector.detect(img, gotResult);
    }
    function gotResult(error, results){
        if(error) {
            console.log(error);
        }
        console.log(results);
        objects=results;
    }
    
    