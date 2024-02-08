/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const tasks = [
  { task_description: 'baz', task_notes: null, task_completed: false, project_id: 1 }
]


exports.seed = function(knex) {
  return knex('tasks').insert(tasks);
};
