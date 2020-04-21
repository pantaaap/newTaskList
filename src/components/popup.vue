<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500" v-mode="dcontrol">
      <template v-slot:activator="{ on }">
        <v-btn class="teal" dark v-on="on">
          <v-icon class="pr-2">add</v-icon>New Project
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline teal white--text" primary-title>
          <v-icon class="px-3">folder</v-icon>New Project
        </v-card-title>

        <v-card-text>
          <v-form class="px-3 pt-3" ref="form">
            <v-text-field
              label="title"
              v-model="title"
              outlined
              shaped
              prepend-icon="create"
              :rules="inputrules"
            ></v-text-field>
            <v-text-field
              label="information"
              v-model="content"
              outlined
              shaped
              prepend-icon="info"
              :rules="inputrules"
            ></v-text-field>
            <v-row>
              <v-col cols="12" sm="12" md="12">
                <v-menu
                  ref="menu"
                  v-model="menu"
                  :close-on-content-click="false"
                  :return-value.sync="due"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="due"
                      label="Due Date"
                      prepend-icon="event"
                      v-on="on"
                      class="mx-4 my-0"
                      readonly
                      :value="formattedDate"
                      :rules="inputrules"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="date" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="menu = false"
                      >Cancel</v-btn
                    >
                    <v-btn
                      text
                      color="primary"
                      @click="$refs.menu.save(date) && formattedDate"
                      >OK</v-btn
                    >
                  </v-date-picker>
                </v-menu>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false">cancel</v-btn>
          <v-btn
            color="primary"
            class="mx-3"
            text
            @click="submit"
            :loading="loading"
            >Add Project</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import format from "date-fns/format";
import dataBase from "@/fb";

export default {
  data: () => ({
    menu: false,
    dialog: false,
    title: "",
    content: "",
    inputrules: [(v) => v.length >= 3 || "Minimum length is 3 characters"],
    loading: false,
    dcontrol: false,
  }),
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.loading = true;

        const project = {
          title: this.title,
          content: this.content,
          due: this.due,
          person: "turanga  leela",
          status: "ongoing",
        };
        dataBase
          .collection("projects")
          .add(project)
          .then(() => {
            this.loading = false;

            this.$refs.form.reset();
            this.$refs.form.resetValidation();
            this.$emit("projectAdded");
          });
      }
    },
  },

  computed: {
    formattedDate() {
      return this.due ? format(this.due, "Dd MMM YYYY") : "";
    },
  },
};
</script>
