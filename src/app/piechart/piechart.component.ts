import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BubbleDataPoint, Chart, ChartTypeRegistry, Point ,registerables } from 'chart.js';
import { Observable } from 'rxjs';
import { AnimationSpec, AnimationEvent } from 'chart.js';
import { _DeepPartialObject } from 'chart.js/types/utils';
import { UserService } from '../service/user.service';

Chart.register(...registerables);

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {

  chartdata: any;

  labeldata: any[] = [];
  realdata: any[] = [];
  colordata: any[] = [];

  constructor(private service: UserService) { }

  ngOnInit(): void {
    const colors = [ 'green', 'yellow'];
    const colorPalette = ['#5D5FEF', '#EF5D5D', '#5DEF9A', '#EFE15D', '#8A5DEF'];

    this.service.getAllRolesWithUserCounts().subscribe(result => {
      this.chartdata = result;
      if(this.chartdata!=null){
        for(let i=0; i<this.chartdata.length ;i++){
          this.labeldata.push(this.chartdata[i].name);
          this.realdata.push(this.chartdata[i].count);
          this.colordata.push(colorPalette[i % colorPalette.length]);
        }
        this.RenderChart(this.labeldata,this.realdata,this.colordata,'bar','barchart');
        this.RenderChart(this.labeldata,this.realdata,this.colordata,'pie','piechart');
        this.RenderChart(this.labeldata,this.realdata,this.colordata,'doughnut','dochart');
        this.RenderChart(this.labeldata,this.realdata,this.colordata,'polarArea','pochart');
        this.RenderChart(this.labeldata,this.realdata,this.colordata,'radar','rochart');
      }
    });
    this.RenderBubblechart();
    this.RenderScatterchart();
  }

  RenderChart(labeldata:any,maindata:any,colordata:any,type:any,id:any) {
    const myChart = new Chart(id, {
      type: type,
      data: {
        labels: labeldata,
        datasets: [{
          label: 'Number of Users by their Roles',
          data: maindata,
          backgroundColor: colordata,
          borderColor: [
            'rgba(255, 99, 132, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  RenderBubblechart(){
    const data = {
      datasets: [{
        label: 'First Dataset',
        data: [{
          x: 20,
          y: 30,
          r: 15
        }, {
          x: 40,
          y: 10,
          r: 10
        }],
        backgroundColor: 'rgb(255, 99, 132)'
      }]
    };
    const myChart = new Chart('bubchart', {
      type: 'bubble',
      data: data,
      options: {}
    });
  }

  RenderScatterchart(){
    const data = {
      datasets: [{
        label: 'Scatter Dataset',
        data: [{
          x: -10,
          y: 0
        }, {
          x: 0,
          y: 10
        }, {
          x: 10,
          y: 5
        }, {
          x: 0.5,
          y: 5.5
        }],
        backgroundColor: 'rgb(255, 99, 132)'
      }]
    };
    const myChart = new Chart('scchart', {
      type: 'scatter',
      data: data,
      options:
{
        scales: {
          x: {
            type: 'linear',
            position: 'bottom'
          }
        }
      }
    });
  }

}