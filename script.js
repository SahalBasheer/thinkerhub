

const buttons = document.querySelectorAll('.selection button');
const showIcon = document.querySelector('.show i');
const computerShowIcon = document.querySelector('.computer i');
const randomClasses = ["fas fa-hand-rock", "fas fa-hand-paper","fas fa-hand-scissors"];

const text = document.getElementById('demo');

const game = () =>{
    buttons.forEach(btn =>{
        btn.addEventListener('click',(e)=>{
       
           let clickedBtn = e.target.className;
           showIcon.className = clickedBtn;
           let randomNum = Math.floor(Math.random() * randomClasses.length);
           computerShowIcon.className = randomClasses[randomNum];
           
           if(showIcon.className === computerShowIcon.className){
               
               text.innerHTML = "It's a Tie ! ";
               text.style.color = 'orange';
          
           } 
        
           else if(showIcon.className === randomClasses[0] && computerShowIcon.className === randomClasses[2]){
             
               text.innerHTML = "It's a Win ! ";
               text.style.color = 'rgb(1, 146, 1)';
            
           }else if(showIcon.className === randomClasses[0] && computerShowIcon.className === randomClasses[1]){
              
               text.innerHTML = "You Loosed ! ";
               text.style.color = 'red';
          
           }else if(showIcon.className === randomClasses[1] && computerShowIcon.className === randomClasses[2]){
           
               text.innerHTML = "You Loosed ! ";
               text.style.color = 'red';
              
           }else if(showIcon.className === randomClasses[1] && computerShowIcon.className === randomClasses[0]){
            
               text.innerHTML = "It's a Win ! ";
               text.style.color = 'rgb(1, 146, 1)';
           
           }else if(showIcon.className === randomClasses[2] && computerShowIcon.className === randomClasses[0]){
              
               text.innerHTML = "You Loosed ! ";
               text.style.color = 'red';
             
           }else if(showIcon.className === randomClasses[2] && computerShowIcon.className === randomClasses[1]){
               
               text.innerHTML = "It's a Win ! ";
               text.style.color = 'rgb(1, 146, 1)';
              
           }
        });
    });
}

game();
