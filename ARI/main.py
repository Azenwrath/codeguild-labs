import os
import nltk
import math

class ARI(object):


    def __init__(self):
        local_files = os.listdir()
        self.files = {}
        self.index = 0
        for i in local_files:
            if i[-3:] == 'txt':
                self.files[self.index] = i
                self.index += 1
        self.ari_scale = {
            1: {'ages': '5-6', 'grade_level': 'Kindergarten'},
            2: {'ages': '6-7', 'grade_level': '1st Grade'},
            3: {'ages': '7-8', 'grade_level': '2nd Grade'},
            4: {'ages': '8-9', 'grade_level': '3rd Grade'},
            5: {'ages': '9-10', 'grade_level': '4th Grade'},
            6: {'ages': '10-11', 'grade_level': '5th Grade'},
            7: {'ages': '11-12', 'grade_level': '6th Grade'},
            8: {'ages': '12-13', 'grade_level': '7th Grade'},
            9: {'ages': '13-14', 'grade_level': '8th Grade'},
            10: {'ages': '14-15', 'grade_level': '9th Grade'},
            11: {'ages': '15-16', 'grade_level': '10th Grade'},
            12: {'ages': '16-17', 'grade_level': '11th Grade'},
            13: {'ages': '17-18', 'grade_level': '12th Grade'},
            14: {'ages': '18-22', 'grade_level': 'College'}
        }

    def menu(self):
        print('''
        1 - View list of available files.
        2 - Read a book.
        3 - Check the readability of a file.
        x - Exit.
        ''')

    def txtlist(self):
       print("The following files are available: ")
       for i in self.files:
           print(i, "-", self.files[i])

    def readbook(self):
        self.txtlist()
        choice = int(input("Please select a book to read: "))

        with open(self.files[choice], 'r') as book:
            pages = book.read()
            print(pages)

    def calculate_ari(self):
        self.txtlist()
        choice = int(input("Please select a book to read: "))

        with open(self.files[choice], 'r') as book:
            pages = book.read()
        sent_count = len(nltk.sent_tokenize(pages))
        word_count = len(nltk.word_tokenize(pages))
        char_count = len(pages.replace(' ', ''))
        print()
        print("There are: ", char_count, "characters.")
        print("There are: ", sent_count, "sentences.")
        print("There are: ", word_count, "words.")
        readability = math.ceil(4.71 * (char_count / word_count) + .5 * (word_count / sent_count) - 21.43)
        if readability >= 14:
            readability = 14
        print("Giving an ARI of: ", readability)
        print()
        print("This corresponds to a", self.ari_scale[readability]['grade_level'], "grade level.")
        print("Which is suitable for an average", self.ari_scale[readability]['ages'], "year old.")







if __name__ == '__main__':
    ari = ARI()
    while True:
        ari.menu()
        choice = input("Enter your choice: ").lower()
        if choice  == 'x':
            exit()
        elif choice == '1':
            ari.txtlist()
        elif choice == '2':
            ari.readbook()
        elif choice == '3':
            ari.calculate_ari()
