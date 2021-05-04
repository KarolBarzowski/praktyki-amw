operations = ["Dodawanie", "Odejmowanie", "Mnozenie", "Dzielenie"]
operators = ["+", "-", "*", "/"]

def addition(a, b):
    return a + b

def subtraction(a, b):
    return a - b

def multiplication(a, b):
    return a * b

def division(a, b):
    return a / b

print("===* Kalkulator *===")
while True:
    for i, operation in enumerate(operations):
        print(str(i + 1) + ". " + operation)

    userChoice = int(input("Wybierz co chcesz zrobic wpisujac cyfre" + "(1-" + str(len(operations)) + "): "))

    if userChoice > 0 and userChoice <= len(operations):
        a = float(input("Podaj 1 liczbe: "))
        b = float(input("Podaj 2 liczbe: " + str(a) + " " + operators[userChoice - 1] + " "))

        msg = str(a) + " " + operators[userChoice - 1] + " " + str(b) + " = "

        if userChoice == 1:
            msg += str(addition(a, b))
        elif userChoice == 2:
            msg += str(subtraction(a, b))
        elif userChoice == 3:
            msg += str(multiplication(a, b))
        elif userChoice == 4:
            msg += str(division(a, b))

        print(msg)
    else:
        print("Nie ma takiej operacji. Wybierz ponownie")
