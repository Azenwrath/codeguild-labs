import tkinter as tk




class Phone(object):
    book = {
        'Dana': 5555,
        'Kasey': 4444
    }

    def search(self, name):
        for i in self.book:
            if i == name:
                print("We found: " + i + " " + str(self.book[i]))
                return
        print("We failed to find that name. ")
        return

    def show(self):
        for i in self.book:
            print(i)


    def update_entry(self, name, number):
        self.book.update({name: number})

    def del_entry(self, name):
        del self.book[name]

phonebook = Phone()

while True:

    answer = input(""
                   "1 - Search\n"
                   "2 - Add Entry\n"
                   "3 - Change Entry\n"
                   "4 - Delete Entry\n"
                   "5 - Directory Listing\n"
                   "6 - Exit\n"
                   "Please enter a number for your menu choice: ")
    if answer == '6':
        exit()
    if answer == '1':
        name = input("Enter a name to search for: ")
        phonebook.search(name)
    if answer == "2":
        name = input("Enter the name of an entry to update: ")
        number = input("Enter the phone number for that person: ")
        phonebook.update_entry(name, number)
    if answer == '5':
        phonebook.show()
    if answer == '4':
        name = input("Enter the name of the entry to delete: ")
        phonebook.del_entry(name)