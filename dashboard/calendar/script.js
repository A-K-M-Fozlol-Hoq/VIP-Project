let events = [
    {
      _id: "613701951353fcf5e5cc108a",
      type: "shortMeeting",
      title: "nninee",
      location: "nnine",
      people: "nnine",
      startTime: "2021-09-19T12:06",
      endTime: "2021-09-20T12:07",
      description: "nninennine nninennine",
      color: "#2A9D8F",
    },
    {
      _id: "613701951353fcf5e5cc108a",
      type: "longMeeting",
      title: "nnine",
      location: "nnine",
      people: "nnine",
      startTime: "2021-09-19T12:06",
      endTime: "2021-09-20T12:07",
      description: "nninenne",
      color: "#D58A1B",
    },
    {
      _id: "613701ac1353fcf5e5cc108b",
      type: "Unp",
      title: "ten",
      location: "ten",
      people: "ten",
      startTime: "2021-09-20T12:07",
      endTime: "2021-09-10T22:07",
      description: "tentententen",
      color: "#C33682",
    },
    {
      _id: "61399cd3a2113b5cf4485a8a",
      type: "shortMeeting",
      title: "demo tit",
      location: "fivetwo",
      people: "demo pep",
      startTime: "2021-09-21T11:34",
      endTime: "2021-09-21T11:34",
      description: "t6ygik",
      color: "#7433FF",
    },
    {
      _id: "613701951353fcf5e5cc108a",
      type: "shortMeeting",
      title: "nninee",
      location: "nnine",
      people: "nnine",
      startTime: "2021-09-19T12:06",
      endTime: "2021-09-20T12:07",
      description: "nninennine nninennine",
      color: "#2A9D8F",
    },
    {
      _id: "613701951353fcf5e5cc108a",
      type: "shortMeeting",
      title: "nninee",
      location: "nnine",
      people: "nnine",
      startTime: "2021-09-19T12:06",
      endTime: "2021-09-20T12:07",
      description: "nninennine nninennine",
      color: "#2A9D8F",
    },
    {
      _id: "613701951353fcf5e5cc108a",
      type: "shortMeeting",
      title: "fozlol",
      location: "fozlol",
      people: "fozlol",
      startTime: "2022-08-19T12:06",
      endTime: "2021-09-20T12:07",
      description: "nninennine nninennine",
      color: "#2A9D8F",
    },
  ]
const showEvents = document.getElementById("show-events");
events.sort((event1, event2) =>new Date(event2.startTime) - new Date(event1.startTime))
let sortedEvents = events;
let partialEventsArray = ([[sortedEvents[0]?.startTime. slice(0, 10)]])
let eventDate = (sortedEvents[0]?.startTime.slice(0, 10))
let totalDate = 1;
events=[];
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
if(sortedEvents.length > 0){
    for (let index = 0; index < sortedEvents.length; index++) {
        const thisEvent = sortedEvents[index];
        if(thisEvent.startTime.slice(0, 10) === eventDate){

            partialEventsArray.push([thisEvent]);
        }else{
            eventDate = thisEvent.startTime. slice(0, 10);
            totalDate = totalDate +1;
            
            events.push(partialEventsArray);
            partialEventsArray=[[thisEvent.startTime. slice(0, 10)]];
            partialEventsArray.push([thisEvent])
        }  
        if( (index+1) === sortedEvents.length ){
            events.push(partialEventsArray);
        }        
    }
}
const showEventsClass = document.createElement('div')
showEventsClass.classList.add('show-events')
showEvents.appendChild(showEventsClass)
{
    events.map((eventsOnTHisDay)=>{
        const div1 = document.createElement('div');
        showEventsClass.appendChild(div1);
        eventsOnTHisDay.map((singleEvent, index)=>{
            const div2 = document.createElement('div') 
            div1.appendChild(div2);
            if(index === 0) {
                const ifDiv3 = document.createElement('div')
                div2.appendChild(ifDiv3);
                ifDiv3.style.margin='20px 0 -5px 0';
                ifDiv3.innerHTML = `
                <p style="text-align:center;color:#fff;">${days[(new Date(singleEvent[0])).getDay()]}, ${(new Date(singleEvent[0])).getDate()} 
                ${' '}${months[(new Date(singleEvent[0])).getMonth()]} ${singleEvent[0]. slice(0, 4)}</p>
                `;
            }
            else{
                const singleEventClass = document.createElement('div');
                singleEventClass.classList.add('single-event');
                div2.appendChild(singleEventClass);
                // This class is to design of colorful side div
                const sideColor = document.createElement('div');
                sideColor.classList.add('side-color');
                sideColor.style.background = singleEvent[0].color;
                singleEventClass.appendChild(sideColor);
                // creatng event class
                const eventClass = document.createElement('div');
                eventClass.classList.add('event');
                singleEventClass.appendChild(eventClass);
                // This image to show image dynamically
                if(singleEvent[0].type === 'shortMeeting'){
                    const imgDiv = document.createElement('div');
                    imgDiv.style.background='#CCFFCC';
                    imgDiv.style.padding='0 55px 0 0';
                    imgDiv.style.borderRadius='5px';
                    imgDiv.classList.add('img-div')
                    imgDiv.innerHTML =`<img src="./images/short.png" alt="" />`;
                    eventClass.appendChild(imgDiv)
                }
                else if(singleEvent[0].type === 'longMeeting'){
                    const imgDiv = document.createElement('div');
                    imgDiv.style.background='#CCFFCC';
                    imgDiv.style.padding='0 55px 0 0';
                    imgDiv.style.borderRadius='5px';
                    imgDiv.classList.add('img-div')
                    imgDiv.innerHTML =`<img src="./images/long.png" alt="" />`;
                    eventClass.appendChild(imgDiv)
                }
                else  {
                    const imgDiv = document.createElement('div');
                    imgDiv.style.background='#CCFFCC';
                    imgDiv.style.padding='0 55px 0 0';
                    imgDiv.style.borderRadius='5px';
                    imgDiv.classList.add('img-div')
                    imgDiv.innerHTML =`<img src="./images/unp.png" alt="" />`;
                    eventClass.appendChild(imgDiv)
                }
                const descriptionClass = document.createElement('div');
                descriptionClass.classList.add('description');
                eventClass.appendChild(descriptionClass);
                descriptionClass.innerHTML=
                `
                <div class="title">
                    <p style="margin-bottom:5px; margin-top:0px;">${singleEvent[0].title.slice(0,10)}
                     </p>
                    <div class="img">
                        <img src="./images/blackWatch.PNG" alt="" />
                        <img src="./images/colorWatch.PNG" alt="" />
                    </div>
                </div>
                <div class="info" style="color:#fff">
                    <i>${singleEvent[0].location.slice(0,10)}:
                    ${(new Date(singleEvent[0]?.startTime)).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })} - 
                    ${(new Date(singleEvent[0]?.endTime)).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })} 
                    </i>
                </div>
                `
                
            }
        })
    }
    )
}
// showEvents.appendChild(showEventsClassingleEvent[0].type === 'viewing's)






// 
//                 <div className="event">
//                 {
//                     ?
//                     <img src={viewing} alt="" />
//                     :
//                     singleEvent[0].type === 'contract'?
//                     <img src={contract} alt="" />
//                     :
//                     singleEvent[0].type === 'maintenance'?
//                     <img src={maintenance} alt="" />
//                     :
//                     <img src={maintenance} alt="" />
//                 }
                                        
//                     <div className="description">
//                         <div className="title">
//                             <p style={{marginBottom:'5px', marginTop:'0px'}}>{singleEvent[0].title.slice(0,10)}
//                              {/* {singleEvent[0].title.length > 10 && <p>...</p>} */}
//                              </p>
//                             <div className="img">
//                                 <img src={peopleOne} alt="" />
//                                 <img src={peopleTwo} alt="" />
//                             </div>
//                         </div>
//                         <div className="info">
//                             <i>{singleEvent[0].location.slice(0,10)}:{' '} 
//                             {(new Date(singleEvent[0]?.startTime)).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })} - 
//                             {(new Date(singleEvent[0]?.endTime)).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })} 
//                             </i>
//                         </div>
//                     </div>
//                 </div>
// 