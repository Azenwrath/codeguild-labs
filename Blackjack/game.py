import deck
import hand

class Blackjack(object):

    def __init__(self):
        self.player_hand = hand.Hand()
        self.dealer_hand = hand.Hand()
        self.my_deck = deck.Deck()

        self.my_deck.shuffle()
        self.player_hand.add(self.my_deck.draw())
        self.player_hand.add(self.my_deck.draw())
        self.dealer_hand.add(self.my_deck.draw())
        self.dealer_hand.add(self.my_deck.draw())

    def round(self):

        while True:
            print("Player Hand: ", self.player_hand.hand, "Worth: ", self.score(self.player_hand.hand))
            print("Dealer Hand: ", self.dealer_hand.hand, "Worth: ", self.score(self.dealer_hand.hand))
            self.answer = input('Would you like to: 1 - hit, or 2 - dealer move. x to exit')
            if self.answer == '1':
                self.player_hand.add(self.my_deck.draw())
            if self.answer == '2':
                self.dealer_move(self.my_deck, self.dealer_hand)
            if self.answer == 'x':
                self.win_condition(dealer=self.dealer_hand.hand, player=self.player_hand.hand)
                exit()

    def dealer_move(self, deck, hand):
        if self.score(hand.hand) >= 17:
            return
        else:
            hand.add(deck.draw())


    def score(self, hand):
        score = 0

        for card in hand:
            print("Card: ", card)
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

    def win_condition(self, **hands):
        final_scores = {}
        for player_hand in hands:

            if self.score(hands[player_hand]) > 21:
                final_scores[player_hand] = 0;
            else:
                final_scores[player_hand] = self.score(hands[player_hand])

        high_score = 0
        winner = None
        for score in final_scores:
            if final_scores[score] > high_score:
                high_score = final_scores[score]
                winner = score

        print(final_scores)
        print(high_score)
        print(winner)
        return winner


if __name__ == '__main__':
    game = Blackjack()



    while True:
        game.round()
