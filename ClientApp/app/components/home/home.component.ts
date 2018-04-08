import { Component } from '@angular/core';
class IntroductionItem{
    public IntroductionText: string;
    public IntroductionResponse: string;
    public Hidden:boolean;
    public HideResponse: boolean;
    constructor(introduction:string, response:string, show:boolean){
        this.IntroductionText=introduction;
        this.IntroductionResponse = response;
        this.Hidden = show;
        this.HideResponse=true;
    }

    public showResponse(nextItem:IntroductionItem, showNext:boolean){
        setTimeout(()=>{
            this.HideResponse=false;
            if(showNext)
                nextItem.showIt();
        }, 2000);
        
    }

    public showIt(){
        this.Hidden = false;
    }
}
@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent {
    introductions:IntroductionItem[];
    hideContact:boolean;
    constructor(){
        this.introductions = [
            new IntroductionItem("I am Pradeep!", " + name display complete...", false),
            new IntroductionItem("I am a developer, creator, nerd and geek!", " ++ what I do complete...", true),
            new IntroductionItem("I am also a father, husband, friend and brother!", " +++ about me complete...", true),
            new IntroductionItem("Get in touch?", "", true)
        ];
        this.hideContact=true;
    }
    onTypingAnimationComplete(index:number, showNext: boolean){
        this.introductions[index].showResponse(this.introductions[index+1], showNext);
        if(index==this.introductions.length-1)
        this.hideContact=false;
    }
}
