(function(global, $) {
    
    var Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);   
    }
    // toetatud keeled
    var supportedLangs = ['en', 'es'];
    // tervitused
    var greetings = {
        en: 'Hello',
        es: 'Hola'
    };
    // formaalsed tervitused 
    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };
    // logimise teated mõlemas keeles
    var logMessages = {
        en: 'Logged in',
        es: 'Inició sesión'
    };
   
    Greetr.prototype = {
         // avalik funktsioon mis tagastab objekti täisnime
        fullName: function() {
            return this.firstName + ' ' + this.lastName;   
        },
         // kontrollib kas keel on toetatud
        validate: function() {
             if (supportedLangs.indexOf(this.language)  === -1) {
				 // veateade
                throw "Invalid language";   
             }
        },
        // saadab tervitusele õiges keeles ja sisestatud nimele
        greeting: function() {
            return greetings[this.language] + ' ' + this.firstName + '!';
        },
        // funktsioon mis tagastab formaalse tervituse
        formalGreeting: function() {
            return formalGreetings[this.language] + ', ' + this.fullName();  
        },
        // aheldatud meetodid tagastavad enda objektis olevad väärtused
        greet: function(formal) {
			// muutuja
            var msg;
            
            //  kui unidefined või null siis arvatakse "false"iks
            if (formal) {
				// määrab msg väärtuseks funktsiooni formalGreeting tagastuse
                msg = this.formalGreeting();  
            }
            else {
				// määrab msg väärtuseks fn greeting
                msg = this.greeting();  
            }

            if (console) {
				//prindib konsooli tervituse
                console.log(msg);
            }

            // 'this' viitab selle objekti kutsumisele käivituse ajal
            // muudab meetodi järjestikuliseks
            return this;
        },
        
		//aheldatud meetodid tagastavad enda objektis olevad väärtused
        log: function() {
			// kui määraja console on true
            if (console) {
				//prindib logimimissõnumi ja täisnime
                console.log(logMessages[this.language] + ': ' + this.fullName()); 
            }
                            
            return this;
        },
          //aheldatud meetodid tagastavad enda objektis olevad väärtused                  
        setLang: function(lang) {
			//muudab selle objekti language sisestatud väärtuseks 'lang'
            this.language = lang;
             //valideerib sisestatud keelt, kas see on toetatud.       
            this.validate();
            
            return this;
        }
        
    };
    
    Greetr.init = function(firstName, lastName, language) {
        
        var self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';
        
    }
    
    Greetr.init.prototype = Greetr.prototype;
    
    global.Greetr = global.G$ = Greetr;
    
}(window, jQuery));