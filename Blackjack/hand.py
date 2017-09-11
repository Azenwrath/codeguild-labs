class Hand(object):

    def __init__(self):
        self.hand = []


    def add(self, card):
        self.hand.append(card)


    def create(self, typed_hand):
        for i in range(0, len(typed_hand), 2):
           self.hand.append((typed_hand[i], typed_hand[i+1]))


    def status(self):
        return self.hand



if __name__ == '__main__':
    hand = Hand()
    hand.create("hJdA")
    print(hand.status())

