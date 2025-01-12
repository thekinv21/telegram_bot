import { Module } from '@nestjs/common'
import { CoreModule } from './core'

@Module({
	imports: [CoreModule],
	controllers: [],
	providers: []
})
export class AppModule {}
