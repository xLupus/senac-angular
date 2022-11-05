import { Component, OnInit } from '@angular/core';
import { Timezone } from "src/app/model/timezone";
import { TimezoneService } from "src/app/service/timezone.service";

@Component({
  selector: 'app-timezone',
  templateUrl: './timezone.component.html',
  styleUrls: ['./timezone.component.css']
})
export class TimezoneComponent implements OnInit {
    fuso = '';
    timezone?: Timezone;

  constructor(private timezoneService: TimezoneService) { }

  ngOnInit(): void {
  }

  obterFuso() {
      this.timezoneService.obterTimezone(this.fuso).subscribe((fuso) => {
          this.timezone = fuso;
      });
  }

}
