import {Component} from '@angular/core';
import {MatGridListModule} from "@angular/material/grid-list";
import {CtcMissions} from "../services/ctc-missions/ctc-missions";
import {missionTheme} from "../constants";
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {Router} from "@angular/router";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {CtcMissionProgress} from "../ctc-mission-progress/ctc-mission-progress";

@Component({
    selector: 'app-ctc-home',
    imports: [MatGridListModule, CommonModule, MatCardModule, MatButtonModule, MatIconModule, NgOptimizedImage, MatProgressBarModule, CtcMissionProgress],
    standalone: true,
    templateUrl: './ctc-home.html',
    styleUrl: './ctc-home.scss',
})
export class CtcHome {
    themes: missionTheme[] = [];
    onGoing: missionTheme[] = [];

    constructor(private ctcMissions: CtcMissions, private router: Router) {
        this.onGoing = [this.getThemes()[0]]
        this.themes = this.getThemes().slice(1, 6);
    }

    private getThemes(): missionTheme[] {
        return this.ctcMissions.getAllThemes()
    }

    openTheme(theme: missionTheme): void {
        if (theme.status === 'coming_soon') {
            return;
        } else {
            this.router.navigate(['/ctc/mission'], {
                queryParams: {id: theme.id}
            });
        }
    }
}
