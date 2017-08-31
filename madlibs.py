"""
madlib1 = "In the beginning, there was {0}."
madlib1 = "They were a {0} {1}."
madlib1 = "Alas, they were {3}."
madlib1 = "They set out to {4} a/an {5} to {6} their {7}."
madlib1 = "And it was {8}."
"""

import random
madlib = []
noun_total = 2
verb_total = 2
adj_total = 3
nouns = []
verbs = []
adjectives = []
game_answer = ""

while game_answer.lower() != "y":
    game_answer = input("Welcome to PDX Code Guild Day 1 Mad Lib. \n Would you like to play a game, y/n? ")
    if game_answer != "y" and game_answer != "n":
        print ("I did not understand your answer. Please enter 'y' or 'n'")
    if game_answer == 'n':
        exit()
      
for i in range(noun_total):
    new_noun = input("Please enter a noun: ")
    nouns.append(new_noun)
print (nouns)

for i in range(adj_total):
    new_adj = input("Please enter an adjective: ")
    adjectives.append(new_adj)
print (adjectives)

for i in range(verb_total):
    new_verb = input("Please enter a verb: ")
    verbs.append(new_verb)
print (verbs)

madlib.append("In the beginning, there was {n}.".format(n=random.choice(nouns)))
madlib.append("They were a {a} {n}.".format(a=random.choice(adjectives), n=random.choice(nouns)))
madlib.append("Alas, they were {a}.".format(a=random.choice(adjectives)))
madlib.append("They set out to {v} a/an {n} to {v2} their {n2}.".format(v=random.choice(verbs), n=random.choice(nouns), v2=random.choice(verbs), n2=random.choice(nouns)))
madlib.append("And it was {a}.".format(a=random.choice(adjectives)))

for i in range(len(madlib)):
    print (madlib[i])

#print (madlib)




#print (madlib.format(nouns[0], adjectives[0], nouns[0], adjectives[1], verbs[0], nouns[1], verbs[1], adjectives[1], adjectives[2]))
