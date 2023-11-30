import { Body, Controller, Post, Get, Req } from '@nestjs/common';
import { SignupDto } from './dto/signupDto';
import { SigninDto } from './dto/signinDto';
import { ResetPasswordDemandDto } from './dto/resetPasswordDemandDto';
import { AuthService } from './auth.service';
import { ResetPasswordConfirmationDto } from './dto/resetPasswordConfirmationDto';
import {User} from "@prisma/client";
import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {

    }
    @Post("signup")
    signup(@Body() signupDto: SignupDto) {
        return this.authService.signup(signupDto)
    }

    @Post("signin")
    signin(@Body() signinDto: SigninDto) {
        console.log('text')
        console.log(signinDto)
        return this.authService.signin(signinDto)
    }
    @Post("reset-password")
    resetPasswordDemand(@Body() resetPasswordDemandDto: ResetPasswordDemandDto) {
        return this.authService.resetPasswordDemand(resetPasswordDemandDto)
    }
    @Post("reset-password-confirmation")
    resetPasswordConfirmation(@Body() resetPasswordConfirmationDto: ResetPasswordConfirmationDto) {
        return this.authService.resetPasswordConfirmation(resetPasswordConfirmationDto)
    }

    @Get("profile")
    async getProfile(@Req() request: Request): Promise<User> {
        try {
            const token: string = request.headers['authorization'].split(' ')[1]; // Récupérer le JWT de l'en-tête Authorization

            const user: User = await this.authService.verifyJwt(token); // Vérifier le JWT et obtenir les informations de l'utilisateur

            if (user) {
                return user; // Si l'utilisateur est vérifié, renvoyer les informations de l'utilisateur
            } else {
                throw new UnauthorizedException(); // Si l'utilisateur n'est pas vérifié, renvoyer une exception non autorisée
            }
        } catch (error) {
            throw new UnauthorizedException(); // Si une erreur se produit lors de la vérification du JWT, renvoyer une exception non autorisée
        }
    }

}
