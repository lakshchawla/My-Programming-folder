import speech_recognition as sr

r = sr.Recognizer()

mic = sr.Microphone(device_index=1)

with mic as source:
    r.adjust_for_ambient_noise(source, duration=1)
    print("Say Something")
    audio = r.listen(source, timeout=5)
    print("Time's up, Thanks !!")
    
try:
    print("Text: " + r.recognize_google(audio));
except:
    print("unable to understand")
    pass;