---
title: Nuns - Devlog 0 Concept
description: General concept of the Game's Project 
date: '2024-2-5'
categories:
  - Gamedev
  - Raylib
  - Art
published: true
layout: default
---

Welcome to the "Nuns Project"!

(At this time I still don't have a good name for this, therefore I'm going to just name by it's theme.)

This post is about the concept of the game and what I'm initially planning for it. This can (and will) change through time, but still is best to write all down to better planning what will stay or not.

## About the Game

Nuns is an arcade, multidirectional scrolling shooter game where you help a little ~Dog~ Nun in her journey on exorcizing supernatural beings.

## Gameplay

The gameplay consists in going through stages shooting all the enemies, acquiring new shooting patterns and powering up your bullets while dodging attacks to maintain your health and power level. The game will support max 2 players.

Players shoot, move in 8 directions, slide and use an special attack and have a score. Each start with 3 lives and a basic health's bar and when the player lost all of them, must restart at the beginning of the stage. (I would like to try test a hack 'n' slash aproach with this concept too and see which works better for the project) 

Players can also acquire money from the enemies to buy random upgrades in a store in some stages (This could change in next iterations depending on how it will influence the gameplay). At this moment, there is two possible playable characters (with only visual differences for now).

Certain stages have some kind of different routes to the end of the stage or even to another possible new stage.


## Inspirations / Visuals

The Concept is inspired in some of my favorite games of the 16 bit era like: "Go for it! Goemon 2" and "Pocky and Rocky 2", but the mechanics are mainly inspired from Pocky and Rocky and also a little bit from Metal Slug. Goemon is a reference because I want the game to have this strange and goofy vibe even though is about exorcizing Ghosts and Demons and this mix of creeppyness but ridiculous.

For the Main Visuals, I want to use a clear but minimal use of colors like in Legend of Zelda: Link's Awakening, but, as I know myself, I really want to the make the characters simple but the scenarios with more details. This will need sometime to adjust and more sketches and mockups.

![Mockup of the game](/2024/February/mockup_game_colored.webp)
This is the mockup for now of how I'm visualizing. This will have changes as is needed, as I want to reduce the color pallete and more black borders like in most games in gameboy color.

The idea is to each stage tell a little closed story inspired literature from the region from my Country called "Cordel". I think about before each stage has some kind of drawing as a Book cover like in those books.


![Cordel's literature](/2024/February/cordel_example.webp)

The Idea of multiple stage's routes come from Star Fox and The House of the dead where I always liked the idea of make your own way through the stage or sequence of stage to the end of the game.


## What I will use to develop?

As my main objective is to learn how to deal with complex projects and work with frameworks in game developing and reducing my use of big game engines, I'm planning to use **Raylib** and the **C#** bindings of Raylib. To develop the maps, I'm unsure if I will use a full fledged editor like LDTK or make one myself.

> "But Lucas, why not use C or C++ ?"

Well, mainly because C# is the language that I most confortable in use and also the one I'm most interest to work. So, I'm trying to get better on using this language (Even though I know that a garbage collected language can affect performance in games and such). Still, in future Projects I will come back to C and C++ or even maybe in this one depending in how much performance I need.

## What I have for now?

At this moment, I implemented a basic ECS (Entity Component System) generic enough to use as a separate library in other projects and a static class to manage the assets.

## TODO ( For now )
- [X] Game Class
- [X] ECS
	- [X] Entity's Manager
	- [X] World
	- [X] Component's Manager
	- [X] System
- [X] Asset Manager
- [ ] Event and Event's Manager
- [ ] Systems
	- [ ] Render's System
		- [ ] Z Index Ordering
		- [ ] Render visible on Camera
		- [X] Render
	- [X] Movement/Rigidibody's System
	- [ ] Input's System
- [ ] Assets
  - [X] Mockup
  - [ ] Dog Nun's Idle's Sprite 

Next post I'm planning to explain what is it an ECS and how I implemented it.

See you in the next post! 
