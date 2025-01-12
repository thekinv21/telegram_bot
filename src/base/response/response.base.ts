export type TypeBaseApiResponse<T> = {
	isSuccess: boolean
	status: number
	path: string
	message?: string | Array<{ errorMessage: string }>
	timestamp: string
	content: T
}

export type TypePaginatedApiResponse<T> = {
	isSuccess: boolean
	status: number
	path: string
	message?: string | Array<{ errorMessage: string }>
	timestamp: string
	total: number
	page: number
	pageSize: number
	isFirstPage: boolean
	isLastPage: boolean
	isEmpty: boolean
	totalPages: number
	content: T[]
}
