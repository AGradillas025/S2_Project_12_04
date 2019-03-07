"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 4

   Author: Anthony S,A Gradillas
   Date:   3.5.19
   
   Filename: vw_results.js
   
   Functions:
   
   The calcSum() function is a callback function used to
   calculte the total value from items within an array
   
   The calcPercent(value, sum) function calculates the percentage given
   a value and a sum
   
   The createBar(partyType, percent) function writes a different
   table data table based on the candidates party affilication.
   
      
*/

// The variable named reportHTML was declared containing the following HTML code that was given from the textbook, where the raceTitle variable had the value title
var reportHTML = "<h1>" + raceTitle + "</h1>";

// A for loop was created through the contents of the race array using the i as the counter variable
for (var i = 0; i <= 7; i++) {
    // The variable named totalVotes will store the total votes cast in each race, with its initial value at 0
    var totalVotes = 0;
    // The total vost casted in the current race will be calculated by applying the forEach method to the ith index of the votes array using the calcSum function as the callback function, which the calcSum function is used to calculate the total value from items within an array
    votes[i].forEach(calcSum);
    // The following HTML text was aded to the value of the reportHTML variable to write the name of the current race in the program loop, where race was the ith index of the race array
    reportHTML += "<table><caption>" + race[i] + "</caption><tr><th>Candidate</th><th>Votes</th></tr>";
    // The candidateRows function was called using the counter variable i and the totalVotes variables as the parameter value
    reportHTML += candidateRows(i, totalVotes);
    // The text "</table>" was added to the value of the reportHTML variable
    reportHTML += "</table>";
}

// The variable reportHTML was written into the innerHTML of the first and only section element in the document using the getELementsByTagName to seleect the section element
document.getElementsByTagName("section")[0].innerHTML = reportHTML;

// The candidateRows funtion was created to write individual table rows for each candidate, showing the candidate's name, party affiliation, vote total, and vote percentage, while having the perameters as raceNum and totalVotes
function candidateRows(raceNum, totalVotes) {
    // The local variable rowHTML was declared, which will contain the HTML code for the table row, with the initial value being an emty string
    var rowHTML = "";
    // A for loop was created in which the counter variable j goes from 0 to 2 in the steps of 1 unit
    for (var j = 0; j <= 2; j++) {
        // A variable name dcandidateName was declared to retrieve the name of the current candidates in the current race
        var candidateName = candidate[raceNum][j];
        // The variable candidateParty was declared to retrieve the party affiliation of the current candidate that is taking part in the current race from the multidimensional party array
        var candidateParty = party[raceNum][j];
        // Variable candidateVotes was declared to retrieve the total votes casted from the current candidate from the current race from the multidimensional votes array
        var candidateVotes = votes[raceNum][j];
        // A variable named candidatePercent was declared and equal to the value returned by the calcPercent function, calculating the percentage of votes recieved by the current candidate in the loop and the candidateVotes was the first perameter and the totalVotes as the second perameter
        var candidatePercent = calcPercent(candidateVotes, totalVotes);
        //
        rowHTML = "<tr><td>" + candidateName + "(" + candidateParty + ")</td><td>" + candidateVotes.toLocaleString() + "(" + candidatePercent.toFixed(1) + ")</td></tr>";
    }
}



/* Callback Function to calculate an array sum */
function calcSum(value) {
    totalVotes += value;
}

/* Function to calculate a percentage */
function calcPercent(value, sum) {
    return (100 * value / sum);
}