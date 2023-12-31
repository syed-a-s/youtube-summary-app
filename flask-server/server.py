from youtube_transcript_api import YouTubeTranscriptApi
from flask import Flask, request, jsonify
# from flask_cors import CORS

app = Flask(__name__)
# CORS(app, resources={r"/get-transcript/*": {"origins": "http://localhost:3000"}})

@app.route("/get-transcript/<video_id>")
def get_transcript(video_id):
    transcript = YouTubeTranscriptApi.get_transcript(video_id, languages=['en'])
    transcript_data = {
        "transcript" : transcript
    }
    return jsonify(transcript_data), 200

if __name__ == "__main__":
    app.run(debug=True)
