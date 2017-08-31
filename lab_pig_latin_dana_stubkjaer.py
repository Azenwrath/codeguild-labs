# Lab: Pig Latin
# Student: Dana Stubkjaer




def piggify(word):
    if word[0].lower() in 'aeiouy':
        return(word + "yay")
    else:
        return(word[1:] + word[0] + "ay")



print(piggify(input("Please enter a single word for conversion: ")))