import { MiddlewareConsumer, Module } from '@nestjs/common'
import { LoggingMiddleware } from './common'
import { CoreModule } from './core'

@Module({
	imports: [CoreModule],
	controllers: [],
	providers: []
})
export class AppModule {
	configure(consumer: MiddlewareConsumer) {
		consumer.apply(LoggingMiddleware)
	}
}
