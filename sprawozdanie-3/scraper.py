import requests
from bs4 import BeautifulSoup

result = requests.get("http://www.google.com")

print("status:", result.status_code)
