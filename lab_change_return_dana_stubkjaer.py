# Lab: Change Return
# Student: Dana Stubkjaer

# import decimal
# decimal.getcontext().prec = 6
#
# Decimal(10)
def change_return(total):
    dollars = 0
    quarters = 0
    dimes = 0
    nickels = 0
    pennies = 0




    if total >= 25:
        quarters = (total // 25)
        total -= (quarters * 25)
    #print("quarters", quarters, "total", total)
    if total >= 10:
        dimes = (total // 10)
        total -= dimes * 10
    #print("dimes", dimes, "total", total)
    if total >= 5:
        nickels = (total // 5)
        total -= nickels * 5
    #print("nickels", nickels, "total", total)

    print("Quarters", quarters, "Dimes", dimes, "Nickels", nickels, "Pennies", total)



change = int(input("Please enter the amount to be converted to change: "))
total = change


change_return(total)