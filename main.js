function startClassification() {
    navigation.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.songClassifier('https://teachablemachine.withgoogle.com/models/n_8oaoG2h/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResult);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random()*255)+1;
        random_number_g = Math.floor(Math.random()*255)+1;
        random_number_b = Math.floor(Math.random()*255)+1;
        document.getElementById("result_label").innerHTML = 'I hear:' + results[0].label;
        document.getElementById("result_precision").innerHTML = 'Precision:' + (results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color = "rgb('random_number_r', 'random_number_g', 'random_number_b')";
        document.getElementById("result_precision").style.color = "rgb('random_number_r', 'random_number_g', 'random_number_b')";

        img = document.getElementById("bark");
        img1 = document.getElementById("meow");

        if(results[0].label == "Bark") {
            img.src = "bark.gif";
            img1.src = "meow.png";
        } else if(results[0].label == "Meow") {
            img.src = "bark.png";
            img1.src = "meow.gif";
        } 
    }
}
