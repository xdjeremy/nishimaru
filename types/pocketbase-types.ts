/**
* This file was @generated using pocketbase-typegen
*/

export enum Collections {
	Carts = "carts",
	Categories = "categories",
	Foods = "foods",
	OrderItems = "order_items",
	Orders = "orders",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type CartsRecord = {
	user: RecordIdString
	active?: boolean
	food: RecordIdString
	quantity: number
}

export type CategoriesRecord = {
	title: string
	image: string
	featured?: boolean
	active?: boolean
}

export type FoodsRecord = {
	title: string
	description: string
	price: number
	image: string
	category: RecordIdString
	featured?: boolean
	active?: boolean
}

export type OrderItemsRecord = {
	user: RecordIdString
	food: RecordIdString
	quantity: number
}

export type OrdersRecord = {
	user: RecordIdString
	fullName: string
	email: string
	address: string
	order_items: RecordIdString[]
}

export enum UsersTypeOptions {
	"user" = "user",
	"admin" = "admin",
}
export type UsersRecord = {
	name?: string
	type: UsersTypeOptions
}

// Response types include system fields and match responses from the PocketBase API
export type CartsResponse<Texpand = unknown> = CartsRecord & BaseSystemFields<Texpand>
export type CategoriesResponse = CategoriesRecord & BaseSystemFields
export type FoodsResponse<Texpand = unknown> = FoodsRecord & BaseSystemFields<Texpand>
export type OrderItemsResponse<Texpand = unknown> = OrderItemsRecord & BaseSystemFields<Texpand>
export type OrdersResponse<Texpand = unknown> = OrdersRecord & BaseSystemFields<Texpand>
export type UsersResponse = UsersRecord & AuthSystemFields

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	carts: CartsRecord
	categories: CategoriesRecord
	foods: FoodsRecord
	order_items: OrderItemsRecord
	orders: OrdersRecord
	users: UsersRecord
}

export type CollectionResponses = {
	carts: CartsResponse
	categories: CategoriesResponse
	foods: FoodsResponse
	order_items: OrderItemsResponse
	orders: OrdersResponse
	users: UsersResponse
}