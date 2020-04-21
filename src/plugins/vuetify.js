import Vue from "vue";
import Vuetify from "vuetify/lib";
import "material-design-icons-iconfont/dist/material-design-icons.css"; // Ensure you are using css-loader

Vue.use(Vuetify);

export default new Vuetify({
    iconfont: "md",
    theme: {
        primary: "#009688",
        secondary: "# 607 d8b",
        accent: "#03a9f4",
        error: "# ff9800",
        warning: "#cddc39",
        info: "#3f51b5",
        success: "# 673 ab7",
    },
});