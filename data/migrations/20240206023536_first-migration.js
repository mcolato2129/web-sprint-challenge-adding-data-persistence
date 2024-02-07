/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
  .createTable('projects', table => {
    table.increments('project_id')
    table.string('project_name').notNullable()
    table.string('project_description')
    table.boolean('project_completed')
  })
  .createTable('resources', table => {
    table.increments('resource_id')
    table.string('resource_name').notNullable()
    table.string('resource_description')
  })
  .createTable('tasks', table => {
    table.increments('task_id')
    table.string('task_description').notNullable()
    table.string('task_note')
    table.boolean('task_completed')
    table.integer('project_id')
        .unsigned()
        .notNullable()
        .references('project_id')
        .inTable('projects')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
  })
  .createTable('project_resources', pr => {
    pr.increments('project_resource_id')
    pr.integer('project_id')
        .unsigned()
        .notNullable()
        .references('project_id')
        .inTable('projects')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    pr.integer('resource_id')
        .unsigned()
        .notNullable()
        .references('resource_id')
        .inTable('resources')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('project_resources')
  .dropTableIfExists('tasks')
  .dropTableIfExists('resources')
  .dropTableIfExists('projects')
};
