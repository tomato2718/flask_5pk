from random import randint

def draw():
    s=set()
    while len(s)<5:
        s.add(randint(1,54))
    return list(s)

print(draw())