import { Controller, Get } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { TelegramBotService } from './bot.service'

@Controller('/telegram-bot')
@ApiTags('Telegram Bot')
export class TelegramBotController {
	constructor(private readonly telegramBotService: TelegramBotService) {}

	@ApiOperation({ summary: 'Get Bot profile' })
	@Get('/get-me')
	public getProfile() {
		return this.telegramBotService.getProfile()
	}
}
