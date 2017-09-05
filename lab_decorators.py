import time

def timing(function):
    def wrapper():
        t1 = time.time()
        function()
        t2 = time.time()
        return 'This took: ', (t1 - t2)

    return wrapper

@timing
def make_html():
    print('Something')
    return


print(make_html())
