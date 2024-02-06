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
    table.boolean('project_completed')
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
    table.boolean('task_completed')
    table.integer('project_id')
        .unsigned()
        .notNullable()
        .references('project_id')
        .inTable('project')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
  })
  .createTable('project_resource', pr => {
    pr.increments('project_resource_id')
    pr.integer('project_id')
        .unsigned()
        .notNullable()
        .references('project_id')
        .inTable('project')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    pr.integer('resource_id')
        .unsigned()
        .notNullable()
        .references('resource_id')
        .inTable('resource')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema
  .dropTableIfExists('project_resource')
  .dropTableIfExists('task')
  .dropTableIfExists('resource')
  .dropTableIfExists('project')
};
