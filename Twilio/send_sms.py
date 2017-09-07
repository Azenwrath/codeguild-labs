from twilio.rest import Client
import config

account_sid = config.account_sid
auth_token = config.auth_token
client = Client(account_sid, auth_token)


while True:
    target_num = input("Please enter a phone number to send an SMS message to, starting with a '+': ")

    if len(target_num) != 12:
        print("Please enter a phone number of the correct length")
        continue
    body_msg = input("Please enter the message you wish to send.")
    break



if client.messages.create(to=target_num, from_=config.source_num, body=body_msg):
    print("Your message has been sent to", target_num)


