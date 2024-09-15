"""
Install the Google AI Python SDK

$ pip install google-generativeai
"""

import os
import google.generativeai as genai
#GEMINI_API_KEY='AIzaSyCtg5sAsSIdQmX8W_tVsZMy01xu7o5ju5Y'
genai.configure(api_key='AIzaSyCtg5sAsSIdQmX8W_tVsZMy01xu7o5ju5Y')

# Create the model
generation_config = {
  "temperature": 1,
  "top_p": 0.95,
  "top_k": 64,
  "max_output_tokens": 8192,
  "response_mime_type": "text/plain",
}

model = genai.GenerativeModel(
  model_name="gemini-1.5-flash",
  generation_config=generation_config,
  # safety_settings = Adjust safety settings
  # See https://ai.google.dev/gemini-api/docs/safety-settings
  system_instruction="Let's create a persona for a hackathon participant. Ask questions to gather information about their skills, interests, and goals. Keep the questions concise and focused on the hackathon context. Ask one question at a time.Talk in second person"
)

  
chat_session = model.start_chat()

# Initialize user response and conversation history
user_response = ""
history = [
    {
        "role": "user",
        "parts": ["Ask the first question"],
    }
]
prompt="Based on the history provided, now give me a summary on the preferences and persona of the user, that can b later used to compare to match temmates"
for i in range(5):
    if i == 0:
      response = chat_session.send_message("INSERT_INPUT_HERE")
    elif i==4:
      user_response = input("You: ")
      response = chat_session.send_message(user_response+prompt)
    else:
      user_response = input("You: ")
      response = chat_session.send_message(user_response)

    
    # Prompt the user for input (replace with specific questions)
    #question = input("What question would you like to ask the user about their hackathon persona? ")
    #question="Ask the first question"
    
    history.append({"role": "model", "parts": [response.text]})
    history.append({"role": "user", "parts": [user_response]})
    
    print("Gemini:", response.text)
    
    
#PUT RESPONSE INTO DATABASE FOR THE SELECTED USER
    
  

    




