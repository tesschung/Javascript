import requests
from bs4 import BeautifulSoup

# http://www.kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF121682
query = '죽여주는이야기'
url = f'http://www.kopis.or.kr/por/search/search.do?menuId=MNU_00099&searchWord={query}&searchType=total'
response = requests.get(url)
html = response.text
# soup = BeautifulSoup(html, 'html.parser')
# print(soup.text)
print(html)

