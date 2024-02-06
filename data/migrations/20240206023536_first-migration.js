/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema
  .createTable('project', table => {
    table.increments('project_id')
    table.string('project_name').notNullable()
    table.string('project_description')
  })
  .createTable('resource', table => {
    table.increments('resource_id')
    table.string('resource_name').notNullable()
    table.string('resource_description')
  })
  .createTable('task', table => {
    table.increments('task_id')
    table.string('task_description').notNullable()
    table.string('task_note')

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
