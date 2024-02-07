/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const resources = [
  { resource_name: "foo", resource_description: null },
  { resource_name: "bar", resource_description: null },
]


exports.seed = function(knex) {
  return knex('resources').insert(resources);
};
