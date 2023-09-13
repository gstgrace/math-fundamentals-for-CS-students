Understanding Modular Arithmetic
Modular Arithmetic is a system of arithmetic for integers. The numbers “wrap around” when you reach a fixed number (called the “modulus”) to leave a remainder.
Modular arithmetic is the foundational concept in Number Theory, with numerous applications to Computer Science including error-checking codes and cryptography.

Understanding Algotithm
An algorithm is a finite procedure, governed by precise instructions, moving in discrete steps, whose execution requires no insight or intelligence.

Test it out: Find out which day of a week a specific date is - 
def CalculateDay(month,date): 
    if month==1: shift=0
    elif month==2: shift=3
    elif month==3: shift=3
    elif month==4: shift=6
    elif month==5: shift=1
    elif month==6: shift=4
    elif month==7: shift=6
    elif month==8: shift=2
    elif month==9: shift=5
    elif month==10: shift=0
    elif month==11: shift=3
    elif month==12: shift=5
    else: return "ERROR" 
        
    mytotal = date + shift
    remainder = mytotal % 7
    
    if remainder==0: return "Saturday"
    elif remainder==1: return "Sunday"
    elif remainder==2: return "Monday"
    elif remainder==3: return "Tuesday"
    elif remainder==4: return "Wednesday"
    elif remainder==5: return "Thursday"
    elif remainder==6: return "Friday"
    else: return "ERROR"
    
print("January 1, 2023 is a", CalculateDay(1, 1))
print("August 23, 2023 is a", CalculateDay(8, 23))
print("December 25, 2023 is a", CalculateDay(12, 25))

Note that this is not the most “efficient” way to code the algorithm.
