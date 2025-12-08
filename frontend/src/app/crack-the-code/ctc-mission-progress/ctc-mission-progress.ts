import {ChangeDetectionStrategy, Component,} from '@angular/core';
import {NgxEchartsDirective} from "ngx-echarts";

@Component({
  selector: 'app-ctc-mission-progress',
  imports: [NgxEchartsDirective],
  standalone: true,
  templateUrl: './ctc-mission-progress.html',
  styleUrl: './ctc-mission-progress.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CtcMissionProgress {

  radarOptions = {
    backgroundColor: 'transparent',
    // legend: {
    //   bottom: 0,
    //   textStyle: { color: '#e5e7eb' },
    //   data: ['Available Missions', 'Completed Missions']
    // },
    tooltip: {},
    radar: {
      radius: '70%',
      indicator: [
        { name: 'Cyber Espionage', max: 4 },
        { name: 'Digital Mayhem', max: 4 },
        { name: 'Inside the Breach', max: 4 },
        { name: 'Dark Ledger', max: 4 },
        { name: 'Zero Trace', max: 4 },
        { name: 'Operation Black Veil', max: 4 }
      ],
      splitLine: { lineStyle: { color: 'rgba(255,255,255,0.18)' } },
      axisLine: { lineStyle: { color: 'rgba(255,255,255,0.25)' } },
      name: {
        color: '#e5e7eb',
        fontSize: 12,
        fontWeight: 500
      }
    },
    series: [
      {
        type: 'radar',
        symbolSize: 7,
        lineStyle: { width: 2 },

        data: [
          {
            value: [3, 2, 3, 4, 0, 0],
            name: 'Available Missions',
            itemStyle: { color: '#00F5FF' },
            lineStyle: { color: '#00F5FF' },
            areaStyle: {
              color: 'rgba(0, 245, 255, 0.25)'
            }
          },
          {
            value: [2, 1, 1, 0, 0, 0],
            name: 'Completed Missions',
            itemStyle: { color: '#39FF14' },
            lineStyle: { color: '#39FF14' },
            areaStyle: {
              color: 'rgba(57, 255, 20, 0.25)'
            }
          }
        ]
      }
    ]
  };

}
