from flask import Flask, request, jsonify
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
    response = requests.post('http://localhost:5000/profileSummary', json={'success': True})
    if response.status_code == 200:
        return jsonify({'message': 'File uploaded and POST request made successfully'}), 200
    else:
        return jsonify({'message': 'File uploaded but POST request to profileSummary failed'}), 500

if __name__ == '__main__':
    app.run(port=6000)