import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('heroes', function (table) {
        table.string('id');
        table.string('name').notNullable();
        table.integer('heroPower').notNullable();
        table.float('lat').notNullable();
        table.float('lng').notNullable();
        table.boolean('assigned').defaultTo(false);
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('heroes');
}

