data = open("input.txt").read().split('\n\n')

balls = data[0].split(',')
boards = [[x.split() for x in line.split('\n')] for line in data[1:]]

first = True
last_ball = 0

def check_board(board):
    for i in range(5):
        if board[i].count('x') == 5:
            return (True)
        if [board[y][i] for y in range(5)].count('x') == 5:
            return (True)

def check_value(board, ball, last):
    global first
    total = 0
    for y, row in enumerate(board):
        for x, char in enumerate(row):
            if char != 'x':
                total += int(char)
    if first == True:
        print(total * int(ball))
        first = False
    if last == True:
        print(total * int(ball))

def go_through_balls():
    already_bingoed = []
    i = 0
    last_ball = 0
    for ball in balls:
        i = 0
        for board in boards:
            if i not in already_bingoed:
                for y, row in enumerate(board):
                    for x, char in enumerate(row):
                        if char == ball:
                            board[y][x] = 'x'
                if check_board(board) == 1:
                    check_value(board, ball, False)
                    already_bingoed.append(i)
                    last_ball = ball
            i += 1
    check_value(boards[already_bingoed[-1]], last_ball, True)

go_through_balls()