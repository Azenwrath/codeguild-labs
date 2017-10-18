import requests
import config
# import json
package = {}
package['APPID'] = config.keys

choice = input("Please enter the name or zip code of the city you would like to view: ")
while True:
    units = input("Please enter c for Celsius or f for Fahrenheit: ")
    if units.lower() == "c":
        package['units'] = 'metric'
        break
    elif units.lower() == 'f':
        package['units'] = 'imperial'
        break


if choice[0].isdigit():
    package['zip'] = choice
else:
    package['q'] = choice

def weather_output(weather, units):
    if units == 'imperial':
        unit = "F"
    elif units == 'metric':
        unit = "C"
    else:
        unit = "K"
    print(weather)
    print("The weather in", weather['name'], "is currently", weather['weather'][0]['main'])
    print('The temperature is:', weather['main']['temp'], unit)


req = requests.post('http://api.openweathermap.org/data/2.5/weather?', params=package)
pyobj = req.json()
# pyobj = json.loads(req.content)
weather_output(pyobj, package['units'])
