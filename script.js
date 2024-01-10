async function getData() {
    let response = await fetch('MinTheinKha.LatHtaukBayDin.json');
    let data = await response.json();
    console.log(data);
    let questions = data.questions;
    let numberList = data.numberList;
    let answers = data.answers;

    for (i = 0; i < questions.length; i++){
        document.querySelector(
          ".container"
        ).innerHTML += `<div class="question">
                <span>${questions[i].questionNo}</span>
                <p>${questions[i].questionName}</p>
            </div>`;
        
    }


    let chosenQuestion = document.querySelectorAll(".question");

    chosenQuestion.forEach((click, i) => {
        click.addEventListener('click', () => {
            let id = questions[i].questionNo;

            document.querySelector('h2').innerHTML = questions[i].questionName;
            document.querySelector(".container").style.display = "none";
            
            for (let i = 0; i < numberList.length; i++) {
                document.querySelector(
                  ".container2"
                ).innerHTML += `<div class="number">
                <span>${numberList[i]}</span>
            </div>`;
                
            }

            let chosenNumber = document.querySelectorAll(".number");
            chosenNumber.forEach((select, j) => {
                select.addEventListener('click', () => {
                    let number;

                    switch (numberList[j]) {
                      case "၁":
                        number = 1;
                        break;
                      case "၂":
                        number = 2;
                        break;
                      case "၃":
                        number = 3;
                        break;
                      case "၄":
                        number = 4;
                        break;
                      case "၅":
                        number = 5;
                        break;
                      case "၆":
                        number = 6;
                        break;
                      case "၇":
                        number = 7;
                        break;
                      case "၈":
                        number = 8;
                        break;
                      case "၉":
                        number = 9;
                        break;
                      case "၁၀":
                        number = 10;
                        break;
                    }

                    document.querySelector(".card").style.display = "flex";
                    document.querySelector(".container2").style.display = "none";
                    document.querySelector('h2').style.display = "none";
                    for (j = 0; j < answers.length; j++){
                        if (answers[j].questionNo == id && answers[j].answerNo == number) {
                            console.log(answers[j].answerResult);
                            document.querySelector(".card p").innerHTML = answers[j].answerResult;
                        }
                    }

                })
            })
        })

        
    })

    


};

getData()   

function home() {
    document.querySelector(".container").style.display = "flex";
    document.querySelector(".card").style.display = 'none';
}


