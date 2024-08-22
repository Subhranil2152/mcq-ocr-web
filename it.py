import os
import easyocr

def image_to_text(image_path):
    try:
        reader = easyocr.Reader(['en'])  # Specify language(s) for OCR
        result = reader.readtext(image_path)
        extracted_text = '\n'.join([text[1] for text in result])
        return extracted_text
    except Exception as e:
        print(f"Error occurred during OCR: {e}")
        return ""

def process_images(image_folder, output_file):
    with open(output_file, "w") as f:
        for filename in os.listdir(image_folder):
            if filename.endswith(".jpeg") or filename.endswith(".png"):
                image_path = os.path.join(image_folder, filename)
                extracted_text = image_to_text(image_path)
                f.write(f"Filename: {filename}\n")
                f.write(extracted_text + "\n")
                f.write("="*50 + "\n\n")

def get_folder_path():
    folder_path = input("Enter the path to the folder containing images: ")
    return folder_path

if __name__ == "__main__":
    # Get folder path containing images
    image_folder = get_folder_path()
    if not os.path.isdir(image_folder):
        print("Invalid folder path. Exiting...")
        exit()

    # Specify the output text file name
    output_file = "output.txt"

    # Process images and save text to output file
    process_images(image_folder, output_file)
    print(f"Text extracted from images in '{image_folder}' and saved to '{output_file}'")
