# Caeser's Cipher

## What is a Caeser's Cipher?

A Caeser's Cipher is a form of cryptography. Also known as a shift cipher, it is one of the earliest forms of encripting a message. 
In a shift cipher the meanings of the letters are shifted by some set amount.
A common use is the _ROT13_ cipher, where the values of the letters are shifted by 13 places.

## How does it work?

This function uses the ROT13 method.

A ROT13 String is provided as input and returns a decoded message.

The input is split into an array. Each element in the array is checked if it is empty space or punctuation. If it is, that element is pushed into a new array. 
If not, that character's index is found in another array of the alphabet. Once found, 13 is added to the index to create a new index. 
The charater corresponding to the new index is pushed into the same array as punctuation and spaces.
Once all the new characters corresponding to the input's array are pushed it is converted into a string and returned.
