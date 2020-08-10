#include <string>
#include <SFML/Graphics.hpp>
#include <SFML/Graphics/Rect.hpp>
#include <SFML/Graphics/Text.hpp>
#include <vector>
#include <iostream>
#include <random>
using namespace std;
using namespace sf;


int main()
{
    int rand;
    string type;
    random_device rd;
	bool stuff = true;
	vector<char> previous;
	Font font1;
	string bS = "";
	Text typeT;
	Text hero;
	Text thanks;
	Text thanks2;
	int size;
	RectangleShape typeTbox(Vector2f(900, 100));
	RectangleShape heroBox(Vector2f(900, 100));
	typeTbox.setPosition(0, 0);
	heroBox.setPosition(0, 600);
	typeTbox.setFillColor(Color(252, 114, 0));
	heroBox.setFillColor(Color(252, 114, 0));
	typeT.setFillColor(Color::White);
	hero.setFillColor(Color::White);
	thanks.setFillColor(Color::Black);
	thanks2.setFillColor(Color::Black);
	typeT.setCharacterSize(30);
	hero.setCharacterSize(30);
	thanks.setCharacterSize(30);
	thanks2.setCharacterSize(30);
	thanks.setString("Please Type In What Hero Class You Would");
	thanks2.setString(" Like: damage, tank, support, or all.");
	typeT.setPosition(0, 0);
	hero.setPosition(0, 625);
	thanks.setPosition(0, 300);
	thanks2.setPosition(0, 400);
	font1.loadFromFile("font/Enixe.ttf");
	thanks.setFont(font1);
	thanks2.setFont(font1);
	typeT.setFont(font1);
	hero.setFont(font1);


	RenderWindow window(VideoMode(900, 700), "Overwatch Hero Gen");




	while (window.isOpen())
	{
		Event event;

		
	

		while (window.pollEvent(event))
		{


			if (event.type == Event::TextEntered) {

				if (event.key.code == 8 && type != "") {

                    type.pop_back();
                    typeT.setString(type);

				}
				if (event.key.code == 13) {
                 

                    if (type == "32") {
                        type = "";
                        typeT.setString(type);
                        previous.clear();
                        hero.setString("Good Job!! You Have Discovered The Hidden Easter Egg!!!!");
                    }

                   
                    else if (type == "all") {
                        type = "";
                        typeT.setString(type);
                        previous.clear();

                        rand = rd() % 32 + 1;
                        //all heroes
                        if (rand == 1) {
                            hero.setString("Your Hero Is: Ashe");
                        }
                        else if (rand == 2) {
                            hero.setString("Your Hero Is Bastion");
                        }
                        else if (rand == 3) {
                            hero.setString("Your Hero Is Doomfist");
                        }
                        else if (rand == 4) {
                            hero.setString("Your Hero Is Echo");
                        }
                        else if (rand == 5) {
                            hero.setString("Your Hero Is Genji");
                        }
                        else if (rand == 6) {
                            hero.setString("Your Hero Is Hanzo");
                        }
                        else if (rand == 7) {
                            hero.setString("Your Hero Is Junkrat");
                        }
                        else if (rand == 8) {
                            hero.setString("Your Hero Is Mccree");
                        }
                        else if (rand == 9) {
                            hero.setString("Your Hero Is Mei");
                        }
                        else if (rand == 10) {
                            hero.setString("Your Hero Is Pharah");
                        }
                        else if (rand == 11) {
                            hero.setString("Your Hero Is Reaper");
                        }
                        else if (rand == 12) {
                            hero.setString("Your Hero Is Soldier: 76");
                        }
                        else if (rand == 13) {
                            hero.setString("Your Hero Is Sombra");
                        }
                        else if (rand == 14) {
                            hero.setString("Your Hero Is Symmertra");
                        }
                        else if (rand == 15) {
                            hero.setString("Your Hero Is Torbjorn");
                        }
                        else if (rand == 16) {
                            hero.setString("Your Hero Is Tracer");
                        }
                        else if (rand == 17) {
                            hero.setString("Your Hero Is Widowmaker");
                        }
                        else if (rand == 18) {
                            hero.setString("Your Hero Is: D.VA");
                        }
                        else if (rand == 19) {
                            hero.setString("Your Hero Is: Orisa");
                        }
                        else if (rand == 20) {
                            hero.setString("Your Hero Is: Reinhardt");
                        }
                        else if (rand == 21) {
                            hero.setString("Your Hero Is: Roadhog");
                        }
                        else if (rand == 22) {
                            hero.setString("Your Hero Is: Sigma");
                        }
                        else if (rand == 23) {
                            hero.setString("Your Hero Is: Winston");
                        }
                        else if (rand == 24) {
                            hero.setString("Your Hero Is: Wrecking Ball");
                        }
                        else if (rand == 25) {
                            hero.setString("Your Hero Is: Zarya");
                        }
                        else if (rand == 26) {
                            hero.setString("Your Hero Is: Ana");
                        }
                        else if (rand == 27) {
                            hero.setString("Your Hero Is: Baptise");
                        }
                        else if (rand == 28) {
                            hero.setString("Your Hero Is: Brigite");
                        }
                        else if (rand == 29) {
                            hero.setString("Your Hero Is: Lucio");
                        }
                        else if (rand == 30) {
                            hero.setString("Your Hero Is: Mercy");
                        }
                        else if (rand == 31) {
                            hero.setString("Your Hero Is: Moira");
                        }
                        else if (rand == 32) {
                            hero.setString("Your Hero Is: Zenyatta");
                        }
                    }


                    else if (type == "tank") {
                    type = "";
                    typeT.setString(type);
                    previous.clear();

                        rand = rd() % 8 + 1;
                        if (rand == 1) {
                            hero.setString("Your Hero Is: D.VA");
                        }
                        else if (rand == 2) {
                            hero.setString("Your Hero Is: Orisa");
                        }
                        else if (rand == 3) {
                            hero.setString("Your Hero Is: Reinhardt");
                        }
                        else if (rand == 4) {
                            hero.setString("Your Hero Is: Roadhog");
                        }
                        else if (rand == 5) {
                            hero.setString("Your Hero Is: Sigma");
                        }
                        else if (rand == 6) {
                            hero.setString("Your Hero Is: Winston");
                        }
                        else if (rand == 7) {
                            hero.setString("Your Hero Is: Wrecking Ball");
                        }
                        else if (rand == 8) {
                            hero.setString("Your Hero Is: Zarya");
                        }
                    }


                    else if (type == "support") {
                    type = "";
                    typeT.setString(type);
                    previous.clear();

                        rand = rd() % 7 + 1;
                        if (rand == 1) {
                            hero.setString("Your Hero Is: Ana");
                        }
                        else if (rand == 2) {
                            hero.setString("Your Hero Is: Baptise");
                        }
                        else if (rand == 3) {
                            hero.setString("Your Hero Is: Brigite");
                        }
                        else if (rand == 4) {
                            hero.setString("Your Hero Is: Lucio");
                        }
                        else if (rand == 5) {
                            hero.setString("Your Hero Is: Mercy");
                        }
                        else if (rand == 6) {
                            hero.setString("Your Hero Is: Moira");
                        }
                        else if (rand == 7) {
                            hero.setString("Your Hero Is: Zenyatta");
                        }
                    }




                    else if (type == "damage") {
                    type = "";
                    typeT.setString(type);
                    previous.clear();

                        rand = rd() % 17 + 1;
                        if (rand == 1) {
                            hero.setString("Your Hero Is: Ashe");
                        }
                        else if (rand == 2) {
                            hero.setString("Your Hero Is Bastion");
                        }
                        else if (rand == 3) {
                            hero.setString("Your Hero Is Doomfist");
                        }
                        else if (rand == 4) {
                            hero.setString("Your Hero Is Echo");
                        }
                        else if (rand == 5) {
                            hero.setString("Your Hero Is Genji");
                        }
                        else if (rand == 6) {
                            hero.setString("Your Hero Is Hanzo");
                        }
                        else if (rand == 7) {
                            hero.setString("Your Hero Is Junkrat");
                        }
                        else if (rand == 8) {
                            hero.setString("Your Hero Is Mccree");
                        }
                        else if (rand == 9) {
                            hero.setString("Your Hero Is Mei");
                        }
                        else if (rand == 10) {
                            hero.setString("Your Hero Is Pharah");
                        }
                        else if (rand == 11) {
                            hero.setString("Your Hero Is Reaper");
                        }
                        else if (rand == 12) {
                            hero.setString("Your Hero Is Soldier: 76");
                        }
                        else if (rand == 13) {
                            hero.setString("Your Hero Is Sombra");
                        }
                        else if (rand == 14) {
                            hero.setString("Your Hero Is Symmertra");
                        }
                        else if (rand == 15) {
                            hero.setString("Your Hero Is Torbjorn");
                        }
                        else if (rand == 16) {
                            hero.setString("Your Hero Is Tracer");
                        }
                        else if (rand == 17) {
                            hero.setString("Your Hero Is Widowmaker");
                        }
                    }

                    else {
                    hero.setString("That Is Not A Valid Input. Please Try Again");
                    }
				}

				else if (event.key.code != 8 && event.key.code != 13) {
					previous.push_back(event.text.unicode);
					type += event.text.unicode;
					typeT.setString(type);
				}
			}

			if (event.type == Event::Closed) {
				window.close();
			}

			
		}



		window.clear(Color(14, 114, 230));
		window.draw(typeTbox);
		window.draw(heroBox);
		window.draw(typeT);
		window.draw(hero);
		window.draw(thanks);
		window.draw(thanks2);
		window.display();
	}
}