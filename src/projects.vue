<script setup>

import SummaryItem from "@/components/summary-item.vue";
import EcosystemIcon from "@/components/icons/IconEcosystem.vue";
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
  </SummaryItem>
</template>