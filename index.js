
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: () => {
      console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
    },

    markCompeted: () => {
      task.complete = true;
    }
  };
  return task;
}

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

task1.logState(); // Clean Cat Litter has not been completed
task1.markCompeted();
task1.logState(); // Clean Cat Litter has been completed
