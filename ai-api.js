// Public Service Hub AI API

const AI_CONFIG = {

    provider: "gemini",

    apiKey: "YOUR_API_KEY_HERE"

};

// Gemini API Example
async function askAI(question){

    try{

        const response =
        await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key="
        + AI_CONFIG.apiKey,
        {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                contents:[
                    {
                        parts:[
                            {
                                text:question
                            }
                        ]
                    }
                ]
            })
        });

        const data =
        await response.json();

        return data.candidates[0]
        .content.parts[0].text;

    }catch(error){

        console.error(error);

        return "AI Server Error";

    }

}

// Example Usage
async function testAI(){

    let answer =
    await askAI(
    "आधार कार्ड अपडेट कसे करावे?"
    );

    console.log(answer);

}
