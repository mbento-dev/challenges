import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('log_occurrences', table => {
        table.string('heroId').references('id').inTable('heroes');
        table.string('occurrenceId').references('id').inTable('complete_occurrences');
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('log_occurrences');
}