import * as Knex from "knex";
import { v4 } from "uuid";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("heroes").del();

    // Inserts seed entries
    await knex("heroes").insert([
        { id: v4(), name: "Careca da Capa", heroPower: 4, lat: 43.868315, lng: 75.75497 },
        { id: v4(), name: "Tornado de Terror", heroPower: 90, lat: 44.84739, lng: -12.50963 },
        { id: v4(), name: "Nevasca do Inferno", heroPower: 4, lat:  -58.64891, lng: -54.94572 },
        { id: v4(), name: "Marco zero", heroPower: 4, lat: -56.91275, lng: -106.67050 },
        { id: v4(), name: "Ciclista Sem Licença", heroPower: 1, lat: 59.43303, lng: -134.93085 },
    ]);
};
