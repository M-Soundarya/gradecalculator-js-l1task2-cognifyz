
let containerr = document.querySelector(".containerr");
let timeNow = new Date().getHours();
console.log(timeNow);
let greeting =
  timeNow >= 5 && timeNow < 12   
    ? "Good Morning" 
    : timeNow >= 12 && timeNow < 17
    ? "Good Afternoon"
    : timeNow >= 17 && timeNow < 20
    ? "Good evening"
    : "Good Night";

    let message =
    timeNow >= 5 && timeNow < 12   
      ? "Start your day with the good news of your hard-earned grades."
      : timeNow >= 12 && timeNow < 17
      ? "Your hard work is paying off. See your results."
      : timeNow >= 17 && timeNow < 20
      ? "Relax and review your progress."
      : "End your day with a look at your well-deserved grades.";


console.log(greeting);
containerr.innerHTML = `<h4>${greeting}</h4><h5>${message}</h5>`;

function show_result(){
    let T=document.querySelector("#T").value;
    let E=document.querySelector("#E").value;
    let A=document.querySelector("#A").value;
    let Ec=document.querySelector("#Ec").value;
    let C=document.querySelector("#C").value;
    let CO=document.querySelector("#CO").value;

    let to = parseFloat(T) + parseFloat(E) + parseFloat(A) + parseFloat(Ec) + parseFloat(C) + parseFloat(CO);
    let per = (to*100)/600;

    let resultButton = document.getElementById("resultButton");

    if (per > 30) {
        document.querySelector(".result h2").innerHTML = "You are pass";
        resultButton.style.backgroundColor = "#a2c11c";
    } else {
        document.querySelector(".result h2").innerHTML = "You are fail";
        resultButton.style.backgroundColor = "#e46161";
    }


    if(per >= 90){
        document.querySelector(".gra").innerHTML = "A+";
    }else if(per >= 80){
        document.querySelector(".gra").innerHTML = "A";
    }else if(per >= 70){
        document.querySelector(".gra").innerHTML = "B+";
    }else if(per >= 60){
        document.querySelector(".gra").innerHTML = "B";
    }else if(per >= 50){
        document.querySelector(".gra").innerHTML = "C+";
    }else if(per >= 40){
        document.querySelector(".gra").innerHTML = "C";
    }else if(per >= 35){
        document.querySelector(".gra").innerHTML = "D+";
    }else if(per >= 30){
        document.querySelector(".gra").innerHTML = "D";
    }else{
        document.querySelector(".gra").innerHTML = "You are fail";
    }

    document.querySelector(".to").innerHTML = to;
    document.querySelector(".per").innerHTML = per;
    document.querySelector(".gra").innerHTML = grade;

} 