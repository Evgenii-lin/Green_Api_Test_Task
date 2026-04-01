const apiUrl = "https://7103.api.greenapi.com"; 
const mediaUrl =  "https://7103.api.greenapi.com"; 


var answer = [];


const mainInformation = document.querySelector("#mainInformation");
const getSettings = document.querySelector("#getSettings");
const getStateInstance = document.querySelector("#getStateInstance");
const sendMessage = document.querySelector("#sendMessage");
const sendFileByUrl = document.querySelector("#sendFileByUrl");

getSettings.addEventListener("click", getSettingsEvent);
function getSettingsEvent() {
   let idInstance = document.querySelector('input[name="idInstance"]').value;
   let ApiTokenInstance = document.querySelector('input[name="ApiTokenInstance"]').value;
   const url = "https://7103.api.greenapi.com/waInstance" + idInstance + "/getSettings/" + ApiTokenInstance;

    fetch(url)
    .then(response => response.json())
    .then(data => {
      answer = JSON.stringify(data);
      $('#answerMessage').val(answer);
    })
    .catch(error => console.error(error));
}


getStateInstance.addEventListener("click", getStateInstanceEvent);
function getStateInstanceEvent() {
    let idInstance = document.querySelector('input[name="idInstance"]').value;   
    let ApiTokenInstance = document.querySelector('input[name="ApiTokenInstance"]').value;
    const url = "https://7103.api.greenapi.com/waInstance" + idInstance + "/getStateInstance/" + ApiTokenInstance;
    fetch(url)
    .then(response => response.json())
    .then(data => {
      answer = JSON.stringify(data);
      $('#answerMessage').val(answer);
    })
    .catch(error => console.error(error));
}



sendMessage.addEventListener("click", sendMessageEvent);
async function sendMessageEvent() {
    let idInstance = document.querySelector('input[name="idInstance"]').value;              
    let ApiTokenInstance = document.querySelector('input[name="ApiTokenInstance"]').value;  
    const url = "https://7103.api.greenapi.com/waInstance" + idInstance + "/sendMessage/" + ApiTokenInstance;
    numberForMessage = document.querySelector('input[name="numberForMessage"]').value;    
    let textMessage = document.querySelector('textarea[name="textMessage"]').value;          
    const data = {}
    data["chatId"] = numberForMessage + "@c.us";
    data["message"] = textMessage;
    
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data), 
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      $('#answerMessage').val(JSON.stringify(json));
    } catch (error) {
      $('#answerMessage').val(JSON.stringify(json));
    } 
}



sendFileByUrl.addEventListener("click", sendFileByUrlEvent);
async function sendFileByUrlEvent() {
    let idInstance = document.querySelector('input[name="idInstance"]').value;             
    let ApiTokenInstance = document.querySelector('input[name="ApiTokenInstance"]').value; 
    const url = "https://7103.api.greenapi.com/waInstance" + idInstance + "/sendFileByUrl/" + ApiTokenInstance;
    let numberFileByUrl = document.querySelector('input[name="numberFileByUrl"]').value;   
    let fileByUrl = document.querySelector('input[name="fileByUrl"]').value;               
    nameFileByUrl = document.querySelector('input[name="fileByUrl"]').value;           
    nameFileByUrl = nameFileByUrl.split('').reverse().join('');
    nameFileByUrl =  nameFileByUrl.slice(0, (nameFileByUrl.indexOf("/")));
    nameFileByUrl = nameFileByUrl.split('').reverse().join('');

    const data = {}
    data["chatId"] = numberFileByUrl + "@c.us";
    data["urlFile"] = fileByUrl;
    data["fileName"] = nameFileByUrl;


    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data), 
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      $('#answerMessage').val(JSON.stringify(json));
    } catch (error) {
      $('#answerMessage').val(JSON.stringify(json));
    } 
}
