read_data = None
with open(r'input.txt') as f:
    read_data = f.readlines()

max_row, max_col = 0, 0
segments = []

for line in read_data:
    end_1, end_2 = line.strip().split(' -> ')
    segments.append((tuple(map(int, end_1.split(','))),
                    tuple(map(int, end_2.split(',')))))
    max_row = max(max_row, segments[-1][0][0], segments[-1][1][0])
    max_col = max(max_col, segments[-1][0][1], segments[-1][1][1])

diagram = [[0]*(max_col+1) for _ in range(max_row+1)]

diagonal_segments = []

for segment in segments:
    if segment[0][0] == segment[1][0]:
        min_col, max_col = min(segment[0][1], segment[1][1]), max(
            segment[0][1], segment[1][1])
        for col in range(min_col, max_col+1):
            diagram[segment[0][0]][col] += 1
    elif segment[0][1] == segment[1][1]:
        min_row, max_row = min(segment[0][0], segment[1][0]), max(
            segment[0][0], segment[1][0])
        for row in range(min_row, max_row+1):
            diagram[row][segment[0][1]] += 1
    else:
        diagonal_segments.append(segment)

print(len([val for row in diagram for val in row if val >= 2]))

for segment in diagonal_segments:
    X_incr = 1 if segment[0][0] < segment[1][0] else -1
    Y_incr = 1 if segment[0][1] < segment[1][1] else -1
    (X, Y) = segment[0]
    diagram[X][Y] += 1
    while True:
        X += X_incr
        Y += Y_incr
        diagram[X][Y] += 1
        if (X, Y) == segment[1]:
            break

print(len([val for row in diagram for val in row if val >= 2]))