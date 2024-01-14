<script setup>

import SummaryItem from "@/components/summary-item.vue";
import NavigationButtons from "@/components/navigation-buttons.vue";
</script>

<template>
  <NavigationButtons></NavigationButtons>
  <SummaryItem>
    <template #heading>General Information</template>

    I am credited both as Brayden Jonsson and F1scherman. Previously, I have maintained separate identities on several
    services, such as Github, so both may appear. I am in the process of unifying these accounts so it should eventually
    become a non-issue.
  </SummaryItem>
  <SummaryItem>
    <template #heading>Game Jam Submissions</template>

    Generally, especially with Gamecraft jams, I work in a team with Max Petersen (GuyWithaPC) and several other teammates,
    preferring Godot for development.
    <br>
    <br>
    -<a href="https://guywithapc.itch.io/hummingbird-simulator">Hummingbird Simulator</a>
    <br>
    Based on the theme "Agility", this is a game where you need to navigate a procedurally-generated level and consistently
    stop at flowers to eat nectar to survive. I worked on the procedural generation.
    <br>
    <br>
    -<a href="https://guywithapc.itch.io/late-bloomer">Late Bloomer</a>
    <br>
    Based on the theme "Late Start", this is a game where you need to grow crops using the leftover fertilizers in the
    local market. I worked on assembling and configuring the art and music.
    <br>
    <br>
    -<a href="https://guywithapc.itch.io/fridge-frenzy">Fridge Frenzy</a>
    <br>
    Based on the theme "Chill", this is a game where the goal is to manage inventory of a fridge during a restaurant's
    dinner rush. I contributed to some sound design as well as planning.
    <br>
    <br>
    -<a href="https://guywithapc.itch.io/trimmed-for-travel">Trimmed for Travel</a>
    <br>
    Based on the theme "Leave it Behind", in this game you control a spaceship through challenging levels, while being
    required to frequently remove parts in order to progress. I worked on level design, as well as much of the user interface
    and HUD.
    <br>
    <br>
    -<a href="https://guywithapc.itch.io/redo-rhythm">Redo Rhythm</a>
    <br>
    This theme was "Redo", and we created a rhythm game in the style of Dance Dance Revolution/Friday Night Funkin' requiring
    100% accuracy in the level to avoid restarting. I worked principally on level design.
  </SummaryItem>
  <SummaryItem>
    <template #heading>Github Projects</template>

    -<a href="https://github.com/BraydenJonsson/website">Website</a>
    <br>
    This project hosts the source code and deployed version of this website. This website is written in Vue.js and is
    hosted using the static Github Pages option. It is always a work-in-progress.
    <br>
    <br>
    -<a href="https://github.com/coravacav/uofu-cs-discord-bot">University of Utah CS Discord Bot</a>
    <br>
    This is a bot, written in Rust, for the unofficial U of U CS Discord. I was the first maintainer, but as
    Stefan Todorov (coravacav) took on hosting and the majority of contributions, I transferred ownership. I
    still supply guidance and pull requests.
    <br>
    <br>
    -<a href="https://github.com/F1scherman/matlab-brainfuck-interpreter">Matlab Brainfuck Interpreter</a>
    <br>
    In order to earn a waiver for the Physics Computational Lab course, I was under the impression I needed to know
    Matlab. This was a project I worked on in order to accomplish that, however as it turned out I only needed to know
    Python for that exam. It was still a fun project.
    <br>
    <br>
    -<a href="https://github.com/F1scherman/AdventOfCode2023">Advent of Code 2023</a>
    <br>
    This repo contains all of my Advent of Code 2023 work, completed in Python. I got further along and did more than
    in 2022, but still didn't complete it all.
    <br>
    <br>
    -<a href="https://github.com/F1scherman/GPA_Calculator">GPA Calculator</a>
    <br>
    This is a simple script to calculate your current cumulative GPA, as well as how many courses you would need
    to reach a specified goal GPA.
    <br>
    <br>
    -<a href="https://github.com/BraydenJonsson/pythagorean-triple-finder">Pythagorean Triple Finder</a>
    <br>
    A python module/command line utility to find pythagorean triples when one side length is known.
    <br>
    <br>
    -<a href="https://github.com/BraydenJonsson/rust-matrix">Rust Matrix</a>
    <br>
    This project is a library for a mathematical Matrix in rust. I created this project both as a way to familiarize myself
    with Rust, as well as solidifying my understanding of the introductory Linear Algebra course material I had completed
    in Spring 2023. It is still a work-in-progress and contributions are appreciated, but the primary goal is for my practice
    and I intend to write most of the code.
    <br>
    <br>
    -<a href="https://github.com/BraydenJonsson/AdventofCode2022">Advent of Code 2022</a>
    <br>
    This repo contains all of my Advent of Code 2022 work, written in Java. It is no longer being worked on actively, but
    I might go back and finish it at some point. I would not recommend trying this challenge in Java.
    <br>
    <br>
    -<a href="https://github.com/BraydenJonsson/Starwars3D/tree/main/StarWars3D">Star Wars 3D</a>
    <br>
    This is work I completed during Fall 2021 for my Game Development class in high school, using Unity and C#. Not maintained,
    probably not very good.
    <br>
    <br>
    -<a href="https://github.com/BraydenJonsson/TrackingCalculator">Tracking Calculator</a>
    <br>
    This was my final project for the Advanced Programming course, using OOP principles, GUIs, and databases.
  </SummaryItem>
</template>