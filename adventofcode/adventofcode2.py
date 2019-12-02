import copy
from timeit import timeit

def calculate(noun, verb):
    return 100 * noun + verb


def int_code_parser(Intcode: list):
    def if_one(where_to_change, pos1, pos2
               ): Intcode[where_to_change] = Intcode[pos1] + Intcode[pos2]
    def if_two(where_to_change, pos1, pos2
               ): Intcode[where_to_change] = Intcode[pos1] * Intcode[pos2]

    def if_anything_else(where_to_change, pos1, pos2): pass

    options = {1: if_one, 2: if_two}
    x = 0
    # 0+x = operation, 1+x = position1, 2+x = position2, 3+x = where_to_change
    while (Intcode[0+x] != 99):
        options.get(Intcode[0+x], if_anything_else)(Intcode[3+x],
                                                    Intcode[1+x], Intcode[2+x])
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
