import requests
from bs4 import BeautifulSoup
import csv

result = requests.get("https://apynews.pl/ranking-youtuberow/compact")
src = result.content
soup = BeautifulSoup(src, "html.parser")