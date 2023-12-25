# app.py
from flask import Flask, render_template, request, jsonify
import json
import os

app = Flask(__name__)

# Load existing chat data or create an empty list
chat_data_path = 'data/chat_data.json'
if not os.path.exists(chat_data_path):
    with open(chat_data_path, 'w') as f:
        json.dump([], f)

# Join Chat Group route
@app.route('/join_chat', methods=['POST'])
def join_chat():
    data = request.form

    # Validate data
    if 'groupKey' not in data or 'guestNameJoin' not in data:
        return jsonify({'error': 'Invalid data'}), 400

    # Read existing data
    with open(chat_data_path, 'r') as f:
        chat_data = json.load(f)

    # Check if the group exists
    group_exists = any(entry['groupKey'] == data['groupKey'] for entry in chat_data)

    if group_exists:
        # Join the existing chat group
        chat_entry = {'groupKey': data['groupKey'], 'guestName': data['guestNameJoin']}
        chat_data.append(chat_entry)

        # Update data file
        with open(chat_data_path, 'w') as f:
            json.dump(chat_data, f)

        return jsonify({'message': 'Joined Chat Group successfully'})
    else:
        return jsonify({'error': 'Group does not exist'}), 404

# Create Chat Group route
@app.route('/create_chat', methods=['POST'])
def create_chat():
    data = request.form

    # Validate data
    if 'adminName' not in data or 'groupKeyCreate' not in data:
        return jsonify({'error': 'Invalid data'}), 400

    # Read existing data
    with open(chat_data_path, 'r') as f:
        chat_data = json.load(f)

    # Check if the group already exists
    group_exists = any(entry['groupKey'] == data['groupKeyCreate'] for entry in chat_data)

    if not group_exists:
        # Create a new chat group
        chat_entry = {'adminName': data['adminName'], 'groupKey': data['groupKeyCreate']}
        chat_data.append(chat_entry)

        # Update data file
        with open(chat_data_path, 'w') as f:
            json.dump(chat_data, f)

        return jsonify({'message': 'Chat Group created successfully'})
    else:
        return jsonify({'error': 'Group already exists'}), 409

# Home route
@app.route('/')
def home():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
