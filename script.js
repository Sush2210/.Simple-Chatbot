function sendMessage() {
    let input = document.getElementById("user-input");
    let message = input.value.trim();

    if (message === "") return;

    displayMessage(message, "user");

    let reply = getBotReply(message);
    
    setTimeout(() => {
        displayMessage(reply, "bot");
    }, 500);

    input.value = "";
}

function displayMessage(message, sender) {
    let chatBox = document.getElementById("chat-box");

    let div = document.createElement("div");
    div.className = sender;
    div.innerText = message;

    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotReply(message) {
    message = message.toLowerCase();

    // Greetings
    if (message.includes("hyy") || message.includes("hello")) {
        return "Hey! 😊 How's your day going?";
    }

    // How are you
    else if (message.includes("how are you")) {
        return "I'm doing great 😄 What about you?";
    }

    // Name
    else if (message.includes("your name")) {
        return "I'm your friendly chatbot 🤖";
    }

    // User feeling
    else if (message.includes("i am fine") || message.includes("i'm fine")) {
        return "Nice to hear that 😊";
    }

    else if (message.includes("sad") || message.includes("not good")) {
        return "Oh no 😔 Want to talk about it?";
    }

    // Time-based
    else if (message.includes("good morning")) {
        return "Good morning ☀️ Have a great day!";
    }

    else if (message.includes("good night")) {
        return "Good night 🌙 Sweet dreams!";
    }

    // Basic questions
    else if (message.includes("what are you doing")) {
        return "Just chatting with you 😄";
    }

    else if (message.includes("where are you from")) {
        return "I live inside your computer 💻😄";
    }

    else if (message.includes("who made you")) {
        return "A smart developer like you 😎";
    }

    // Fun
    else if (message.includes("joke")) {
        return "Why did the programmer quit his job? 😄 Because he didn't get arrays!";
    }

    // Study related
    else if (message.includes("study") || message.includes("exam")) {
        return "Don't worry 💪 You got this! Keep studying!";
    }

    // Food
    else if (message.includes("food") || message.includes("hungry")) {
        return "Same here 😋 What do you like to eat?";
    }

    // Bye
    else if (message.includes("bye")) {
        return "Bye 👋 Take care!";
    }

    // Default
    else {
        return "Hmm 🤔 Tell me more!";
    }
}