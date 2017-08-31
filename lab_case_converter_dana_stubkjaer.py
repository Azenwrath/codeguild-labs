class CaseCheck(object):

    def case_check(self, word):
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