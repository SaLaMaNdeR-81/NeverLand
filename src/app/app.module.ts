import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { App_Dashboad } from './Dashboard/dashboad.component';

import { LoadingComponent } from './Components/Loading/Loading.Component';
import { AlertMessageComponent } from './Components/AlertMessage/AlertMessage.component';

import { Page_Auth } from './Page/Auth/Auth.Page';
import { Auth_AutherWay } from './Page/Auth/AutherWay/AutherWay.component';
import { Auth_Register } from './Page/Auth/Register/register.component';
import { Auth_Login } from './Page/Auth/Login/login.component';

import { Dashboard_Header } from './Dashboard/Layout/Header/header.component';
import { Dashboard_Sidebar } from './Dashboard/Layout/Sidebar/sidebar.component';
import { Dashboard_Content } from './Dashboard/Layout/Content/content.component';

import { Dashboard_SidebarTitle } from './Dashboard/Component/SidebarTitle/SidebarTitle.component';
import { Dashboard_SidebarMenu } from './Dashboard/Component/SidebarMenu/SidebarMenu.component';
import { Dashboard_SidebarItem } from './Dashboard/Component/SidebarItem/SidebarItem.component';

import { DashboardPage_Dashboard } from './Dashboard/Page/Dashboard/Dashboard.Page';
import { DashboardPage_Profile } from './Dashboard/Page/Profile/Profile.Page';
import { DashboardPage_Orders } from './Dashboard/Page/Orders/Orders.Page';
import { DashboardPage_Address } from './Dashboard/Page/Address/Address.Page';
import { DashboardPage_Support } from './Dashboard/Page/Support/Support.Page';
import { DashboardPage_Setting } from './Dashboard/Page/Setting/Setting.Page';

@NgModule({
  declarations: [
    AppComponent,
    App_Dashboad,
    
    LoadingComponent,
    AlertMessageComponent,

    Dashboard_Header,
    Dashboard_Sidebar,
    Dashboard_Content,
    
    Dashboard_SidebarTitle,
    Dashboard_SidebarMenu,
    Dashboard_SidebarItem,
    
    DashboardPage_Dashboard,
    DashboardPage_Profile,
    DashboardPage_Orders,
    DashboardPage_Address,
    DashboardPage_Support,

    Page_Auth,
    Auth_AutherWay,
    Auth_Register,
    Auth_Login,
    DashboardPage_Setting,

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '789731172590-ua2iee3ofvbp3t93q71adsnu1mfc4rco.apps.googleusercontent.com'
            )
          },
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
