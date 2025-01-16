import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class TelegramBotService {
	constructor(private configService: ConfigService) {}

	public async getProfile() {}
}
