import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('log_occurences', table => {
        table.string('heroId').references('id').inTable('heroes');
        table.string('occurenceId').references('id').inTable('complete_occurrences');
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('log_occurences');
}