# # Lab: madlib.py
#
# ------
# #### Goal
#
# Write a simple program that, when run, prompts the user for several inputs then
#  prints a [Mad Lib](https://en.wikipedia.org/wiki/Mad_Libs) as the result.
#
# -------
# #### Instructions
#
#   1. Search the interwebs for an example Mad Lib
#   1. Open Atom
#   1. Create a new file and save it as `madlib.py`
#
# Example:
#
# ```
# >>> Give me an antonym for 'data': nonmaterial
# >>> Tell me an adjective: Bearded
# >>> Give me a sciency buzzword: half-stack
# >>> A type of animal (plural): parrots
# >>> Some Sciency thing: warp drive
# >>> Another sciency thing: Trilithium crystals
# >>> Sciency adjective: biochemical
# ...
# >>> Nonmaterial Scientist Job Description:
# >>> Seeking a bearded engineer, able to work on half-stack projects with a team of parrots.
# >>> Key responsibilities:
# >>> - Extract patterns from non-material
# >>> - Optimize warp drive
# >>> - Transform trilithium crystals into biochemical material.
# ```
# ------
#
#
# #### Documentation
#
# 1. [Common string operations](https://docs.python.org/3.1/library/string.html)
#
# -------
#
# #### Advanced
# * Make a functional solution that utilizes lists. For example, ask the user for 3 adjectives, separated by commas, then use the .split() function to store each adjective and later use it in your story.
# * Add randomness! Use the random module, rather than selecting which adjective goes where in the story.
#
#
# #### Super Advanced
# * Not satisfied yet? Make it a repeatable game. Once you're done prompting the user for words, prompt them for whether they'd like to hear the story. Use a while loop to keep asking if they'd like to hear the story again until the answer is 'no'. You could then ask them if they'd like to make another story, and so on.
#
# #### Key Concepts
#
# - Variables
# - String formatting¹
# - Handling user input
#
# ------
import random #Used to pull random words for each word list

game_answer = "" #Whether the player would like to initially play the game
repeat = "" #Whether the player wishes to repeat the game

words = {  # Redundant
    "noun" : [],
    "verb" : [],
    "adjective" : []
    }


def collect_words(pos): # User input loop to fill word lists.
    # TODO: This errors out with insufficient inputs, but the lab is already overdone.
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
