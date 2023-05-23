// A to-do task will have some properties after being created:
// taskName, uniqueID & done variable to know whether it's completed or not
// Because this to-do model will be used at a lot places so create this separately as an interface & export to use it somewhere

export interface Todo {
    id: number;
    todo: string;
    isDone: boolean;
}

