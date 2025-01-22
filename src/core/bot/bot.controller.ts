import { Controller, Get, Post } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { TelegramBotService } from './bot.service'

@Controller('/telegram-bot')
@ApiTags('Telegram Bot')
export class TelegramBotController {
	constructor(private readonly telegramBotService: TelegramBotService) {}

	@ApiOperation({ summary: 'Get Bot profile' })
	@Get('/get-me')
	public getProfile() {
		return this.telegramBotService.getBotInfo()
	}

	@ApiOperation({ summary: 'Set a new chat photo' })
	@Post('/set-chat-photo')
	public setChatPhoto() {
		return this.telegramBotService.setChatPhoto()
	}
}
