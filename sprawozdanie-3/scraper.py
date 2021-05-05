import requests
from bs4 import BeautifulSoup

print("Co chcialbys kupic?")
query = input("Chcialbym kupic ")

result = requests.get("https://www.olx.pl/oferty/q-" + query)
src = result.content
soup = BeautifulSoup(src, "html.parser")

offers = soup.find_all("tr", {"class": "wrap"})

for offer in offers:
    title = offer.find("h3").a.strong.string
    print("Tytul: " + title)
