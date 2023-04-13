/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('movies', (table) => {
        table.increments('id').primary();
        table.string('title').notNullable();
        table.string('overview', 500).notNullable();
        table.string('release_date').notNullable();
        table.string("poster_path").notNullable();
        table.string("backdrop_path").notNullable();
        table.float("vote_average").notNullable();
        table.string("genres").notNullable();
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('movies');

};

