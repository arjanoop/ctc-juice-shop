import { Injectable } from '@angular/core';
import {missionTheme} from "../../constants";

@Injectable({
  providedIn: 'root',
})
export class CtcMissions {

  private generateGuid(): string {
    return crypto.randomUUID();
  }

  getAllThemes(): missionTheme[] {
    return this.themes;
  }

  getCompletedMissionIds(): string[] {
    const completedIds: string[] = [];

    this.themes.forEach(theme => {
      theme.missions.forEach(mission => {
        if (mission.status === 'completed') {
          completedIds.push(mission.id);
        }
      });
    });

    return completedIds;
  }

  completeMission(missionId: string): void {
    this.themes.forEach(theme => {
      theme.missions.forEach(mission => {
        if (mission.id === missionId) {
          mission.status = 'completed';
        }
      });
    });
  }

  getThemeProgress(themeId: string): number {
    const theme = this.themes.find(t => t.id === themeId);
    if (!theme) return 0;

    const total = theme.missions.length;
    const completed = theme.missions.filter(m => m.status === 'completed').length;

    return Math.round((completed / total) * 100);
  }

  private themes: missionTheme[] = [
    {
      id: this.generateGuid(),
      title: 'Cyber Espionage',
      tagline: 'Silent access. Privilege escalation. Data exfiltration.',
      status: 'active',
      image: 'https://www.logsign.com/uploads/top_cyber_threats_0bc41b2934.png',
      missions: [
        {
          id: this.generateGuid(),
          order: 1,
          title: 'Ghost Credentials',
          objective: 'Bypass authentication using weak or leaked credentials.',
          target: '/login',
          owasp: 'A07 - Authentication Failures',
          difficulty: 'Easy',
          status: 'completed',
          image: '/images/missions/ghost-credentials.jpg'
        },
        {
          id: this.generateGuid(),
          order: 2,
          title: 'Climbing the Ranks',
          objective: 'Escalate privileges using broken access control.',
          target: '/admin',
          owasp: 'A01 - Broken Access Control',
          difficulty: 'Medium',
          status: 'active',
          image: '/images/missions/climbing-the-ranks.jpg'
        },
        {
          id: this.generateGuid(),
          order: 3,
          title: 'Silent Database Pull',
          objective: 'Extract sensitive records using SQL injection.',
          target: '/api/search',
          owasp: 'A03 - Injection',
          difficulty: 'Hard',
          status: 'locked',
          image: '/images/missions/silent-database-pull.jpg'
        }
      ]
    },

    {
      id: this.generateGuid(),
      title: 'Digital Mayhem',
      tagline: 'Public defacement. Viral attacks. User manipulation.',
      status: 'active',
      image: 'https://bsmedia.business-standard.com/_media/bs/img/article/2024-07/24/full/1721806391-6188.jpg?im=FitAndFill=(826,465)',
      missions: [
        {
          id: this.generateGuid(),
          order: 1,
          title: 'Review Rampage',
          objective: 'Inject persistent scripts into product reviews.',
          target: '/reviews',
          owasp: 'A07 - Stored XSS',
          difficulty: 'Easy',
          status: 'completed',
          image: '/images/missions/review-rampage.jpg'
        },
        {
          id: this.generateGuid(),
          order: 2,
          title: 'Click Trap',
          objective: 'Exploit reflected XSS to hijack user sessions.',
          target: '/search',
          owasp: 'A07 - Reflected XSS',
          difficulty: 'Medium',
          status: 'active',
          image: '/images/missions/click-trap.jpg'
        },
        {
          id: this.generateGuid(),
          order: 3,
          title: 'One Click Too Many',
          objective: 'Trigger unauthorized actions using CSRF.',
          target: '/wishlist',
          owasp: 'A05 - CSRF',
          difficulty: 'Hard',
          status: 'locked',
          image: '/images/missions/one-click-too-many.jpg'
        }
      ]
    },

    {
      id: this.generateGuid(),
      title: 'Inside the Breach',
      tagline: 'Insider abuse. Broken trust. Business logic exploitation.',
      status: 'active',
      image: 'https://www.techmonitor.ai/wp-content/uploads/sites/29/2016/08/shutterstock_740523562-ai.webp',
      missions: [
        {
          id: this.generateGuid(),
          order: 1,
          title: 'Reset from Within',
          objective: 'Exploit weak password reset to hijack accounts.',
          target: '/reset-password',
          owasp: 'A07 - Authentication Failures',
          difficulty: 'Easy',
          status: 'locked',
          image: '/images/missions/reset-from-within.jpg'
        },
        {
          id: this.generateGuid(),
          order: 2,
          title: 'Power Without Permission',
          objective: 'Modify internal roles without authorization.',
          target: '/roles',
          owasp: 'A01 - Broken Access Control',
          difficulty: 'Medium',
          status: 'locked',
          image: '/images/missions/power-without-permission.jpg'
        },
        {
          id: this.generateGuid(),
          order: 3,
          title: 'Abuse of Trust',
          objective: 'Perform fraudulent actions as trusted staff.',
          target: '/orders',
          owasp: 'A04 - Insecure Design',
          difficulty: 'Hard',
          status: 'locked',
          image: '/images/missions/abuse-of-trust.jpg'
        }
      ]
    },

    {
      id: this.generateGuid(),
      title: 'Dark Ledger',
      tagline: 'Fraud, race conditions, underground transactions.',
      status: 'active',
      image: 'https://content.kaspersky-labs.com/se/com/content/en-global/images/repository/isc/2020/deep-web-cover/deep-web-cover.jpg',
      missions: [
        {
          id: this.generateGuid(),
          order: 1,
          title: 'Infinite Coupon',
          objective: 'Exploit flawed discount validation for unlimited usage.',
          target: '/coupon',
          owasp: 'A04 - Insecure Design',
          difficulty: 'Easy',
          status: 'locked',
          image: '/images/missions/infinite-coupon.jpg'
        },
        {
          id: this.generateGuid(),
          order: 2,
          title: 'Phantom Wallet',
          objective: 'Manipulate wallet API to increase balance.',
          target: '/wallet',
          owasp: 'A03 - Injection',
          difficulty: 'Medium',
          status: 'locked',
          image: '/images/missions/phantom-wallet.jpg'
        },
        {
          id: this.generateGuid(),
          order: 3,
          title: 'Double Spend',
          objective: 'Exploit race condition during checkout.',
          target: '/checkout',
          owasp: 'A04 - Insecure Design',
          difficulty: 'Hard',
          status: 'locked',
          image: '/images/missions/double-spend.jpg'
        }
      ]
    },
    {
      id: this.generateGuid(),
      title: 'Zero Trace',
      tagline: 'Ultra-stealth attacks with no logs, no evidence.',
      status: 'coming_soon',
      image: 'https://www.resecurity.com/uploads/post/193/193.jpg?bb310a6f660cd5eb3e73bb2a68703e76',
      missions: []
    },
    {
      id: this.generateGuid(),
      title: 'Operation Black Veil',
      tagline: 'Coordinated corporate sabotage across multiple systems.',
      status: 'coming_soon',
      image: 'https://aperioglobal.com/wp-content/uploads/2023/01/CyberOpsHero.webp',
      missions: []
    }
  ];

}
