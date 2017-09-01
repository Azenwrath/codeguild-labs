def convert(distance, unit1, unit2):


    if unit1 == "mi":
        if unit2 == "mi":
            print (distance + " " + unit2)
        if unit2 == "km":
            print ((float(distance) * 1.60934))
        if unit2 == "ft":
            print ((float(distance) * 5280))
        if unit2 == "m":
            print ((float(distance) * 1609.34))


    if unit1 == "km":
        if unit2 == "km":
            print (distance + " " + unit2)
        if unit2 == "mi":
            print ((float(distance) / 1.60934))
        if unit2 == "ft":
            print ((float(distance) * 5280))
        if unit2 == "m":
            print ((float(distance) * 1609.34))


lst = []
lst.clear()

    if unit1 == "ft":
        if unit2 == "ft":
            print (distance + " " + unit2)
        if unit2 == "mi":
            print ((float(distance) * 0.000189394))
        if unit2 == "km":
            print ((float(distance) * 0.0003048))
        if unit2 == "m":
            print ((float(distance) * 0.3048))

    if unit1 == "m":
        if unit2 == "m":
            print (distance + " " + unit2)
        if unit2 == "mi":
            print ((float(distance) * 0.000621371))
        if unit2 == "ft":
            print ((float(distance) * 3.28084))
        if unit2 == "km":
            print ((float(distance) * 1000))


distance = ""
unit1 = ""
unit2 = ""


distance = input("Please enter a distance: ")
unit1 = input ("Please enter the unit of distance: ")
unit2 = input("Please enter the desired unit of conversion: ")


convert(distance, unit1, unit2)

