import { Controller, Get } from '@nestjs/common'
import { TelegramBotService } from './bot.service'

@Controller('/telegram-bot')
export class TelegramBotController {
	constructor(private readonly telegramBotService: TelegramBotService) {}

	@Get('/get-me')
	public getProfile() {
		return this.telegramBotService.getProfile()
	}
}
