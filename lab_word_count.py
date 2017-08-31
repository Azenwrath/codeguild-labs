# import spacy
# nlp = spacy.load('en')
# # doc = nlp(u'This is a sentence.')
# # print(doc)
#
# with open('pride.txt', 'r') as pride:
#     book = ''
#     for line in pride:
#         book += line
#
# book = nlp(book)
#


# book = nlp(str(line) for line in open("pride.txt", 'r'))
import nltk
import collections

with open('pride.txt', 'r') as pride:
    book = ''
    for line in pride:
        book += line

tokens = nltk.word_tokenize(book)
#totals = collections.Counter(tokens)
totals = list(nltk.bigrams(tokens))
print(totals)