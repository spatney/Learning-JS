/**
 * Conditional Control Flow
 */

debugger;

if(true){
    
}else{
    
}

if(false){
    
}
else{
    
}

function interns(person) {
    switch(person){
        case "Samantha" : console.log("Regular");
        break;
        case "Caroline":
        case "Maitreyee":
        case "Ananya":
        console.log("Explorer");
        break;
        default:
        console.log("Not someone I care about."); 
    }
}

interns("Samantha");
interns("Caroline");
interns("Maitreyee");
interns("Ananya");
interns("A Google Intern");