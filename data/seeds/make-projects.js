/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const projects = [
    { project_name: 'foo', project_description: '', project_completed: false },
    { project_name: 'bar', project_description: 'just testing it out', project_completed: true },
]

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').insert(projects);
};

