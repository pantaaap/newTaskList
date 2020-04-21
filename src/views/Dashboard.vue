<template v-slot:activator="{ on }">
  <div class="dashboard">
    <h1 class="title grey--text">Dashboard</h1>
    <v-container class="my-7">
      <v-row class="mb-3">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn
              small
              elevation="0"
              class="mx-3"
              @click="sortby('title')"
              v-on="on"
            >
              <v-icon left small>folder</v-icon>
              <span class="caption text-lowercase">by task name</span>
            </v-btn>
          </template>
          <span>sort tasks by title</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn
              small
              elevation="0"
              color="gray"
              class="mx-2"
              @click="sortby('person')"
              v-on="on"
            >
              <v-icon left small>person</v-icon>
              <span class="caption text-lowercase">by person</span>
            </v-btn>
          </template>
          <span>sort tasks by person</span>
        </v-tooltip>
      </v-row>

      <v-card
        elevation="0"
        v-for="project in projects"
        :key="project.id"
        :class="`project ${project.status}`"
      >
        <v-row class="px-3">
          <v-col cols="12" sm="6">
            <div class="caption gray--text">task title</div>
            <div>{{ project.title }}</div>
          </v-col>
          <v-col cols="4" sm="2">
            <div class="caption gray--text">person</div>
            <div>{{ project.person }}</div>
          </v-col>
          <v-col cols="4" sm="2">
            <div class="caption gray--text">due date</div>
            <div class="overline pt-2">{{ project.due }}</div>
          </v-col>

          <v-col cols="4" sm="2" justify="end">
            <div justify="end">
              <v-chip
                justify="end"
                small
                :class="`${project.status} white--text caption my_2`"
                >{{ project.status }}</v-chip
              >
            </div>
          </v-col>
        </v-row>
        <v-divider></v-divider>
      </v-card>
    </v-container>
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
  methods: {
    sortby(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
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
<style>
.project.complete {
  border-left: 4px solid #3cd1c2;
}
.project.ongoing {
  border-left: 4px solid orange;
}
.project.overdue {
  border-left: 4px solid tomato;
}
.v-chip.complete {
  background: #3cd1c2 !important;
}
.v-chip.ongoing {
  background: #ffaa2c !important;
}
.v-chip.overdue {
  background: #f83e70 !important;
}
</style>
