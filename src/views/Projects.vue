<template>
  <div class="projects">
    <h1 class="title grey--text">My tasks</h1>
    <v-container class="my-7"></v-container>

    <v-row justify="center">
      <v-expansion-panels
        popout
        v-for="project in myProjects"
        :key="project.title"
      >
        <v-expansion-panel>
          <v-expansion-panel-header>{{
            project.titel
          }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-card>
              <v-card-text class="px-4 grey--text">
                <div class="font-weight-bold">{{ project.due }}</div>
                <div>{{ project.content }}</div>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </div>
</template>

<script>
import dataBase from "@/fb";
export default {
  data() {
    return {
      projects: [],
    };
  },
  computed: {
    myProjects() {
      return this.projects.filter((project) => {
        return project.person === "leela";
      });
    },
  },
  created() {
    dataBase.collection("projects").onSnapshot((res) => {
      const changes = res.docChanges();
      changes.forEach((change) => {
        if (change.type === "added")
          this.projects.push({
            ...change.doc.data(),
            id: change.doc.id,
          });
      });
    });
  },
};
</script>
