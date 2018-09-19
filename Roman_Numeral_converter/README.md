# Roman Numeral Converter

## How it works:

This algorithm converts a given number into roman numerals _e.g. 14 = XIV_

The function takes a number as a parameter.

A number (num) is compared against the elements of an array (from 1000-1 by tens including 9 and 5) until it reaches the first number from the array that is less than num.

The roman equivalent of the number from the array is concatenated into a string.

Then the number choosen from the array is subracted from num and and the process repeats itself until num is 0.

The algorithm returns the finished conatenated string which is the roman numeral of the original number that was given as a input.

## How to use:
Call the function **convert()** with a number that you want to change into roman numerals as a parameter.
