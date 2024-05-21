import { db, User, Category, Todo} from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	// TODO
	await db.insert(User).values([
		{
			id: "sooasd",
			username: "Adams",
			email: "adams@gmail.com",
			password:""
		},
		{
			id: "assas",
			username: "Branko",
			email: "branko@gmail.com",
			password:""
		}
		,
		{
			id: "assassd",
			username: "Oscar",
			email: "oscar@gmail.com",
			password:""
		},
		{
			id: "assasaas",
			username: "Ignacio",
			email: "ignacio@gmail.com",
			password:""
		},
		{
			id: "assas23",
			username: "Juan",
			email: "juan@gmail.com",
			password:""
		}
	])

	await db.insert(Category).values([
		{
			id: "wqewq",
			label: "Software"
		},
		{
			id: "assas2",
			label: "Marketing"
		}
	])
	await db.insert(Todo).values([
		{
			id: "232dasd",
			title: "Crear fncion de fecha",
			descripcion: "funcion que adapte las fechas",
			user_id: "assas23",
			category_id: "assas2",
		},
		{
			id: "assaswqww",
			title: "Crear Anuncio",
			descripcion: "funcion de anuncio",
			category_id: "wqewq",
			user_id: "assasaas",
		}
	])
}