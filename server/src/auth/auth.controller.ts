import { Body, Controller, HttpCode, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthDto } from './auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
	constructor(private readonly AuthService: AuthService) {}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post("login")
	async login(@Body() dto: AuthDto) {
		return this.AuthService.login(dto)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post("register")
	async register(@Body() dto: AuthDto) {
		return this.AuthService.register(dto)
	}
}

// GET /api/cards get all cards
// GET /api/cards/:id get one card
// DELETE /api/cards/:id