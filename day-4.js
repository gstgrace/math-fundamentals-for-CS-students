Two powerful proof techniques: Proof by Contradiction and the Pigeonhole Principle

1. PROOF BY CONTRADICTION.
If you want to show that a result is FALSE, start by assuming the result is TRUE and then deriving a logical contradiction. And then you can conclude that the result must be FALSE.

2. In general, if nk+1 pigeons fly into n pigeonholes, then at least k+1 pigeons must fly into the same pigeonhole.
The Pigeonhole Principle is an amazing problem-solving technique and we use it to show that the Hexagon Colouring Game cannot end in a tie.

Now think of a social network (e.g. Facebook) with 6 people, with each pair being connected (as friends) or not connected (as strangers). Then by the result from the Hexagon Colouring Game, we can make the following statement:
In any group of six people, there must exist a set of three mutual friends or a set of three mutual strangers.
Significant applications to Social Network Theory – i.e., the theory of networks such as Facebook, Twitter, and LinkedIn.

https://en.wikipedia.org/wiki/Theorem_on_friends_and_strangers 
https://plus.maths.org/content/friends-and-strangers

In many Computer Science problems, we want to know whether a solution exists. Proof by Contradiction is used to show that a solution cannot exist, while the Pigeonhole Principle is used to show that a solution must exist.

If interested, try it out:
# This Python program takes in a single input, a 12-digit string like '978123456789'
def CheckDigit(input):
    X=0
    Y=0
    for i in range(12):
        if i%2 == 0: X += int(input[i])
        else: Y += int(input[i])
    return -(X+3*Y) % 10
    
print("The check digit is", CheckDigit('978123456789'))


# This Python program takes in twelve different inputs, one for each digit.
def NewCheckDigit(x1,y1,x2,y2,x3,y3,x4,y4,x5,y5,x6,y6):
    X=x1+x2+x3+x4+x5+x6
    Y=y1+y2+y3+y4+y5+y6
    return -(X+3*Y) % 10
    
print("The check digit is", NewCheckDigit(9,7,8,1,2,3,4,5,6,7,8,9))

