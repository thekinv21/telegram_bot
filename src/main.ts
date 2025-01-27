import * as dotenv from 'dotenv'

import { NestFactory } from '@nestjs/core'
import type { NestExpressApplication } from '@nestjs/platform-express'
import { SwaggerModule } from '@nestjs/swagger'

import { AppModule } from './app.module'
import {
	ApiResponseInterceptor,
	GlobalExceptionFilter,
	LoggingMiddleware
} from './common'
import { swagger } from './config'

async function bootstrap() {
	const app = await NestFactory.create<NestExpressApplication>(AppModule, {
		logger: console
	})

	app.setGlobalPrefix('api')
	app.useGlobalFilters(new GlobalExceptionFilter())
	app.useGlobalInterceptors(new ApiResponseInterceptor())
	app.use(new LoggingMiddleware().use)

	SwaggerModule.setup('docs', app, SwaggerModule.createDocument(app, swagger))

	await app.listen(process.env.APP_PORT || 4200)

	dotenv.config()
}
bootstrap()
