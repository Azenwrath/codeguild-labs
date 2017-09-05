import random


class TripCalculator(object):

    list_of_cities = {'Boston', 'New York', 'Albany', 'Portland', 'Philadelphia'}


    city_to_accessible_cities = {
      'Boston': {'New York', 'Albany', 'Portland'},
      'New York': {'Boston', 'Albany', 'Philadelphia'},
      'Albany': {'Boston', 'New York', 'Portland'},
      'Portland': {'Boston', 'Albany'},
      'Philadelphia': {'New York'}
    }
    def __init__(self):
        self.visited = set()
        self.unvisited = self.list_of_cities
        self.here = random.sample(self.list_of_cities, 1)
        self.visited.add(self.here[0])

    def menu(self):
        print()
        print("You are currently in:", self.here[0])
        print()
        print("You have been to:", ", ".join(self.visited))
        print("You have not yet been to:", ", ".join(self.unvisited))
        print()
        print("From here, You can visit:", ", ".join(self.city_to_accessible_cities[self.here[0]]))


    def visit(self, to_city):
        if to_city in self.city_to_accessible_cities[self.here[0]]:
            print("Yes, that's a city")
            self.visited.add(to_city)
            self.here = [to_city]

        else:
            print("You can't get there from here")

    def lookahead(self, to_city):
        try:
            return self.city_to_accessible_cities[to_city]
        except KeyError:
            print("I couldn't find that city")
            return


if __name__ == '__main__':
    trip = TripCalculator()
    while True:
        trip.menu()
        answer = input('''
        Menu Options:
        1 - Visit a new city
        2 - See where you can go from a target city
        3 - Exit
        ''')
        if answer == "3":
            exit()
        elif answer == "1":
            trip.visit(answer)
        else:
            pass