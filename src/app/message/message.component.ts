import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';
import { NotificationType } from '../notification.message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
  }

  showMessage() {
    this.notificationService.sendMessage({
      message: 'New message from a different component',
      type: NotificationType.success
    });
  }

}
