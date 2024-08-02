from flask import Flask, request, jsonify
from flask_cors import CORS
from googletrans import Translator

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes


def translate_text(text, src_lang, dest_lang):
    translator = Translator()
    translation = translator.translate(text, src=src_lang, dest=dest_lang)
    return translation.text

text = "કેમ છો"  # Gujarati for "How are you?"
translated_text = translate_text(text, 'gu', 'hi')  # 'gu' for Gujarati, 'hi' for Hindi
print(translated_text)  # Expected output: "आप कैसे हैं"




@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route('/translate', methods=['POST' ,'GET'])
def translate():
    data = request.get_json()
    
    inp_transcript = data.get('transcript')
    inp_lang=data.get('lang')
    translated_text=translate_text(inp_transcript, 'hi', inp_lang)
    
    response = {
        'message': 'Received transcript',
        'transcript': translated_text
    }
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)




