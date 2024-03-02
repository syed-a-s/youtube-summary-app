from youtube_transcript_api import YouTubeTranscriptApi
from flask import Flask, request, jsonify
# from flask_cors import CORS
from openai import OpenAI

app = Flask(__name__)
# CORS(app, resources={r"/get-transcript/*": {"origins": "http://localhost:3000"}})
client = OpenAI()

# get youtube video transcript
@app.route("/get-transcript/<video_id>")
def get_transcript(video_id):
    transcript = YouTubeTranscriptApi.get_transcript(video_id, languages=['en'])
    transcript_data = {
        "transcript" : transcript
    }
    return jsonify(transcript_data), 200

# get summary of youtube transcript from openai
@app.route("/get-summary/", methods = ["POST"])
def get_summary():
    transcript = request.json.get("transcript")
    
    summary = client.chat.completions.create(
        model = "gpt-3.5-turbo",
        messages = [
            {"role": "system", "content": "You will summarize long transcripts."},
            {"role": "user", "content": transcript},
        ]
    )

    summary_data = {
        "id": summary.id,
        "message": summary.choices[0].message.content,
        "finish_reason": summary.choices[0].finish_reason
    }

    return jsonify(summary_data), 200

if __name__ == "__main__":
    app.run(debug=True)