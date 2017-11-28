var burger = {
  classAnim: "anim3",
  classAnimBack: "animBack",
  animFunction: function(){
    $(".burger").on('click', function(ev){
      if(this.classAnim === "anim3"){
        this.classAnimBack = "animBack3";
      }
      if($(ev.currentTarget).hasClass(this.classAnim) === true){
        $(ev.currentTarget).removeClass(this.classAnim);
        $(ev.currentTarget).addClass(this.classAnimBack);
      } else {
        $(ev.currentTarget).removeClass(this.classAnimBack);
        $(ev.currentTarget).addClass(this.classAnim);
      }
    }.bind(this));
  }
};

burger.animFunction();
