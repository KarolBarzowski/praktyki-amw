operations = ["Dodawanie"]
operators = ["+"]

def addition(a, b):
    return a + b

print("===* Kalkulator *===")
while True:
    for i, operation in enumerate(operations):
        print(str(i + 1) + ". " + operation)

    userChoice = int(input("Wybierz co chcesz zrobic wpisujac cyfre: "))

    if userChoice > 0 and userChoice <= len(operations):
        a = input("Podaj 1 liczbe: ")
        b = input("Podaj 2 liczbe: " + str(a) + " + ")

        msg = str(a) + " " + operators[userChoice - 1] + " " + str(b) + " = "

        if userChoice == 1:
            msg += str(addition(a, b))

        print(msg)
    else:
        print("Nie ma takiej operacji. Wybierz ponownie")
