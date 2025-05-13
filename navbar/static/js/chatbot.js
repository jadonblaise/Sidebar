document.addEventListener('DOMContentLoaded', function () {
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotClose = document.getElementById('chatbot-close');
    const chatbot = document.getElementById('chatbot');
    const chatbotMessages = document.getElementById('chatbot-messages');
    const chatbotInput = document.getElementById('chatbot-input');

    // Toggle Chatbot Window
    chatbotToggle.addEventListener('click', () => chatbot.style.display = 'block');
    chatbotClose.addEventListener('click', () => chatbot.style.display = 'none');

    // Define FAQ data
    const faqData = [
        { question: "What is your return policy?", answer: "We offer a 30-day return policy on all items." },
        { question: "How can I track my order?", answer: "You can track your order using the tracking link in your order confirmation email." },
        { question: "What are your customer service hours?", answer: "Our customer service team is available from 9 AM to 5 PM, Monday to Friday." },
        { question: "How do I make a booking?", answer: "To make a booking, go to our bookings page and follow the instructions." },
        { question: "Do you offer discounts?", answer: "Yes, we offer seasonal discounts and promotions. Check our homepage for updates." },
    ];

    // Function to check FAQ and return an appropriate answer
    function getFAQResponse(userMessage) {
        // Find a match in the FAQ data
        const faqMatch = faqData.find(faq =>
            userMessage.toLowerCase().includes(faq.question.toLowerCase())
        );

        // Return answer if a match is found, otherwise default response
        return faqMatch ? faqMatch.answer : "Hello, I'm here to assist with your questions. Please ask me anything!";
    }

    // Handle user input
    chatbotInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && chatbotInput.value.trim()) {
            const userMessage = chatbotInput.value.trim();
            const userMessageDiv = document.createElement('div');
            userMessageDiv.className = 'chatbot-message chatbot-user';
            userMessageDiv.textContent = userMessage;
            chatbotMessages.appendChild(userMessageDiv);

            chatbotInput.value = '';
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;

            // Get FAQ response or default response
            const response = getFAQResponse(userMessage);

            // Display chatbot response
            setTimeout(() => {
                const messageDiv = document.createElement('div');
                messageDiv.className = 'chatbot-message chatbot-response';
                messageDiv.textContent = response;
                chatbotMessages.appendChild(messageDiv);
                chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
            }, 500);
        }
    });
});
