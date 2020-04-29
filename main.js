

$(document).ready(function () {
    $('.submit').click(function(event) {
    
        console.log('Clicked button')
        
        var email = $('.email').val()
        var subject = $('.subject').val()
        var message = $('.message').val()
        var statusElm = $('.status')
        statusElm.empty()
        
        if(email.length > 5 && email.includes('@') && email.includes('.')){
            
        statusElm.append('<div>Emailen er valideret</div>')    
        } else{
            event.preventDefault()
            statusElm.append('<div>Emailen er ikke valideret</div>') 
        }
        
        
      if(subject.length >= 2) {
           statusElm.append('<div>Emnet er valideret</div>') 
          
      }  else{
          event.preventDefault()
           statusElm.append('<div>Emnet er for kort</div>') 
      }
        
        
    if(message.length > 10) {
        statusElm.append('<div>Beskeden er valideret</div>')    
        
    } else{
        event.preventDefault()
        statusElm.append('<div>Beskeden er for kort</div>')
    }  
        
    })
    
    
})

