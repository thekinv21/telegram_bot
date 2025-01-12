import { Module } from '@nestjs/common'
import { TelegramBotModule } from './bot/bot.module'

@Module({
	imports: [TelegramBotModule]
})
export class CoreModule {}
