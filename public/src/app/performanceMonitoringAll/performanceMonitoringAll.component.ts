import { Component, OnInit } from '@angular/core';
import { NavComponent } from '../dashboard/nav.component';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgClass} from '@angular/common';
import { Http } from '@angular/http'
declare var $: any;

@Component({
  selector: 'app-performance',
  templateUrl: './performanceMonitoringAll.component.html',
  styleUrls: ['./performanceMonitoringAll.component.css']
})
export class performanceMonitoringAllComponent implements OnInit {

  constructor (
                 private parent: NavComponent,
                 private route: ActivatedRoute,
                 private router: Router,
                 private http:Http
    ) {}

    para = '';
    public logCheckup = "";

  //点击请求接口
  url: string = 'http://112.74.173.198:8080/viewTopPerformance'; 
  public realTimeAllVisitnum:Array<any>=[];
  click() { 
    this.http.get(this.url).map(res => res.json()).subscribe(function (data) {//map方法转成正常的json格式的数据
        console.log(data);
        console.log(data._result);
        for(let i=0;i<data._datum._totleVisitList.length;i++){
          //realTimeAllVisitnum[i]=data._datum._totleVisitList[i];
        }
    })   
  } 

    ngOnInit(){
        this.parent.setActiveByPath(this.parent.performanceMonitoringAll,"");

        this.route.params.subscribe((params) => {
          console.log(params['id']);
          this.para=params['id'];
        });
  
        this.logCheckup = "/main/"+this.para+"/logCheckup";

    };
         // lineChart
  public lineChartData:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
    // {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
  ];
  public lineChartLabels:Array<any> = ['11:00', '12:00', '1:00', '2:00', '3:00', '4:00', '5:00'];
  public lineChartOptions:any = {
    animation: false,
    responsive: true
  };
  // public lineChartColours:Array<any> = [
  //   { // green
  //     backgroundColor: 'rgba(202,252,209,0.2)',
  //     borderColor: 'rgba(90,202,106,1)',
  //     pointBackgroundColor: 'rgba(148,159,177,1)',
  //     pointBorderColor: '#fff',
  //     pointHoverBackgroundColor: '#fff',
  //     pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  //   },
  //   { // dark grey
  //     backgroundColor: 'rgba(77,83,96,0.2)',
  //     borderColor: 'rgba(77,83,96,1)',
  //     pointBackgroundColor: 'rgba(77,83,96,1)',
  //     pointBorderColor: '#fff',
  //     pointHoverBackgroundColor: '#fff',
  //     pointHoverBorderColor: 'rgba(77,83,96,1)'
  //   },
  //   { // gre
  //     backgroundColor: 'rgba(168,226,178,0.2)',
  //     borderColor: 'rgba(5,124,22,1)',
  //     pointBackgroundColor: 'rgba(148,159,177,1)',
  //     pointBorderColor: '#fff',
  //     pointHoverBackgroundColor: '#fff',
  //     pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  //   }
  // ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

  public randomize():void {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  //barchart

public barChartOptions:any={
  scaleShowVerticalLines:false,
  responsive:true
}
public barChartLabels:string[] = ['11:00', '12:00', '1:00', '2:00', '3:00', '4:00', '5:00'];
public barChartType:string='bar';
public barChartLegend:boolean=true;

public barChartData:any[] = [
  {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
  {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
];

public randomise():void{
 let data=[
   Math.round(Math.random()*100),
   59,
   80,
   (Math.random()*100),
   56,
   (Math.random()*100),
   40];
   let clone = JSON.parse(JSON.stringify(this.barChartData));
   clone[0].data = data;
   this.barChartData = clone;
}

//柱折可转换
public changeType():void {
  this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';
  this.barChartType = this.barChartType==='bar'?'line':'bar'
}

}