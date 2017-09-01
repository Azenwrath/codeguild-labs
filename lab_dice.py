class Dice(object):
    from random import randint

    def roll(self, dice, sides):
        result = 0
        for i in range(dice):
            result += self.randint(1, sides)
        return result
gamble = Dice()
number_of_dice = int(input("Please enter the number of dice to roll: "))
number_of_sides = int(input("Please enter the number of sides per dice: "))
print("Your result is a total of: " + str(gamble.roll(number_of_dice, number_of_sides)))
