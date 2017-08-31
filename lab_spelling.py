# This should be in a class now that it loads it's own reference data

def exception(word):
    #reflist = [line.strip('\n') for line in open("exceptionlist.txt", 'r')]
    if word in [line.strip('\n') for line in open("exceptionlist.txt", 'r')]: return 'This word is an exception'



def checkforcei(word):
    # if exception(word):
    #     return 'This word is an exception'


    if word in [line.strip('\n') for line in open("exceptionlist.txt", 'r')]: return 'This word is an exception'


    if 'ie' in word:
        index = word.find('ie') - 1
        try:
            if word[index] != 'c':
                return "The IE does not follow a C"
            if word[index] == 'c':
                return "Exceptional C follow"
        except IndexError:
            pass


    if 'ei' in word:
        index = word.find('ie') - 1
        try:
            if word[index] != 'c':
                return "Warning! Insufficient prescriptivism" # 'cie' exception
            if word[index] == 'c':
                return "This a totally normal 'cei'"
        except IndexError:
            pass
    return "Did not find a IE or EI"

datum = input("Enter a word for testing: ")
print(checkforcei(datum))
