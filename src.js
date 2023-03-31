document.getElementById("submit-btn").addEventListener("click", function(){
    sendToChatGpt()
});

// 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


function sendToChatGpt(){
    let value = document.getElementById("word-input").value;
    
    let body = {
            "model": "gpt-3.5-turbo",
            "messages": [{"role": "user", "content": value}],
    };

    let headers = {
        Authorization: "Bearer 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"
    };

    axios.post("https://api.openai.com/v1/chat/completions", body, {
        headers: headers,
    })
    .then((response) => {
        let reply = response.data.choices[0].message.content
        document.getElementById("reply-content").textContent = reply;
    });
}