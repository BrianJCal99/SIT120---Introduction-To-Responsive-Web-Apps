var marks, outputText, mLength, i;
marks = [
    {
        subject: 'Mathematics',
        score: 75
    },
    {
        subject: 'Science',
        score: 80
    },
    {
        subject: 'IT',
        score: 85
    },
    {
        subject: 'History',
        score: 90
    },
];

mLength = marks.length;

outputText = "<ul>";
            
totalScore = 0;

for (i = 0; i < mLength; i++) 
{
    outputText += "<li>" + marks[i].subject + " - " + marks[i].score + "</li>";
    totalScore += marks[i].score
    avg = totalScore/mLength
}

outputText += "</ul>";

document.getElementById("subject-score").innerHTML = outputText;
document.getElementById("total").innerHTML = "Total Score - " + totalScore;
document.getElementById("average").innerHTML = "Average Score - " + avg;