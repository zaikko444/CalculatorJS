function createCalculator(){
  return {
    display: document.querySelector('.display'),

    start(){
     this.buttonClick()
    },

    sumTotal(){
      try{
        let sum = eval(this.display.value)
        this.display.value = '';
        this.display.value += sum

      } catch{
        alert('Conta invalida')
      }
    },


    buttonClick() {
      document.addEventListener('click', (e) =>{
        const el = e.target;
    
        if(el.classList.contains('btn-num')){
            this.btnForDisplay(el.innerText)
        }

        if (el.classList.contains('btn-clear')){
          this.clearDisplay()
        }

        if (el.classList.contains('btn-del')){
          this.deleteOne()
        }

        if (el.classList.contains('btn-eq')){
         this.sumTotal()
        }

      });
    },

    deleteOne(){
      this.display.value = this.display.value.slice(0, -1)
    },

    clearDisplay(){
      this.display.value = '';
    },

    buttonDel(){
      document.addEventListener('click', function(e){
        if(e.target.classList.contains('btn-del')){
          console.log('test')
        }

      }.bind(this))
    },

    btnForDisplay(value){
      this.display.value += value
    }
  }
}

const calculadora = createCalculator();
calculadora.start();
