import { MiddlewareConsumer, Module } from '@nestjs/common'
import { LoggingMiddleware } from './common'
import { CoreModule } from './core'

import { ConfigModule } from '@nestjs/config'

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true
		}),
		CoreModule
	],
	controllers: [],
	providers: []
})
export class AppModule {
	configure(consumer: MiddlewareConsumer) {
		consumer.apply(LoggingMiddleware)
	}
}
