const request = require('request');

const apiUrl = process.argv[2];

request(apiUrl, (error, response, body) => {
    if (error) {
        console.error(error);
        return;
    }
    if (response.statusCode !== 200) {
        console.error(response.statusCode);
        return;
    }

    const toDoTasks = JSON.parse(body);

    const completedTasks = {};


    // toDoTasks.forEach((todo) => {
    //     if (todo.completed) {
    //         if (completedTasks.has(todo.userId)) {
    //             completedTasks.set(todo.userId, completedTasks.get(todo.userId) + 1);
    //         } else {
    //             completedTasks.set(todo.userId, 1);
    //         }
    //     }
    // });
    toDoTasks.forEach((todo) => {
        if (todo.completed) {
            const userId = todo.userId.toString();
            if (completedTasks[userId]) {
                completedTasks[userId]++;
            } else {
                completedTasks[userId] = 1;

            }
        }
    });

    // completedTasks.forEach((completedCount, userId) => {
    //     console.log(`${userId}: ${completedCount}`);
    // });
    console.log(completedTasks);

});