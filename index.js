


const ansA = document.querySelector("#ques1");
ansA.addEventListener('click',() => {
    const ans1 = document.getElementById("ans1");
    if (ans1.style.display === 'none'){
        ans1.style.display = "block";
        document.getElementById("thin-x1").style.transform ='translateY(-50%) rotate(0deg)';
    }else{
        ans1.style.display = "none";
        document.getElementById("thin-x1").style.transform ='translateY(-50%) rotate(-45deg)';
    }
    
});

// const ansB = document.querySelector("#ques2");
// ansB.addEventListener('click',() => {
//     const ans2 = document.getElementById("ans2");
//     if (ans2.style.display === 'none'){
//     ans2.style.display = "block";
//     document.getElementById("thin-x2").style.transform ='translateY(-50%) rotate(0deg)';
//     }else{
//         ans2.style.display = "none";
//     document.getElementById("thin-x2").style.transform ='translateY(-50%) rotate(-45deg)';
//     }
// });


const quesB = document.querySelector("#ques2");
quesB.addEventListener('click', () => {
    const ansB = document.getElementById("ans2");
    if(ansB.style.display === "none"){
        ansB.style.display = "block";
        document.getElementById("thin-x2").style.transform = 
        "translatey(-50%) rotate(0deg) "
    }else{
        ansB.style.display = "none";
        document.getElementById("thin-x2").style.transform = 
        "translatey(-50%) rotate(45deg) "
    }
});



const ansC = document.querySelector("#ques3");
ansC.addEventListener('click',() => {
    const ans3 = document.getElementById("ans3");
    if (ans3.style.display === 'none'){
    ans3.style.display = "block";
    document.getElementById("thin-x3").style.transform ='translateY(-50%) rotate(0deg)';
    }else{
        ans3.style.display = "none";
    document.getElementById("thin-x3").style.transform ='translateY(-50%) rotate(-45deg)';
     
    }

});

const ansD = document.querySelector("#ques4");
ansD.addEventListener('click',() => {
    const ans4 = document.getElementById("ans4");
    if (ans4.style.display === 'none'){
    ans4.style.display = "block";
    document.getElementById("thin-x4").style.transform ='translateY(-50%) rotate(0deg)';
    }else{
        ans4.style.display = "none";
    document.getElementById("thin-x4").style.transform ='translateY(-50%) rotate(-45deg)';
    
    }
});

const ansE = document.querySelector("#ques5");
ansE.addEventListener('click',() => {
    const ans5 = document.getElementById("ans5");
    if (ans5.style.display === 'none'){
    ans5.style.display = "block";
    document.getElementById("thin-x5").style.transform ='translateY(-50%) rotate(0deg)';
    }else{
        ans5.style.display = "none";
    document.getElementById("thin-x5").style.transform ='translateY(-50%) rotate(-45deg)';
    
    }
});

const ansF = document.querySelector("#ques6");
ansF.addEventListener('click',() => {
    const ans6 = document.getElementById("ans6");
    if (ans6.style.display === 'none'){
    ans6.style.display = "block";
    document.getElementById("thin-x6").style.transform ='translateY(-50%) rotate(0deg)';
    }else{
        ans6.style.display = "none";
    document.getElementById("thin-x6").style.transform ='translateY(-50%) rotate(-45deg)';
    
    }
});
