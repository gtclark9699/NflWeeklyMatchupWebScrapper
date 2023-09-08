
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium import webdriver 
from selenium.webdriver.chrome.options import Options
from flask import Flask
app = Flask(__name__)

@app.route('/matchups/<year>/<week>', methods=['GET'])
def getMatchUps(year, week):
    url = "https://www.nfl.com/schedules/" + year + "/REG" + week

    options = Options()

    options.add_experimental_option('excludeSwitches', ['enable-logging'])
    driver =  webdriver.Chrome(options=options)
    driver.get(url)
    page = driver.page_source

    soup = BeautifulSoup(page, features="html.parser")

    teams = soup.find_all('span', class_='nfl-c-matchup-strip__team-abbreviation')

    teamPairsEven = []
    teamPairsOdd = []
    count = 0

    for team in teams:
        if count % 2 == 0:
            teamPairsEven.append(team.text)
        else:
            teamPairsOdd.append(team.text)
        count = count + 1

    combinedList = list(zip(teamPairsEven, teamPairsOdd))
    
    driver.quit()

    return combinedList


if (__name__ == '__main__'):
    app.run()