/**
 * Created by 10177553 on 2017/4/10.
 */

import { NgModule } from '@angular/core';

import {RdkDropDownInput} from "./basic/basic";
import {RouterModule} from "@angular/router";
import {RdkDropDownModule} from "../../../../component/dropdown/index";
import {DropDownMultipleDemo} from "./multiple/multiple";
import {RdkTileSelect, RdkTileSelectModule,RdkTileOption} from "../../../../component/tile-select/tile-select";
import {RdkDropDownTrigger} from "./trigger/trigger";
import {RdkButtonModule} from "../../../../component/button/button";
import {RdkInputModule} from "../../../../component/input/input";
import {RdkDropDownDisable} from "./disable/disable";
import {DropDownAutoWidthDemo} from "./autoWidth/autoWidth";
import {DropDownLabelFieldDemo} from "./labelField/labelField";
import {DropDownWidthDemo} from "./dropdownWidth/dropDownWidth";
import {DropDownChangeDemo} from "./change/change";
import {PopupService} from "rdk/service/popup.service";
const routes = [
    {
        path: 'basic', component:RdkDropDownInput
    },
    {
        path: 'trigger', component:RdkDropDownTrigger
    },{
        path: 'disable', component:RdkDropDownDisable
    },
    {
        path: 'multiple', component:DropDownMultipleDemo
    },
    {
        path: 'autoWidth', component:DropDownAutoWidthDemo
    },{
        path: 'labelField', component:DropDownLabelFieldDemo
    },{
        path: 'dropDownWidth', component:DropDownWidthDemo
    },{
        path: 'change', component:DropDownChangeDemo
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        RdkDropDownModule,
        RdkTileSelectModule,
        RdkButtonModule,
        RdkInputModule],
    exports: [RdkDropDownInput, DropDownMultipleDemo],
    declarations: [RdkDropDownInput,DropDownMultipleDemo,RdkDropDownTrigger,
                   RdkDropDownDisable,DropDownAutoWidthDemo,DropDownLabelFieldDemo,
        DropDownWidthDemo,DropDownChangeDemo],
    providers: [PopupService]
})
export class DropDownDemoModule { }
