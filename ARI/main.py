import os

class ARI(object):


    def __init__(self):
        local_files = os.listdir()
        self.files = {}
        self.index = 0
        for i in local_files:
            if i[-3:] == 'txt':
                self.files[self.index] = i
                self.index += 1


    def txtlist(self):
       print("The following files are available: ")
       for i in self.files:
           print(self.files[i])


ari = ARI()
print(ari.txtlist())
