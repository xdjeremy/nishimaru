/**
* This file was @generated using pocketbase-typegen
*/

export enum Collections {
	Categories = "categories",
	Foods = "foods",
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

export type UsersRecord = {
	name?: string
	avatar?: string
}

// Response types include system fields and match responses from the PocketBase API
export type CategoriesResponse = CategoriesRecord & BaseSystemFields
export type FoodsResponse<Texpand = unknown> = FoodsRecord & BaseSystemFields<Texpand>
export type UsersResponse = UsersRecord & AuthSystemFields

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	categories: CategoriesRecord
	foods: FoodsRecord
	users: UsersRecord
}

export type CollectionResponses = {
	categories: CategoriesResponse
	foods: FoodsResponse
	users: UsersResponse
}