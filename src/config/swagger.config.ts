import { DocumentBuilder } from '@nestjs/swagger'

export const swagger = new DocumentBuilder()
	.setTitle('Telegram Bot API')
	.setDescription('The Telegram Bot API description')
	.setVersion('1.0.0')
	.build()
