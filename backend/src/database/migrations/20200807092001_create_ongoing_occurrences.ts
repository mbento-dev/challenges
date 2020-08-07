import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('ongoing_occurrences', function (table) {
        table.string('id');
        table.string('dangerLevel').notNullable();
        table.string('monsterName').notNullable();
        table.float('lat').notNullable();
        table.float('lng').notNullable();
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('ongoing_occurrences')
}

