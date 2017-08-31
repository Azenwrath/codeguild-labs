#PDX Code Guild Lab 1: Mad Lib

import random #Used to pull random words for each word list

game_answer = "" #Whether the player would like to initially play the game
repeat = "" #Whether the player wishes to repeat the game

words = {
    "noun" : [],
    "verb" : [],
    "adjective" : []
    }


def collect_words(pos):
    choice = ""
    while choice.lower() != 'n':
        words[pos].append(input(f"Please enter a {pos}.: "))
        choice = input(f"Would you like to enter another {pos}?? y/n: ")
        #I choose to not deal with accidental or malicious input for this example

def game():      #This function initializes a clean slate of madlib variables and plays through the game.
    madlib = [] #List of madlib output lines
    words = {
        "noun" : [],
        "verb" : [],
        "adjective" : []
        }
    """
    noun_total = 2 #Total number of nouns
    verb_total = 2 #Total number of verbs
    adj_total = 3 #Total number of adjectives
    nouns = [] #Blanks and initializes list of nouns for random selection.
    verbs = [] #Blanks and initiallizes list of verbs for random selection.
    adjectives = [] #Blanks and initializes list of adjectives for random selection.
    """
    collect_words("noun")
    

    madlib.append(f"In the beginning, there was {random.choice(words['noun'])}.")
    #madlib.append(f"They were a {random.choice(adjectives)} {random.choice(nouns)}.")
   # madlib.append(f"Alas, they were {random.choice(adjectives)}.")
   # madlib.append(f"They set out to {random.choice(verbs)} a/an {random.choice(nouns)} to {random.choice(verbs)} their {random.choice(nouns)}.")
   # madlib.append(f"And it was {random.choice(adjectives)}.")

    for i in range(len(madlib)):
        print (madlib[i])

while game_answer.lower() != "y":
    game_answer = input("Welcome to PDX Code Guild Day 1 Mad Lib. \n Would you like to play a game, y/n? ")
    if game_answer != "y" and game_answer != "n":
        print ("I did not understand your answer. Please enter 'y' or 'n'")
    if game_answer == 'n':
        exit()
while repeat.lower() != "n":
    game()
    repeat = input("Would you like to play again? y/n? ")


#print (madlib)




#print (madlib.format(nouns[0], adjectives[0], nouns[0], adjectives[1], verbs[0], nouns[1], verbs[1], adjectives[1], adjectives[2]))
