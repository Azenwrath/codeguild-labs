# # Lab: Case Conversion
#
# ###### Delivery Method: Doctests
#
# ##### Goal
#
# Write a program that prompts the user for a word.
# Print out either  `snake_case` or `CamelCase` depending case convention it is!.
#
# --------------------
#
# ##### Instructions
#
# Use substring membership with the `in` operator
#
# -------------------
# #### Documentation
#
# 1. [PEP8](https://www.python.org/dev/peps/pep-0008/)
# 1. [Stack Overflow](http://stackoverflow.com/questions/159720/what-is-the-naming-convention-in-python-for-variable-and-function-names)
#
# ---------------------
# #### Key Concepts:
#
# - Python social conventions for variable and function naming


class CaseCheck(object):
    def case_check(self, word):  # Quick and dirty case comparison
        if word.islower():
            for i in word:
                if i == " ":
                    return 'String contains a space'
            return 'snake_case'

        if word[0].isupper():
            for i in word:
                if i == " ":
                    return 'String contains a space'
            return 'CamelCase'


checker = CaseCheck()
answer = checker.case_check(input("Please enter a word to check: "))
print(answer)
