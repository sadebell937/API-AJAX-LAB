const submissions = [
    { name: "jane", score: 95, date: new Date(2020, 01, 24), passed: true },
    { name: "joe", score: 77, date: new Date(2018, 5, 14), passed: true },
    { name: "jack", score: 59, date: new Date(2019, 07, 05), passed: false },
    { name: "jill", score: 88, date: new Date(2020, 04, 22), passed: false },
];



function addSubmission(array, newName, newScore, newDate) {
    // Make new object
    const newobj = {
        name: newName,
        score: newScore,
        date: newDate
    };

    // Setting pass/fail property
    if (score > 60) {
        newobj.passed = true;
    } else {
        newobj.passed = false;
    }


    // push into array
    array.push(newobj)

}

function deleteSubmissionByIndex(array, index) {
    array.splice(index, 1);
}


function deleteSubmissionByName(array, name) {
    // Find the index of the submission with the matching name 
    //(use the findIndex method)
    const hasName = (element) => element.name === name;
    const index = array.findIndex(hasName);


    // Remove the submission from the array at that index
    array.splice(index, 1);
}

function editSubmission(array, index, score) {
    // Update score of submission at given index
    array[index].score = score
    // Update pass/fail indicator of submission at given index
    if (score > 60) {
        array[index].passed = true;
    }else{
        array[index].passed = false;
    }

 function findSubmissionByName (array, name) {
     return array.find((element) => element.name === name)
 }
}

function findLowestScore(array) {
    var lowestScoreSoFar;

    array.forEach((element) => {
        const theScore = element.score;
        if (!lowestScoreSoFar) {
            lowestScoreSoFar = theScore;
        } else {
            if (theScore < lowestScoreSoFar){
                lowestScoreSoFar = theScore;
            }
        }
    });

    return lowestScoreSoFar;
}

function findAverageScore(array){
    // Find the total of all scores
    var total = 0;
    for (const element of array) {
        total += element.score;
    }
    
    // divide the total by the number of items in array
    var average = total / array.length
    return average;
 
}

function filterPassing(array) {
    return array.filter((element) => element.passed);
}

function filter90AndAbove(array) {
    return array.filter((element) => element.score > 90);
}