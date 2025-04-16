export default {
  appType: "mpa",
  build: {
    rollupOptions: {
      input: {
        index: "index.html",
        taskList: "./src/taskList.html",
        taskForm: "./src/taskForm.html",
        taskDetail: "./src/taskDetail.html",
      },
    },
  },
};
