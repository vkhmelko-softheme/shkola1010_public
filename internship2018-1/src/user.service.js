import { user } from './user.js';

export function showMessage() {
    alert('Hello ' + user.name);
}

export function confirmAge() {
    var age = prompt("What's your age?")
    
    if (age > 17) {
        showMessage();
    } else {
        location.href = "https://www.youtube.com/watch?v=OK03o3BHafk"
    }
}