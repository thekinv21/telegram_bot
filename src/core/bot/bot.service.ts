import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import axios from 'axios'

@Injectable()
export class TelegramBotService {
	constructor(private configService: ConfigService) {}

	apiUrl = this.configService.get('TELEGRAM_API_URL_WITH_TOKEN')

	public async getBotInfo() {
		const response = await axios.get(`${this.apiUrl}/getMe`)
		return response.data
	}

	public async setChatPhoto() {
		const response = await axios.post(`${this.apiUrl}/setChatPhoto`)
		return response.data
	}
}
