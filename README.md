# Angular 2 soil input form
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?maxAge=2592000)](http://opensource.org/licenses/MIT)
![screenshot](screenshot.png)

An Angular2 component that allows one to insert a soil pit entry form into a project. This is highly influenced by the soil data sheets that we use here in Western Canada, but I suspect it would be a solid starting point for any soil pit data collection needs. 

The project is part of the larger Saskatchewan Soil Information Systemn (SKSIS- link to come).

 
**installation** 

``npm i ng2-soil-input-form --save``

**usage**

```
import { NgModule } from '@angular/core';
import { SoilPitFormModule } from 'ng2-soil-input-form';

@NgModule({
  imports     : [ SoilPitFormModule ]
})

export class YourModule {}
```
  
```
import { Component } from '@angular/core';

@Component({
    selector: 'your-component',
    template: `<soil-pit-form></soil-pit-form>`
})
export class YourComponent {}
```  

**handling data**

It's really bad right now. Ultimately I expect the the component will emit some kind of event that will contain the form
information, which can they be handled by the parent component. Then it can be saved or whatever. But that is not done
at the moment. Someday (Sunday).