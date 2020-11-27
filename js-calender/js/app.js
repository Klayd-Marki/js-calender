const button = document.querySelector(".btn-start");
const calenderContainer =  document.querySelector(".container");

const calendarMonths = 12;

const openDoor = (path, event) => {
    event.target.parentNode.style.backgroundImage=`url("${path}")`;
    event.target.style.opacity="0";
    event.target.style.backgroundColor="#333";
}

const createCalender = () => {
    console.log("test");

    for(let i =0; i<calendarMonths; i++){
        const calendarDoor = document.createElement('div');
        calendarDoor.classList.add('image');  
        calendarDoor.style.gridArea= "door" +(i +1);

        const calendarDoorText = document.createElement('div');
        calendarDoorText.classList.add('text');

        calendarDoor.appendChild(calendarDoorText);
        calenderContainer.appendChild(calendarDoor);

        let picNum=i+1;
        let picPath=`./img/pic${picNum}.jpg`;
        console.log(picPath);

        calendarDoorText.addEventListener("click", openDoor.bind(null, picPath));

    }
}

button.addEventListener("click", createCalender);