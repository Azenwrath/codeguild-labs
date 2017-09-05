import deck
import hand

class Blackjack(object):

    def __init__(self):
        pass

    def score(self, hand):
        score = 0
        for card in hand:
            if card[1] == 'A':
                if score <= 10:
                    score += 11
                else:
                    score += 1
            elif card[1] in ['J', 'Q', 'K']:
                score += 10
            else:
                score += card[1]
        return score




if __name__ == '__main__':
    player_hand = hand.Hand()
    dealer_hand = hand.Hand()
    my_deck = deck.Deck()

    my_deck.shuffle()
    player_hand.add(my_deck.draw())
    player_hand.add(my_deck.draw())
    dealer_hand.add(my_deck.draw())
    dealer_hand.add(my_deck.draw())


    while True:
        print("Player Hand: ", player_hand.hand, "Worth: ", Blackjack().score(player_hand.hand))
        print("Dealer Hand: ", dealer_hand.hand, "Worth: ", Blackjack().score(dealer_hand.hand))
        answer = input('Would you like to: 1 - hit, or 2 - quit')
        if answer == '1':
            player_hand.add(my_deck.draw())
        else:
            exit()
