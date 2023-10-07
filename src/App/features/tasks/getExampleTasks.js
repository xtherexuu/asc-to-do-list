export const getExampleTasks = async () => {
    const response = await fetch("/asc-to-do-list/exampleTasks.json");

    if(!response.ok) {
        throw new Error(response.status);
    }

    return await response.json();
}