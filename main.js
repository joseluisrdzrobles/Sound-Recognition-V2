function startClassification() {
    navigation.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.songClassifier('https://teachablemachine.withgoogle.com/models/n_8oaoG2h/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResult);
}

