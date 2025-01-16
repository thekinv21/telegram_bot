import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TelegramBotController } from './bot.controller'
import { TelegramBotService } from './bot.service'

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true
		})
	],
	controllers: [TelegramBotController],
	providers: [TelegramBotService],
	exports: [TelegramBotService]
})
export class TelegramBotModule {}
