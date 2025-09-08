function chatbot(input) {
    let output = "";
    input = input.toLowerCase();

    switch (true) {
        case /hello|hi|hey/.test(input):
            output = "Hello! I'm your Travel_Mate assistant. I'm here to help you navigate the app safely. How can I help you today? Please choose one of the options below: <br><br><b>1️⃣ Sign-In / Sign-Up issues</b><br><b>2️⃣ Choosing a destination</b><br><b>3️⃣ Location and safety features</b><br><b>4️⃣ Other assistance</b>";
            break;

        case /1|sign|in|up/.test(input):
            output = "I can help with sign-in and sign-up issues. If you are a new user, please use the <b>Sign Up</b> option. If you've already registered, use the <b>Sign In</b> option and make sure your email and password are correct. If you continue to have issues, please contact our support team.";
            break;

        case /2|place|destination|go/.test(input):
            output = "I can help you with finding a destination. Simply use the search bar within the app and ensure your spelling is correct. Once you've selected a place, you can proceed to the next stage of your trip planning.";
            break;

        case /3|location|secure|safe/.test(input):
            output = "Our location features are designed for your safety. When you enable 'Track My Location', you enter our secure zone. We'll immediately alert you if you deviate from your planned route. You can also explore various safety features and find details about secure locations within the app.";
            break;

        case /4|other|help|contact/.test(input):
            output = "Our support team will contact you shortly to assist with your request. Please have your details ready. Thank you for your patience!";
            break;

        default:
            output = "I'm sorry, I don't understand that. Please select one of the numbered options or try rephrasing your question. <br><br><b>1️⃣ Sign-In / Sign-Up issues</b><br><b>2️⃣ Choosing a destination</b><br><b>3️⃣ Location and safety features</b><br><b>4️⃣ Other assistance</b>";
    }

    return output;
}

 
function displayUserMessage(message) {
    let chat = document.getElementById("chat");
    let userMessage = document.createElement("div");
    userMessage.classList.add("message");
    userMessage.classList.add("user");
    let userAvatar = document.createElement("div");
    userAvatar.classList.add("avatar");
    let userText = document.createElement("div");
    userText.classList.add("text");
    userText.innerHTML = message;
    userMessage.appendChild(userText);
    userMessage.appendChild(userAvatar);
    chat.appendChild(userMessage);
    chat.scrollTop = chat.scrollHeight;
}
 
function displayBotMessage(message) {
    let chat = document.getElementById("chat");
    let botMessage = document.createElement("div");
    botMessage.classList.add("message");
    botMessage.classList.add("bot");
    let botAvatar = document.createElement("div");
    botAvatar.classList.add("avatar");
    let botText = document.createElement("div");
    botText.classList.add("text");
    botText.innerHTML = message;
    botMessage.appendChild(botAvatar);
    botMessage.appendChild(botText);
    chat.appendChild(botMessage);
    chat.scrollTop = chat.scrollHeight;
}
 
function sendMessage() {
    let input = document.getElementById("input").value;
    if (input.trim()) {  
        displayUserMessage(input);
        let output = chatbot(input);
        setTimeout(function() {
            displayBotMessage(output);
        }, 500);  
        document.getElementById("input").value = "";
    }
}

document.getElementById("button").addEventListener("click", sendMessage);
 
document.getElementById("input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});
 
window.onload = function() {
    setTimeout(function() {
        displayBotMessage("Hello! I'm your Travel_Mate assistant. How can I help you today? Please choose one of the options below: <br><br><b>1️⃣ Sign-In / Sign-Up issues</b><br><b>2️⃣ Choosing a destination</b><br><b>3️⃣ Location and safety features</b><br><b>4️⃣ Other assistance</b>");
    }, 500);  
};