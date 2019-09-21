class point:
    def __init__(self, vertical, horizontal):
        self.vertical = vertical
        self.horizontal = horizontal

    def __repr__(self):
        return str("x:%s y:%s" % (self.vertical, self.horizontal))


# refactor it as a class i guess
def create_hilbert_0(a, b,*args,**kvargs):
    hilbert0 = [point(0 + a, 0 + b), point(0 + a, 1 + b), point(1 + a, 1 + b), point(1 + a, 0 + b)]
    return hilbert0


# find a way to rotate the first counter clockwise and the last clockwise
def hilbert_nonzero(a, b, n,*args,**kvargs):
    if n == 0:
        list_of_hilbert = create_hilbert_0(0 + a, 0 + b)

    else:
        list_of_hilbert = [
            hilbert_nonzero(a + 0 * n, b + 0 * n, n - 1),
            hilbert_nonzero(a + 0 * n, b + 2 * n, n - 1),
            hilbert_nonzero(a + 2 * n, b + 2 * n, n - 1),
            hilbert_nonzero(a + 2 * n, b + 0 * n, n - 1)]

    return list_of_hilbert


def rotate90(*args,**kvargs):
    pass


def rotate270(*args,**kvargs):
    pass


def main(*args,**kvargs):
    if __name__ == "__main__":
        marray = hilbert_nonzero(*args)
        print("final one: %s" % marray)


main(0, 0, 1)
