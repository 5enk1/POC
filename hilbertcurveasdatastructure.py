class point:
    def __init__(self,vertical,horizontal):
        self.vertical = vertical
        self.horizontal = horizontal

    def __str__(self):
        return "x:%s y:%s" % (self.vertical, self.horizontal)

    def __repr__(self):
        return str(self)


# refactor it as a class i guess
def create_Hilbert_0(a,b):
    Hilbert0 = [point(0+a,0+b),point(1+a,0+b),point(1+a,1+b),point(0+a,1+b)]
    return Hilbert0


# maybe that's a bad mirror 
# okay this is garbage i should rethink this one 
# only work for the first one 
# i should flatten this (not sure) 
def mirror_structure(marray,ab,n):
    if (n%2==1):
        if (ab==0):
            marray[1],marray[3] = marray[3],marray[1]
        else:
            marray[0],marray[2] = marray[2],marray[0]
    return marray


# okay for [[[0, 0], [0, 1], [1, 1], [1, 0]], [[2, 0], [3, 0], [3, 1], [2, 1]], [[2, 2], [3, 2], [3, 3], [2, 3]], [[1, 3], [1, 2], [0, 2], [0, 3]]]
# this one is buggy as well after 1
def hilbert_nonzero(a,b,n):
    if (n==0):
        list = create_Hilbert_0(0+a,0+b)
    else:
        list = []
        list.append(mirror_structure(hilbert_nonzero(a+0*n,b+0*n,n-1),0,n))
        print("first element in the list: %s  n is: %s" % (list[0], n ))
        list.append(hilbert_nonzero(a+2*n,b+0*n,n-1))
        print("first element in the list: %s  n is: %s" % (list[1], n ))
        list.append(hilbert_nonzero(a+2*n,b+2*n,n-1))
        print("first element in the list: %s  n is: %s" % (list[2], n ))
        list.append(mirror_structure(hilbert_nonzero(a+0*n,b+2*n,n-1),1,n))
        print("first element in the list: %s  n is: %s" % (list[3], n ))
    return list


def main(*args):
    if __name__ == "__main__":
        marray = hilbert_nonzero(*args)
        print("final one: %s" % marray)

main(0,0,2)
