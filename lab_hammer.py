# Lab: Hammer
# Student: Dana Stubkjaer


mealtime = input("Please enter an hour of the day in the format '##AM or ##PM: ")

if mealtime.endswith("AM"):
    mealtime = int(mealtime.rstrip("AM"))
    if mealtime == 12:
        print("Hammer Time!")
    if mealtime in range(7, 9):
        print("Breakfast Time!")
    elif mealtime in range(0, 4):
        print("Hammer Time!")
    else:
        print("It is not currently a meal time.")
    exit()


if mealtime.endswith("PM"):
    mealtime = int(mealtime.rstrip("PM"))
    if mealtime == 12:
        print("Lunch Time!")
    elif mealtime in range(0, 2):
        print("Lunch Time!")
    elif mealtime in range(7, 9):
        print("Dinner Time")
    elif mealtime in range(10, 12):
        print("Hammer Time")
    else:
        print("It is not currently a meal time.")




