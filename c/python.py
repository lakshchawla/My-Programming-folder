import random
word = input("Enter word: ")
jumbled_word = list(word)
random.shuffle(jumbled_word)
jumbled_word = ''.join(jumbled_word)
print(jumbled_word)