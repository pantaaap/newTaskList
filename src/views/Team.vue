<template>
  <div class="team">
    <h1 class="title grey--text">Team</h1>
    <v-container class="my-7">
      <V-row>
        <v-col col="12" sm="6" md="4" lg="3" v-for="person in team" :key="person.name">
          <v-card elevation="0" class="text-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100" outline>
                <img :src="person.avatar" />
              </v-avatar>
            </v-responsive>
            <v-card-text class="body-1">
              <div class="subtitle black--text">{{person.name}}</div>
              <div class="gray--text body-2">{{person.role}}</div>
              <v-card-actions>
                <v-btn elevation="0" color="grey lighten-5">
                  <v-icon small>message</v-icon>
                  <span>message</span>
                </v-btn>
              </v-card-actions>
            </v-card-text>
          </v-card>
        </v-col>
      </V-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        { name: "Turanga Leela", role: "captan", avatar: "/lila.png" },
        { name: "Philip J Fry", role: "deliveryboy", avatar: "/fry.png" },
        {
          name: "Professor farnsworth",
          role: "genius",
          avatar: "/professor.png"
        },
        { name: "bender", role: "bending unit", avatar: "/bbender.png" },
        { name: "amy wong", role: "intern", avatar: "/amy.png" },
        { name: "Lord Nibbler", role: "pet", avatar: "/nibler.png" },
        { name: "MD JJohn", role: "MD?", avatar: "/zoidberg.png" }
      ]
    };
  }
};
</script>
