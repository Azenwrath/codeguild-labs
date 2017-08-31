# Values for each denomination
benjamin = 100
jackson = 20
hamilton = 10
lincoln = 5
dollar_bill = 1
quarter = 0.25
dime = 0.10
nickel = 0.05
penny = 0.01

# List of denominations i.e. values
denominations = [benjamin, jackson, hamilton, lincoln, dollar_bill, quarter, dime, nickel, penny]
#TODO
# requesting amount to convert
balance = float(input("How much change do you need?: (protip: enter something like $5.45 as 5.45) "))

# list in which to store number of each denomination
count_denom = []

# loop to count each denomination
for d in denominations:
    # stores number of denomination
    count_denom.append(int(balance / d))
    # print(count_denom)
    # re-calculates remaining balance after removing denomination's share
    print(str(d))
    print("Premod: " + str(balance))
    balance = balance - ((int(balance / d)) * d)
    print(str(int(balance / d)))
    print("Postmod: " + str(balance))
bills = count_denom[0] + count_denom[1] + count_denom[2] + count_denom[3] + count_denom[4]
coins = count_denom[5] + count_denom[6] + count_denom[7] + count_denom[8]
# print(bills)
# print(coins)


# result
print(
    "I'll give you {} hundreds, {}, twenties, {} tens, {} fives, {} singles, {} quarters, {} dimes, {} nickels, and {} pennies.".format(
        *count_denom))
# print("I'll give you {} hundreds, {}, twenties, {} tens, {} fives, {} singles, {} quarters, {} dimes, {} nickels, and {} pennies.".format(num_ben, num_jack, num_ham, num_linc, num_dollar, num_quarters, num_dime, num_nickel, num_penny))
# print("That's " + str(coins) + " coins and " + str(bills) + " bills.")
print("That's {} coins and {} bills.".format(coins, bills))
