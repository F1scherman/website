<script setup>
import SummaryItem from "@/components/summary-item.vue";
import NavigationButtons from "@/components/navigation-buttons.vue";
import CourseTable from "@/components/course-table.vue";
import CourseTableRow from "@/components/course-table-row.vue";
</script>

<template>
  <NavigationButtons></NavigationButtons>
  <main>
    <SummaryItem>
      <template #heading>High School</template>

      I graduated from <a href="https://lphs.alpineschools.org/">Lone Peak High School</a> in 2022. I was recognized as
      one of two Salutatorians upon graduation (out of ~800 graduating students), computed by a combination metric of
      weighted GPA and ACT score. I received other recognitions, such as the Distinguished Student award from the BYU
      Mathematics department and Finalist in the <a href="http://www.sterlingscholar.org/">Wasatch Front Sterling Scholar</a>
      competition within the Computer Technology category. During high school, I participated in the Engineering/VEX Robotics
      Team, the Math Team, National Honors Society, and the Crusader Club.
    </SummaryItem>
    <SummaryItem>
      <template #heading>College</template>
      I currently attend the University of Utah, pursuing an Honors Computer Science BS with a Math minor
      and a Physics minor. I am currently projected to graduate in December of 2025, but pending application and
      acceptance into the BS/MS program, that will push my graduation date back until May of 2027. I plan to formally focus
      on Programming Languages, Robotics, Artificial Intelligence, Information, and Theory by receiving the
      <a href="https://handbook.cs.utah.edu/2022-2023/CS/Academics/tracks.php">corresponding track certificates</a>. In addition,
      I plan to informally focus on Computer Graphics within the BS degree. I participated in the Engineering Scholars program
      as a freshman through the Price College of Engineering, and currently participate in the
      <a href="https://getinvolved.utah.edu/organization/gamecraft">Gamecraft</a> EAE organization, especially through their
      monthly game jams, and I am a current member of the Alpha Alpha Alpha First-Generation Honors Society.
      <br>
      <br>
      I have taken the following courses:
      <CourseTable>
        <template #semester>Fall 2022</template>
        <CourseTableRow>
          <template #class-name>CS2420: Intro to Data Structures and Algorithms</template>
          <template #credits>4</template>
          <template #letter-grade>A</template>
        </CourseTableRow>
        <CourseTableRow>
          <template #class-name>CS1960: Success in CS</template>
          <template #credits>1</template>
          <template #letter-grade>A</template>
        </CourseTableRow>
        <CourseTableRow>
          <template #class-name>Math2210: Calculus III</template>
          <template #credits>3</template>
          <template #letter-grade>A</template>
        </CourseTableRow>
        <CourseTableRow>
          <template #class-name>Honor2102: Intellectual Traditions: The Middle Ages</template>
          <template #credits>3</template>
          <template #letter-grade>A</template>
        </CourseTableRow>
        <CourseTableRow>
          <template #class-name>Honor2049: Ethics, Literature, and Human Nature</template>
          <template #credits>2</template>
          <template #letter-grade>A</template>
        </CourseTableRow>
        <CourseTableRow>
          <template #class-name>Musc1236: Survey of Jazz</template>
          <template #credits>3</template>
          <template #letter-grade>A</template>
        </CourseTableRow>
      </CourseTable>
      <CourseTable>
        <template #semester>Spring 2023</template>
        <CourseTableRow>
          <template #class-name>CS3500: Software Practice I</template>
          <template #credits>4</template>
          <template #letter-grade>A</template>
        </CourseTableRow>
        <CourseTableRow>
          <template #class-name>CS3810: Computer Organization</template>
          <template #credits>4</template>
          <template #letter-grade>A</template>
        </CourseTableRow>
        <CourseTableRow>
          <template #class-name>Math2270: Linear Algebra</template>
          <template #credits>4</template>
          <template #letter-grade>A</template>
        </CourseTableRow>
        <CourseTableRow>
          <template #class-name>Honor2980: Creative Problem Solving</template>
          <template #credits>3</template>
          <template #letter-grade>A</template>
        </CourseTableRow>
        <CourseTableRow>
          <template #class-name>Honor2050: Ethics, Leadership, and The Humanities</template>
          <template #credits>1</template>
          <template #letter-grade>A</template>
        </CourseTableRow>
      </CourseTable>
      <br>
      I am scheduled to take/am currently taking the following courses:
      <CourseTable>
        <template #semester>Fall 2023</template>
        <CourseTableRow>
          <template #class-name>CS3505: Software Practice II</template>
          <template #credits>3</template>
        </CourseTableRow>
        <CourseTableRow>
          <template #class-name>Math2200: Discrete Mathematics</template>
          <template #credits>3</template>
        </CourseTableRow>
        <CourseTableRow>
          <template #class-name>Math2280: Differential Equations</template>
          <template #credits>4</template>
        </CourseTableRow>
        <CourseTableRow>
          <template #class-name>Phys2220: Physics for Scientists and Engineers II</template>
          <template #credits>4</template>
        </CourseTableRow>
        <CourseTableRow>
          <template #class-name>Honor2101: Intellectual Traditions: Antiquity</template>
          <template #credits>3</template>
        </CourseTableRow>
      </CourseTable>
    </SummaryItem>
  </main>
</template>