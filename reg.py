import re

def extract_questions_from_text(text):
    # Regex pattern to match each question block
    question_pattern = re.compile(
        r'Q\d+\)- (.*?)\n(.*?)\nSelect one option\n(.*?)\n={50}',
        re.DOTALL
    )
    
    questions_data = []

    questions = question_pattern.findall(text)
    for question, extra_info, options in questions:
        options_list = re.split(r'\n', options.strip())
        question_data = {
            "question": question.strip(),
            "options": [opt.strip() for opt in options_list if opt.strip()],
            "answer": None  # We don't have the correct answer info in the given data
        }
        questions_data.append(question_data)
    
    return questions_data

def format_questions_data(questions_data):
    formatted_data = []
    formatted_data.append('4: [')
    for question in questions_data:
        formatted_data.append('    {')
        formatted_data.append(f'        question: "{question["question"]}",')
        formatted_data.append('        options: [')
        for option in question['options']:
            formatted_data.append(f'            "{option}",')
        formatted_data.append('        ],')
        if question["answer"] is not None:
            formatted_data.append(f'        answer: {question["answer"]},')
        formatted_data.append('    },')
    formatted_data.append('],')
    return '\n'.join(formatted_data)

def main(input_file, output_file):
    with open(input_file, 'r') as file:
        text = file.read()
    
    questions_data = extract_questions_from_text(text)
    formatted_data = format_questions_data(questions_data)
    
    with open(output_file, 'w') as file:
        file.write(formatted_data)

if __name__ == "__main__":
    input_file = "output.txt"  # Replace with your input text file
    output_file = "regop.txt"  # Replace with your desired output text file
    
    main(input_file, output_file)
