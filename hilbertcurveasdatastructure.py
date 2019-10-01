from collections.abc import Iterable

class point:
    def __init__(self, vertical, horizontal):
        self.vertical = vertical
        self.horizontal = horizontal

    def __repr__(self):
        return str("x:%s y:%s" % (self.vertical, self.horizontal))


# refactor it as a class i guess
def create_hilbert_0(a, b, *args, **kvargs):
    hilbert0 = [point(0 + a, 0 + b), point(0 + a, 1 + b), point(1 + a, 1 + b), point(1 + a, 0 + b)]
    return hilbert0


# find a way to rotate the first counter clockwise and the last clockwise
def hilbert_nonzero(a, b, n, *args, **kvargs):
    if n == 0:
        list_of_hilbert = create_hilbert_0(0 + a, 0 + b)

    else:
        list_of_hilbert = [
            mirror_first(hilbert_nonzero(a + 0 * n, b + 0 * n, n - 1)),
            hilbert_nonzero(a + 0 * n, b + 2 * n, n - 1),
            hilbert_nonzero(a + 2 * n, b + 2 * n, n - 1),
            hilbert_nonzero(a + 2 * n, b + 0 * n, n - 1)]

    return list_of_hilbert


# the following should change the x=y y=x that's it nothing harder than this this only need to just do that
def mirror_first(maybe_array):
    lista = []
    if isinstance(maybe_array, Iterable):
        for element in maybe_array:
             lista.append(mirror_first(element))
    else:
        return point(maybe_array.horizontal,maybe_array.vertical)
    return lista


def main(*args, **kvargs):
    if __name__ == "__main__":
        marray = hilbert_nonzero(*args)
        print("final one: %s" % marray)


main(0, 0, 1)
