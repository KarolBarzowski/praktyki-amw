import requests
from bs4 import BeautifulSoup

data = []

def scrap(n):
    result = requests.get("https://apynews.pl/ranking-youtuberow/compact")
    src = result.content
    soup = BeautifulSoup(src, "html.parser")

    rows = soup.find_all("tr")[1:n + 1]

    for row in rows:
        place = row.find("td", class_="tall").text
        nickname = row.find("td", class_="name-cell").text
        subs = row.find("strong").text
        views = row.find_all("strong")[1].text

        data.append((
            place,
            nickname,
            subs,
            views
        ))

def display():
    for place, nickname, subs, views in data:
        print(place, nickname, subs, views)

print("Ranking youtuberow")
amount = 0
while amount < 1 or amount > 300:
    amount = int(input("Chce zobaczyc TOP (1-300): "))

scrap(amount)
display()
