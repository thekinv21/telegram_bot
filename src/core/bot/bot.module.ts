import { Module } from '@nestjs/common'
import { TelegramBotController } from './bot.controller'
import { TelegramBotService } from './bot.service'

@Module({
	imports: [],
	controllers: [TelegramBotController],
	providers: [TelegramBotService],
	exports: [TelegramBotService]
})
export class TelegramBotModule {}
