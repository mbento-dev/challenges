import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
    knex.schema.createTable('heroes', function (table) {
        table.increments('id');
        table.string('name');
        table.float('lat');
        table.float('lng');
        table.boolean('assigned');
      })
}


export async function down(knex: Knex): Promise<void> {
    knex.schema.dropTable('heroes');
}

