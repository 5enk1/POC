import copy


class opcode():
    def __init__(self, what_to_do, pos1, pos2, what_to_change):
        self.what_to_do = what_to_do  # what to do 1 sum 2 mult 99 end
        self.pos1 = pos1  # pos1
        self.pos2 = pos2  # pos2
        self.what_to_change = what_to_change  # where to change

    def __repr__(self):
        return str("what_to_do:%s pos1:%s pos2:%s what_to_change:%s" % (self.what_to_do, self.pos1, self.pos2, self.what_to_change))


def calculate(noun, verb):
    return 100 * noun + verb


def int_code_parser(Intcode: list):
    def if_one(a, b, c
               ): Intcode[a] = Intcode[b] + Intcode[c]
    def if_two(a, b, c
               ): Intcode[a] = Intcode[b] * Intcode[c]

    def if_anything_else(a, b, c): pass

    options = {1: if_one, 2: if_two}
    x = 0
    while (Intcode[0+x] != 99):
        current = opcode(Intcode[0+x], Intcode[1+x],
                         Intcode[2+x], Intcode[3+x])

        options.get(
            Intcode[0+x], if_anything_else)(current.what_to_change, current.pos1, current.pos2)
        x += 4
    return(Intcode)


def doubleloop(Intcode: list, calculate_methode):
    originalCode = Intcode
    for i in range(0, 100):
        for k in range(0, 100):
            originalCode = copy.copy(Intcode)
            originalCode[1], originalCode[2] = i, k
            result = int_code_parser(originalCode)[0]
            if result == 19690720:
                return calculate_methode(i, k)


if __name__ == "__main__":
    print(doubleloop([1, 0, 0, 3, 1, 1, 2, 3, 1, 3, 4, 3, 1, 5, 0, 3, 2, 10, 1, 19, 2, 19, 6, 23, 2, 13, 23, 27, 1, 9, 27, 31, 2, 31, 9, 35, 1, 6, 35, 39, 2, 10, 39, 43, 1, 5, 43, 47, 1, 5, 47, 51, 2, 51, 6, 55, 2, 10, 55, 59, 1, 59,
                      9, 63, 2, 13, 63, 67, 1, 10, 67, 71, 1, 71, 5, 75, 1, 75, 6, 79, 1, 10, 79, 83, 1, 5, 83, 87, 1, 5, 87, 91, 2, 91, 6, 95, 2, 6, 95, 99, 2, 10, 99, 103, 1, 103, 5, 107, 1, 2, 107, 111, 1, 6, 111, 0, 99, 2, 14, 0, 0], calculate))
