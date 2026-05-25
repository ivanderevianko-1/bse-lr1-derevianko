// function to calculate completed tasks percentage
function calculateCompletedTasksPercentage(completedTasks, totalTasks) {
    if (totalTasks === 0) return 0;
    return (completedTasks / totalTasks) * 100;
}

console.log(calculateCompletedTasksPercentage(5, 10));