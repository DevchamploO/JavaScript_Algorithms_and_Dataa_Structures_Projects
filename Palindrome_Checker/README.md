# Palindrome Checker

A _palindrome_ is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

A string is passed as input.

## How does it work?
This algorithm removes all non-alphanumeric characters(punctuation, spaces, and symbols) from a string with regular expressions. Everything has also been converted into the lower case.
Then it is compared to a reversed form of the altered string. If they are identical, then the algorithm returns true indicating a palindrome otherwise it returns false.

## How to use:
Call the function **palindrome()** and pass it a string you want to check as a parameter.
