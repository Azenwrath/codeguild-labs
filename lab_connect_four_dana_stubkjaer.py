class ConnectFour(object):
    rows = []

    for i in range(0, 6):
        rows.append(['0' for x in range(0, 7)])

    def show_board(self):
        for i in range(0, len(self.rows)):
            print(self.rows[i])

    def add_piece(self, column, team):
        column -= 1
        guess = 5
        while guess >= 0:

            if self.rows[guess][column] == '0':
                self.rows[guess][column] = team
                break
            else:
                guess -= 1

    def win_condition(self):
        for i in range(0, len(self.rows)):
            for j in range(0, len(self.rows[i])):
                try:
                    if self.rows[i][j] + self.rows[i][j + 1] + self.rows[i][j + 2] + self.rows[i][j + 3] == 'rrrr':
                        print("You won!")
                except IndexError:
                    pass
                try:
                    if self.rows[i][j] + self.rows[i + 1][j] + self.rows[i + 2][j] + self.rows[i + 3][j] == 'rrrr':
                        print("You won!")
                except IndexError:
                    pass
                try:
                    if self.rows[i][j] + self.rows[i - 1][j + 1] + self.rows[i - 2][j + 2] + self.rows[i - 3][j + 3] == 'rrrr':
                        print("You won!")
                except IndexError:
                    pass
                try:
                    if self.rows[i][j] + self.rows[i + 1][j + 1] + self.rows[i + 2][j + 2] + self.rows[i + 3][
                                j + 3] == 'rrrr':
                        print("You won!")
                except IndexError:
                    pass
        # print(" Eval: " + self.rows[5][0] + self.rows[5][1] +self.rows[5][2] +self.rows[5][3])
        # if self.rows[2][0] + self.rows[3][1] +self.rows[4][2] +self.rows[5][3] == 'rrrr':
        #     print("Diag condition!")






    def open_record(self):
        turn = 0
        record = open('movelist.txt', 'r')
        for nextmove in record:
            if turn == 0:
                self.add_piece(int(nextmove), 'r')
                turn = 1
            else:
                self.add_piece(int(nextmove), 'y')
                turn = 0
        record.close()



                # print(self.rows[column])


game = ConnectFour()
while True:
    print("State of the game")
    game.show_board()

    print('''\n 
            1 - Add a red piece
            2 - Add a yellow piece
            3 - Exit
            4 - Read in a  record of moves
            ''')

    answer = input("Please choose an option: ")
    game.win_condition()
    if answer.lower() == '3':
        exit()
    if answer.lower() == '1':
        game.add_piece(int(input("Please choose a  column: ")), 'r')
    if answer.lower() == '2':
        game.add_piece(int(input("Please choose a  column: ")), 'y')
    if answer.lower() == '4':
        game.open_record()
#
# game.show_board()
# print('Adding  piece')
# game.add_piece(1)
# print()
# game.show_board()
