
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

const form = document.getElementById("eventForm");

const search = document.getElementById("search");


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

function renderEvents(data=events){

eventContainer.innerHTML="";


data.forEach(event=>{


let card=
document.createElement("div");


card.className=
"bg-gray-400 rounded-xl p-5 shadow";


card.innerHTML=`

<h2 class="text-xl font-bold">
${event.title}
</h2>

<p>
Category:
${event.category}
</p>

<p>
Seats:
${event.seats}
</p>

<p>
Registered:
${event.registered}
</p>

<p>
Remaining:
${event.seats-event.registered}
</p>

<div class="mt-4 flex gap-2">

<button
onclick="register(${event.id})"
class="bg-blue-950 text-white px-3 py-2 rounded"
>

Register

</button>


<button
onclick="cancelReg(${event.id})"
class="bg-red-900 text-white px-3 py-2 rounded"
>

Cancel

</button>

</div>

`;

eventContainer.appendChild(card);

});

updateStats();

}



function register(id){

let found=
events.find(
event=>event.id===id
);


if(found.registered<found.seats){

found.registered++;

saveData();

renderEvents();

}

else{

alert(
"No seats available"
);

}

}



function cancelReg(id){

let found=
events.find(
event=>event.id===id
);


if(found.registered>0){

found.registered--;

saveData();

renderEvents();
}

else{

alert(
"No registrations left"
);

}

}
form.addEventListener("submit",function(e){
e.preventDefault();
let title=
document.getElementById(
"title"
).value.trim();
let category=
document.getElementById(
"category"
).value.trim();

//validating data input
let seats=
document.getElementById(
"seats"
).value;

if(
title==="" ||
category==="" ||
seats<=0
){

alert(
"Please enter valid data"
);

return;

}

// Creating new event object

let newEvent={

id:Date.now(),

title:title,

category:category,

seats:Number(seats),

registered:0

};

// adding new event 

events.push(newEvent);
saveData();

renderEvents();
form.reset();

});

// search
search.addEventListener(
"input",
function(){


let value=
search.value.toLowerCase();

let filtered=
events.filter(
event=>

event.title
.toLowerCase()
.includes(value)

);

renderEvents(filtered);

}

);
renderEvents();