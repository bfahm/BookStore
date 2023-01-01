import { Component, OnInit } from "@angular/core";
import { initializeApp } from "firebase/app";
import { AuthService } from "./auth/auth.service";
import { firebaseConfig } from "./auth/firebase.config";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
    constructor(private readonly authService: AuthService) {}

    isAuthenticated(){
        return this.authService.isAuthenticated;
    }

    ngOnInit(): void {
        initializeApp(firebaseConfig)
    }
    
    onClickLogout(): void {
        this.authService.logout();
    }
}