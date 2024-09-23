import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-system-settings',
  templateUrl: './system-settings.component.html',
  styleUrls: ['./system-settings.component.css']
})
export class SystemSettingsComponent implements OnInit {

  // Model properties for system settings
  systemName: string = 'Interpreter Management System';
  language: string = 'English';
  darkMode: boolean = false;
  twoFactorAuth: boolean = false;
  passwordExpiry: number = 30;
  emailNotifications: boolean = true;
  smsNotifications: boolean = false;
  apiKey: string = '';
  webhookUrl: string = '';

  languages: string[] = ['English', 'French', 'Spanish', 'German'];

  constructor() {}

  ngOnInit(): void {
    // Fetch settings from an API or local storage if needed
  }

  saveSettings() {
    console.log('Settings saved:', {
      systemName: this.systemName,
      language: this.language,
      darkMode: this.darkMode,
      twoFactorAuth: this.twoFactorAuth,
      passwordExpiry: this.passwordExpiry,
      emailNotifications: this.emailNotifications,
      smsNotifications: this.smsNotifications,
      apiKey: this.apiKey,
      webhookUrl: this.webhookUrl,
    });
    // Call a service to save settings or store them locally
  }
}
