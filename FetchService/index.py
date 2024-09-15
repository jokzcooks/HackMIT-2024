from flask import Flask, request, jsonify
from uagents import Agent, Context, Model
import requests
import os
from pdftotext import PDFTextExtractor

app = Flask(__name__)

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({'message': 'No file part'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'message': 'No selected file'}), 400

    filename = file.filename
    file_size = len(file.read())
    file.seek(0)

    print(f'File received: {filename}, Size: {file_size} bytes')

    reader = PDFTextExtractor(file)
    resume_text = reader.pdf_text_extract()
    print(resume_text)

    # Make POST request to another endpoint
    response = requests.post('http://localhost:5000/profileSummary', json={'success': True, "resumeData": resume_text})
    if response.status_code == 200:
        return jsonify({'message': 'File uploaded and POST request made successfully'}), 200
    else:
        return jsonify({'message': 'File uploaded but POST request to profileSummary failed'}), 500

# Define the models for request and response
class Prompt(Model):
    context: str
    text: str

class Response(Model):
    text: str

# Initialize the Agent
AGENT_MAILBOX_KEY = '64e3a511-ecbb-4e51-9197-d15284aae5d0'
agent = Agent(
    name="chatgpt name",
    seed="chatgpt api agent asdijasiohfasiofa",
    mailbox=f"{AGENT_MAILBOX_KEY}@https://agentverse.ai"
)
AI_AGENT_ADDRESS = "agent1qvyrg0578tm2ekua44gnyqmgf99wemp4q8mamatvkg5kvgepsh2fz3e24xk"


# Define the endpoint for resume extraction
@app.route('/extract_info', methods=['POST'])
def extract_info():
    # Extract resume text from the request
    data = request.get_json()
    resume_text = data.get('resume_text')

    if not resume_text:
        return jsonify({"error": "No resume text provided"}), 400

    # Create the prompt
    prompt = Prompt(
        context="You are an onboarding guide for a person creating an account for a hackathon team making an application. You are provided with a resume and as a critic, give the given information.",
        text=f'''Please analyze the following resume text and extract the following information in the specified format:

        Name:
        Class Year:
        Experience Level: Beginner/ Intermediate/ Pro
        Skillset:
        Short Bio:
        Here is the resume text: {resume_text}'''
    )

    # Handle message and response
    async def handle_response(ctx: Context, sender: str, msg: Response):
        print("Extracted info!")
        response = requests.post('http://localhost:5000/extractedData', json={'success': True, "data": msg.text})
        if response.status_code == 200:
            return jsonify({'message': 'File uploaded and POST request made successfully'}), 200
        else:
            return jsonify({'message': 'File uploaded but POST request to profileSummary failed'}), 500


    @agent.on_event("startup")
    async def send_message(ctx: Context):
        await ctx.send(AI_AGENT_ADDRESS, prompt)

    @agent.on_message(Response)
    async def on_message(ctx: Context, sender: str, msg: Response):
        ctx.logger.info(f"Received response from {sender}: {msg.text}")
        return await handle_response(ctx, sender, msg)

    # Run the agent and Flask app
    agent.run()
    return jsonify({"message": "Processing started, please wait for the response."})



if __name__ == '__main__':
    app.run(port=6000)