var books_seperator = ", by ";

var books = [
    "Private Empire: ExxonMobil and American Power;Steve Coll;**",
    "The Man Who Solved The Market;Gregory Zuckerman;***",
    "Barbarian Days: A Surfing Life;William Finnegan;***",
    "The Mastermind;Evan Ratliff;*",
    "Endurance: Shackleton's Incredible Voyage;Alfred Lansing;**",
    "One Summer: America: 1927;Bill Bryson;*",
    "The Wright Brothers;David McCullough;**",
    "American Kingpin;Nick Bilton;**",
    "Anti-Intellectualism in American Life;Richard Hofstadter;*",
    "The Moral Animal: Why We Are, the Way We Are;Robert Wright;**",
    "Into Thin Air: A Personal Account of the Mt. Everest Disaster;John Krakauer;***",
    "Energy and Civilization;Vaclav Smil;*",
    "Taijiquan;Yang Yang;***",
    "Three Body Problem;Cixin Liu;*",
    "Spider Network;David Enrich;**",
    "Coming Apart: The State of White America;Charles Murray;***",
    "Walt Disney: The Triump of the American Imagination;Neal Gabler;**",
    "Benjamin Franklin: An American Life;Walter Isaacson;*",
    "Extreme Ownership;Jocko Willink, Leif Babin;*",
    "Genghis Khan and the Making of the Modern World;Jack Weatherford;**",
    "Last Man Standing;Duff McDonald;*",
    "The Charm School;Nelson DeMille;*",
    "Skunk Works: A Personal Memoir;Ben Rich;*",
    "The Making of the Atomic Bomb;Richard Rhodes;***",
    "Thinking in Bets;Annie Duke;*",
    "China: A History;John Keay;*",
    "Measure What Matters;John Doerr;*",
    "Creative Selection;Ken Kocienda;**",
    "The Rational Optimist;Matt Ridley;*",
    "Brotopia;Emily Chang;*",
    "The Signal and the Noise;Nate Silver;**",
    "Behave: The Biology of Humans at our Best and Worst;Robert Sapolsky;*",
    "Political Order and Political Decay;Francis Fukuyuma;***",
    "Reset;Ellen Pao;**",
    "The Origins of Political Order;Francis Fukuyama;***",
    "High Output Management;Andy Grove;***",
    "How to Fly a Horse;Hevin Ashton;*",
    "The Beginning of Infinity;David Deutsch;*",
    "Rocket Men;Robert Kurso;**",
    "Ready Player One;Ernest Cline;**",
    "Red Notice;Bill Browder;***",
    "I Contain Multitudes;Ed Yong;*",
    "On Writing: A Memoir of the Craft;Stephen King;**",
    "How We Got to Now;Steven Johnson;*",
    "Competing Against Luck;Taddy Hall, Clayton Christensen;*",
    "Blind Man's Bluff;Christopher Drew, Sherry Sontag;*",
    "Principles: Life and Work;Ray Dalio;**",
    "Insanely Simple;Ken Segall;*",
    "Negotiating the Impossible;Deepak Malhotra;*",
    "Hit Makers: The Science of Popularity;Derek Thompson;**",
    "The Upstarts;Brad Stone;**",
    "Originals;Adam Grant,Sheryl Sandberg;*",
    "Shoe Dog;Phil Knight;***",
    "Never Split the Difference;Chris Voss;**",
    "Chaos Monkeys;Antonio Garcia Martinez;**",
    "The Hard Thing About Hard Thinks;Ben Horovitz;***",
    "Algorithms to Live By;Brian Christian,Tom Griffiths;*",
    "Antifragile;Nassim Nicholas Taleb;**",
    "The Outsiders;William Thorndike;*",
    "Blue Ocean Strategy;W. Chan Kim, Renee Mauborgne;*",
    "The Lean Startup;Eric Reis;*",
    "The Sleep Revolution;Arianna Huffington;*",
    "Work Rules! Insights from Inside Google;Lazlo Bock;**",
    "Losing the Signal;Sean Silcoff,Jacquie McNish;**",
    "SuperIntelligence;Nick Bostrom;**",
    "Pitch Perfect;Bill McGowan;*",
    "Creativity, Inc.;Ed Catmull;**",
    "Positioning;Al Ries,Jack Trout;**",
    "Like A Virgin;Richard Branson;**",
    "Ender's Game;Orson Scott Card;***",
    "Superforcasting;Philip Tetlock, Dan Gardner;**",
    "Duty: Memoirs of a Secretary at War;Robert Gates;*",
    "The Like Switch;Jack Schafer, Marvin Karlins;*",
    "Hooked: How to Build Habit-Forming Products;Nir Eyal;**",
    "Smartcuts;Shane Snow;*",
    "The Founder's Dilemmas;Noam Wasserman;*",
    "Team of Teams;Stanley McChrystal;*",
    "The Truth;Neil Strauss;**",
    "Sell or be Sold;Grant Cardone;*",
    "Behind the Cloud;Marc Benioff, Carlye Adler;*",
    "Straight to Hell;John LeFever;**",
    "Leading;Michael Moritz, Alex Ferguson;***",
    "Waking Up;Sam Harris;*",
    "Elon Musk;Ashlee Vance;***",
    "The Victory Lab;Sasha Issenberg;*",
    "How Will You Measure Your Life;Clayton Christensen, James Allworth;*",
    "Hatching Twitter;Nick Bilton;**",
    "The Organized Mind;Daniel Levitin;*",
    "The Sell;Barbara Corcoran;*",
    "Let's Stop Meeting Like This;Dick Axelrod, Emily Axelrod;*",
    "The Creator's Code;Amy Wilkinson;*",
    "Total Leadership;Stewart Friedman;*",
    "Rework;Jason Fried, David Heinemeier Hannson;*",
    "The $100 Startup;Chris Gulliebeau;*",
    "The Everything Store;Brad Stone;***",
    "Me, Myself and Us;Brian Little;*",
    "Lying;Sam Harris;**",
    "The Innovators;Walter Isaacson;**",
    "The Female Brain;Louann Brizendine;**",
    "Mortality;Christopher Hitchens;**",
    "Thinking Fast and Slow;Daniel Kahnman;**",
    "Steve Jobs;Walter Isaacson;***",
    "Selling the Invisible;Harry Beckwith;*",
    "The Power of Now;Eckhart Tolie;**",
    "Winner Take All Politics;Jacob Hacker, Paul Pierson;*",
    "Every Hand Revealed;Gus Hansen;**",
    "The Mathematics of Poker;Bill Chen, Jerrod Ankenman;***",
]
