<script setup>

import SummaryItem from "@/components/summary-item.vue";
import NavigationButtons from "@/components/navigation-buttons.vue";
</script>

<template>
  <NavigationButtons></NavigationButtons>
  <SummaryItem>
    <template #heading>Work Experience</template>

    I currently work for <a href="https://www.wasatchtutors.com/">Wasatch Tutors</a> in Sandy, working
    with high school students in both subject and ACT tutoring. I have worked there since September 2022,
    and it has boosted my experience in interpersonal communication and education. It is a great position
    and I am happy to be still working there.
    <br>
    <br>
    Previously, I had worked at my local Walmart over the summer between the 20-21 and 21-22 school
    years, and this was a great position to improve interpersonal communication and customer service skills.
    <br>
    <br>
    Before COVID-19, I had worked at my high school as a student math tutor, echoing much of the same experience
    I am gaining now. This was a free service provided to fellow students, and it was extremely enjoyable and
    rewarding.

  </SummaryItem>
  <SummaryItem>
    <template #heading>Development Experience</template>

    My experience dates back to 2018 during that initial software development course, where I first learned
    how to program with blocks, Javascript, and some C#. I am currently comfortable with many languages,
    including Python, C++, Java, and C#, all of which have been major parts of my high school and college curricula,
    as well as Rust and Javascript which I have tried to learn on the side.
    <br>
    <br>
    I have completed the Software Practice I course, demonstrating proficiency in C# as well as techniques
    relating to clear and effective software development. Unfortunately, in respect of keeping assignment solutions
    private, that code is not available.
    <br>
    <br>
    I try to post all of my projects publicly to Github whenever it is possible and appropriate to do so, and so
    that is where most of my public code resides. You can find a link to my Github under the Social Media tab, as
    well as a list of projects under the Projects tab.
  </SummaryItem>
</template>