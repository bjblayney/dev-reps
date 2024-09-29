import json

# Load the questions from your local file (adjust the path if necessary)
try:
    with open('questions.js', 'r') as file:
        content = file.read()

        # Print the file content to ensure it's being read
        print("File content loaded:")
        print(content[:200])  # Preview first 200 characters to check

        # Ensure we're stripping away the 'const questions = ' and ';' correctly
        json_data = content.replace('const questions = ', '').strip().rstrip(';')

        # Print what json_data looks like
        print("Stripped JSON data:")
        print(json_data[:200])  # Preview first 200 characters to check

        # Parse the JSON content
        questions_data = json.loads(json_data)
except Exception as e:
    print(f"An error occurred: {e}")
    exit(1)

# The function to cycle the correct answer's position
def cycle_correct_answer(questions):
    for i, question in enumerate(questions):
        # Extract the correct answer based on the index
        correct_answer = question['options'][question['correctAnswer']]

        # Calculate new position based on question index (cycling through 0, 1, 2, 3)
        new_position = i % len(question['options'])

        # Move correct answer to the new position
        options = question['options']
        options.insert(new_position, options.pop(question['correctAnswer']))

        # Update correctAnswer index to reflect new position
        question['correctAnswer'] = new_position

    return questions

# Apply the cycling update
cycled_questions = cycle_correct_answer(questions_data)

# Save the updated questions to a new file
with open('cycled_questions.js', 'w') as file:
    file.write('const questions = ' + json.dumps(cycled_questions, indent=2) + ';')

print("Questions updated and saved to cycled_questions.js")
