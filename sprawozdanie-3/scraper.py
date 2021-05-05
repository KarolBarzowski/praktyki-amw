import requests
from bs4 import BeautifulSoup
import csv

result = requests.get("https://apynews.pl/ranking-youtuberow/compact")
src = result.content
soup = BeautifulSoup(src, "html.parser")

rows = soup.find_all("tr")[1:101]

for row in rows:
    place = row.find("td", class_="tall").text
    nickname = row.find("td", class_="name-cell").text
    subs = row.find("strong").text
    views = row.find_all("strong")[1].text

    print(place, nickname, subs, views)
