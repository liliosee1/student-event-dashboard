let events =
JSON.parse(localStorage.getItem("events")) || [

{
id:1,
title:"AI Bootcamp",
category:"Technology",
seats:30,
registered:10
},

{
id:2,
title:"Music Festival",
category:"Entertainment",
seats:40,
registered:15
}

];
const eventContainer =
document.getElementById("eventContainer");

const form =
document.getElementById("eventForm");

const search =
document.getElementById("search");



function saveData(){

localStorage.setItem(
"events",
JSON.stringify(events)
);

}

function updateStats(){

document.getElementById(
"totalEvents"
).textContent=events.length;



let totalRegistered=
events.reduce(
(sum,event)=>
sum+event.registered,
0
);


document.getElementById(
"registeredStudents"
).textContent=
totalRegistered;



let remaining=
events.reduce(
(sum,event)=>
sum+(event.seats-event.registered),
0
);


document.getElementById(
"remainingSeats"
).textContent=
remaining;

}
