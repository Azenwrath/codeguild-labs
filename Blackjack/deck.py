import random

class Deck(object):
    cardset = []
    for suit in ['h', 'd', 's', 'c']:
        for rank in ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']:
            cardset.append((suit, rank))





    def __init__(self):
        self.cards = self.cardset

        pass

    def cut(self):
        pass

    def draw(self):
        return self.cards.pop()

    def shuffle(self):
        random.shuffle(self.cards)

    def list_deck(self):
        return self.cards

if __name__ == '__main__':
    deck = Deck()
    print(len(deck.cards))
    deck.shuffle()
    print(deck.draw())
    print(len(deck.cards))

