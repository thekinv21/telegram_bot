import { ApiProperty } from '@nestjs/swagger'
import { IsNumber } from 'class-validator'

export class SetPhotoRequest {
	@ApiProperty({
		name: 'chat_id',
		description: 'Chat ID',
		example: 7818533722,
		required: true
	})
	@IsNumber()
	chat_id: number

	@ApiProperty({
		name: 'photo',
		description: 'Bot photo (multipart/form-data)',
		type: 'string',
		format: 'binary',
		required: true
	})
	photo: File
}
