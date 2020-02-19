import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {NativeScriptCommonModule} from 'nativescript-angular/common';
import {NativeScriptRouterModule} from 'nativescript-angular/router';
import { ModalDialogService } from 'nativescript-angular/modal-dialog';
import {
    componentDeclarations,
    providerDeclarations,
    routes,
} from './home.common';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild(routes)
    ],
    exports: [
        NativeScriptRouterModule
    ],
    declarations: [
        ...componentDeclarations
    ],
    providers: [
        ModalDialogService,
        ...providerDeclarations
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule {
}
