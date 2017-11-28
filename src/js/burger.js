var burger = {
  classAnim: "anim3",
  classAnimBack: "animBack",
  animFunction: function(){
    $(".burger").on('click', function(ev){
      if(this.classAnim === "anim3"){
        this.classAnimBack = "animBack3";
      }
      if($(ev.currentTarget).hasClass(this.classAnim)){
        $(ev.currentTarget).removeClass(this.classAnim);
        $(ev.currentTarget).addClass(this.classAnimBack);
      } else {
        if($(ev.currentTarget).hasClass("demo1")){
          this.classAnim = "anim1";
          this.classAnimBack = "animBack";
        } else if ($(ev.currentTarget).hasClass("demo2")){
          this.classAnim = "anim2";
          this.classAnimBack = "animBack";
        } else {
          this.classAnim = "anim3";
          this.classAnimBack = "animBack3";
        }
        $(ev.currentTarget).removeClass(this.classAnimBack);
        $(ev.currentTarget).addClass(this.classAnim);
      }
    }.bind(this));
  }
};

burger.animFunction();
