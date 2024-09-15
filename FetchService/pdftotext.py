from pypdf import PdfReader
import os

class PDFTextExtractor:
    def __init__(self, file_stream):
        self.file_stream = file_stream
        self.extracted_text = ""
        self.cleaned_text = ""

    def pdf_text_extract(self):
        read_obj = PdfReader(self.file_stream)
        for i in range(len(read_obj.pages)):
            page = read_obj.pages[i]
            text = page.extract_text()
            self.extracted_text += text
        return self.extracted_text

    def process_file_content(self):
        # Process and clean the file content if needed
        self.cleaned_text = self.pdf_text_extract()
        print(self.cleaned_text)  # You can also return the cleaned text
        return self.cleaned_text
