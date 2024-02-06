/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema
  .createTable('project', table => {
    table.increments('project_id')
  })
  .createTable('resource', table => {
    table.increments('resource_id')
  })
  .createTable('task', table => {
    table.increments('task_id')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema
  .dropTableIfExists('task')
  .dropTableIfExists('resource')
  .dropTableIfExists('project')
};
