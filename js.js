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